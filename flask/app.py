import re
from sqlite3 import DateFromTicks
import string
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import numpy as np
import cv2
import pandas as pd
import json
import matplotlib.pyplot as plt
from flask_cors import CORS 
from PIL import Image

app = Flask(__name__)
CORS(app)

@app.route('/imageupload', methods=['POST'])
def imageupload():
    dic = request.get_json()
    print(dic["image"])
    return(request.get_json())
    

@app.route('/')
def form():
    return render_template('index.html')
 
@app.route('/', methods = ['POST', 'GET'])
def upload():
    try:
        if request.method == 'POST':
            f = request.files['file']
            f.save(f.filename)
            # file = open(r'/path/to/your/file.py', 'r').read()
            image = cv2.imread(f.filename) 
            try:
                gray_img=cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
            except:
                return "Upload a valid image file with extension .jpg or .jpeg or .png" 
            input_image_cpy = image.copy()
            threshold_value = gray_img[216, 402]
            ret, binary_img = cv2.threshold(gray_img, threshold_value, 255, cv2.THRESH_BINARY)
            inverted_binary_img = ~ binary_img
            contours_list, hierarchy = cv2.findContours(inverted_binary_img,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE) 
            def get_contour_areas(contours_list):
                all_areas= []
                for cnt in contours_list:
                    area= cv2.contourArea(cnt)
                    all_areas.append(area)
                return all_areas
            sorted_contours= sorted(contours_list, key=cv2.contourArea, reverse= True)
            largest_item= sorted_contours[0]
            cv2.drawContours(input_image_cpy, largest_item, -1, (255,0,0),10)
            #cv2.imshow('Largest Object', input_image_cpy)
            #cv2.waitKey(0)
            x,y,w,h = cv2.boundingRect(largest_item)
            new_img=input_image_cpy[y:y+h,x:x+w] 
            cv2.imwrite('1.jpeg', new_img)
            img=cv2.imread("1.jpeg",0)
            img3=cv2.imread("1.jpeg")
            # edged = cv2.Canny(image, 10, 250) 
            # (cnts, _) = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE) 
            # idx = 0 
            # l=[]
            # for c in cnts: 
            #     x,y,w,h = cv2.boundingRect(c) 
            #     if w>50 and h>50: 
            #         idx+=1
            #         if idx==1:
            #             new_img=image[y:y+h,x:x+w] 
            #             cv2.imwrite(str(idx) + '.jpeg', new_img)
            # img = cv2.imread("1.jpeg",0)
            # img3=cv2.imread("1.jpeg")
            # img.shape

            img_hsv = cv2.cvtColor(img3, cv2.COLOR_BGR2HSV)

            hsv_color1 = np.asarray([0, 200, 255])   # white!
            hsv_color2 = np.asarray([200, 250, 255])   # yellow! note the order

            mask = cv2.inRange(img_hsv, hsv_color1, hsv_color2)

            cv2.imwrite("green.png",mask)

            file1 = r'green.png'
            img2=cv2.imread(file1)

            #thresholding the image to a binary image
            thresh,img_bin = cv2.threshold(img,128,255,cv2.THRESH_BINARY | cv2.THRESH_OTSU)

            #inverting the image 
            img_bin = 255-img_bin
            #cv2.imwrite('cv_inverted.png',img_bin)
            #Plotting the image to see the output
            plotting = plt.imshow(img_bin,cmap='gray')
            #plt.show()

            # countcol(width) of kernel as 100th of total width
            kernel_len = np.array(img).shape[1]//100
            # Defining a vertical kernel to detect all vertical lines of image 
            ver_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1, kernel_len))
            # Defining a horizontal kernel to detect all horizontal lines of image
            hor_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (kernel_len, 1))
            # A kernel of 2x2
            kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2, 2))

            #Use vertical kernel to detect and save the vertical lines in a jpg
            image_1 = cv2.erode(img_bin, ver_kernel, iterations=3)
            vertical_lines = cv2.dilate(image_1, ver_kernel, iterations=3)
            #cv2.imwrite("vertical.jpg",vertical_lines)
            #Plot the generated image
            plotting = plt.imshow(image_1,cmap='gray')
            #plt.show()

            #Use horizontal kernel to detect and save the horizontal lines in a jpg
            image_2 = cv2.erode(img_bin, hor_kernel, iterations=3)
            horizontal_lines = cv2.dilate(image_2, hor_kernel, iterations=3)
            #cv2.imwrite("horizontal.jpg",horizontal_lines)
            #Plot the generated image
            plotting = plt.imshow(image_2,cmap='gray')
            #plt.show()

            # Combine horizontal and vertical lines in a new third image, with both having same weight.
            img_vh = cv2.addWeighted(vertical_lines, 0.5, horizontal_lines, 0.5, 0.0)
            #Eroding and thesholding the image
            img_vh = cv2.erode(~img_vh, kernel, iterations=2)
            thresh, img_vh = cv2.threshold(img_vh,128,255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
            cv2.imwrite("img_vh.jpg", img_vh)
            bitxor = cv2.bitwise_xor(img,img_vh)
            bitnot = cv2.bitwise_not(bitxor)
            #Plotting the generated image
            plotting = plt.imshow(bitnot,cmap='gray')
            #plt.show()

            image10=cv2.imread("img_vh.jpg")
            (hei,wid,_) = image10.shape 

            #Grayscale and blur the image
            gray = cv2.cvtColor(image10, cv2.COLOR_BGR2GRAY)
            blur = cv2.GaussianBlur(gray, (3,3), 0)

            #Threshold the image
            thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

            #Retrieve contours 
            contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
            #Create box-list
            box = []
            # Get position (x,y), width and height for every contour 
            for c in contours:
                x, y, w, h = cv2.boundingRect(c)
                box.append([x,y,w,h])

            #Create separate lists for all values
            heights=[]
            widths=[]
            xs=[]
            ys=[]
            #Store values in lists
            for b in box:
                heights.append(b[3])
                widths.append(b[2])
                xs.append(b[0])
                ys.append(b[1])
            #Retrieve minimum and maximum of lists
            min_height = np.min(heights)
            min_width = np.min(widths)
            min_x = np.min(xs)
            min_y = np.min(ys)
            max_y = np.max(ys)
            max_x = np.max(xs)

            #Retrieve height where y is maximum (edge at bottom, last row of table)
            for b in box:
                if b[1] == max_y:
                    max_y_height = b[3]
            #Retrieve width where x is maximum (rightmost edge, last column of table)
            for b in box:
                if b[0] == max_x:
                    max_x_width = b[2]

            # Obtain horizontal lines mask
            horizontal_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (50,1))
            horizontal_mask = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, horizontal_kernel, iterations=1)
            horizontal_mask = cv2.dilate(horizontal_mask, horizontal_kernel, iterations=9)
            # Obtain vertical lines mask
            vertical_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1,50))
            vertical_mask = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, vertical_kernel, iterations=1)
            vertical_mask= cv2.dilate(vertical_mask, vertical_kernel, iterations=9)

            # Bitwise-and masks together
            result = 255 - cv2.bitwise_or(vertical_mask, horizontal_mask)

            #Cropping the image to the table size
            crop_img = result[(min_y+5):(max_y+max_y_height), (min_x):(max_x+max_x_width+5)]
            #Creating a new image and filling it with white background
            img_white = np.zeros((hei, wid), np.uint8)
            img_white[:, 0:wid] = (255)
            #Retrieve the coordinates of the center of the image
            x_offset = int((wid -crop_img.shape[1])/2)
            y_offset = int((hei - crop_img.shape[0])/2)
            #Placing the cropped and repaired table into the white background
            img_white[ y_offset:y_offset+crop_img.shape[0], x_offset:x_offset+crop_img.shape[1]] = crop_img
            #Viewing the result
            cv2.imwrite('img_vh1.jpg', img_white)

            # Detect contours for following box detection
            contours, hierarchy = cv2.findContours(img_vh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

            def sort_contours(cnts, method="left-to-right"):
                # initialize the reverse flag and sort index
                reverse = False
                i = 0
                # handle if we need to sort in reverse
                if method == "right-to-left" or method == "bottom-to-top":
                    reverse = True
                # handle if we are sorting against the y-coordinate rather than
                # the x-coordinate of the bounding box
                if method == "top-to-bottom" or method == "bottom-to-top":
                    i = 1
                # construct the list of bounding boxes and sort them from top to
                # bottom
                boundingBoxes = [cv2.boundingRect(c) for c in cnts]
                (cnts, boundingBoxes) = zip(*sorted(zip(cnts, boundingBoxes),
                key=lambda b:b[1][i], reverse=reverse))
                # return the list of sorted contours and bounding boxes
                return (cnts, boundingBoxes) 

            # Sort all the contours by top to bottom.
            contours, boundingBoxes = sort_contours(contours, method="top-to-bottom")

            #Creating a list of heights for all detected boxes
            heights = [boundingBoxes[i][3] for i in range(len(boundingBoxes))]

            #Get mean of heights
            mean = np.mean(heights)

            #Create list box to store all boxes in  
            box = []
            # Get position (x,y), width and height for every contour and show the contour on image
            for c in contours:
                x, y, w, h = cv2.boundingRect(c)
                if (w<1000 and h<500):
                    image = cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
                    box.append([x,y,w,h])
                    
            plotting = plt.imshow(image,cmap='gray')
            #plt.show()

            #Creating two lists to define row and column in which cell is located
            row=[]
            column=[]
            j=0

            #Sorting the boxes to their respective row and column
            for i in range(len(box)):    
                    
                if(i==0):
                    column.append(box[i])
                    previous=box[i]
                else:
                    if(box[i][1]<=previous[1]+mean/2):
                        column.append(box[i])
                        previous=box[i]            
                        
                        if(i==len(box)-1):
                            row.append(column)        
                        
                    else:
                        row.append(column)
                        column=[]
                        previous = box[i]
                        column.append(box[i])
                        
            #print(column)
            #print(row)

            #calculating maximum number of cells
            countcol = 0
            for i in range(len(row)):
                countcol = len(row[i])
                if countcol > countcol:
                    countcol = countcol

            #Retrieving the center of each column
            center = [int(row[i][j][0]+row[i][j][2]/2) for j in range(len(row[i])) if row[0]]

            center=np.array(center)
            center.sort()
            #print(center)
            #Regarding the distance to the columns center, the boxes are arranged in respective order

            finalboxes = []
            for i in range(len(row)):
                lis=[]
                for k in range(countcol):
                    lis.append([])
                for j in range(len(row[i])):
                    diff = abs(center-(row[i][j][0]+row[i][j][2]/4))
                    minimum = min(diff)
                    indexing = list(diff).index(minimum)
                    lis[indexing].append(row[i][j])
                finalboxes.append(lis)

            #print(len(finalboxes))

            #from every single image-based cell/box the strings are extracted via pytesseract and stored in a list
            outer=[]
            for i in range(len(finalboxes)):
                for j in range(len(finalboxes[i])):
                    inner=''
                    if(len(finalboxes[i][j])==0):
                        outer.append(' ')
                    else:
                        for k in range(len(finalboxes[i][j])):
                            y,x,w,h = finalboxes[i][j][k][0],finalboxes[i][j][k][1], finalboxes[i][j][k][2],finalboxes[i][j][k][3]
                            finalimg = img2[x:x+h, y:y+w]
                            cv2.imwrite("finalimg.png",finalimg)
                            Check_img = Image.open("finalimg.png")
                            clrs = Check_img.getcolors()
                            if len(clrs)==1:
                                inner = "NO"
                            else:
                                inner = "YES"                     
                    outer.append(inner)

            #Creating a dataframe of the generated OCR list
            arr = np.array(outer)
            try:
                dataframe = pd.DataFrame(arr.reshape(len(row), countcol))
            except:
                contours, hierarchy = cv2.findContours(img_white, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

                def sort_contours(cnts, method="left-to-right"):
                    # initialize the reverse flag and sort index
                    reverse = False
                    i = 0
                    # handle if we need to sort in reverse
                    if method == "right-to-left" or method == "bottom-to-top":
                        reverse = True
                    # handle if we are sorting against the y-coordinate rather than
                    # the x-coordinate of the bounding box
                    if method == "top-to-bottom" or method == "bottom-to-top":
                        i = 1
                    # construct the list of bounding boxes and sort them from top to
                    # bottom
                    boundingBoxes = [cv2.boundingRect(c) for c in cnts]
                    (cnts, boundingBoxes) = zip(*sorted(zip(cnts, boundingBoxes),
                    key=lambda b:b[1][i], reverse=reverse))
                    # return the list of sorted contours and bounding boxes
                    return (cnts, boundingBoxes) 

                # Sort all the contours by top to bottom.
                contours, boundingBoxes = sort_contours(contours, method="top-to-bottom")

                #Creating a list of heights for all detected boxes
                heights = [boundingBoxes[i][3] for i in range(len(boundingBoxes))]

                #Get mean of heights
                mean = np.mean(heights)

                #Create list box to store all boxes in  
                box = []
                # Get position (x,y), width and height for every contour and show the contour on image
                for c in contours:
                    x, y, w, h = cv2.boundingRect(c)
                    if (w<1000 and h<500):
                        image = cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
                        box.append([x,y,w,h])
                        
                plotting = plt.imshow(image,cmap='gray')
                #plt.show()

                #Creating two lists to define row and column in which cell is located
                row=[]
                column=[]
                j=0

                #Sorting the boxes to their respective row and column
                for i in range(len(box)):    
                        
                    if(i==0):
                        column.append(box[i])
                        previous=box[i]
                    else:
                        if(box[i][1]<=previous[1]+mean/2):
                            column.append(box[i])
                            previous=box[i]            
                            
                            if(i==len(box)-1):
                                row.append(column)        
                            
                        else:
                            row.append(column)
                            column=[]
                            previous = box[i]
                            column.append(box[i])
                            
                #print(column)
                #print(row)

                #calculating maximum number of cells
                countcol = 0
                for i in range(len(row)):
                    countcol = len(row[i])
                    if countcol > countcol:
                        countcol = countcol

                #Retrieving the center of each column
                center = [int(row[i][j][0]+row[i][j][2]/2) for j in range(len(row[i])) if row[0]]

                center=np.array(center)
                center.sort()
                #print(center)
                #Regarding the distance to the columns center, the boxes are arranged in respective order

                finalboxes = []
                for i in range(len(row)):
                    lis=[]
                    for k in range(countcol):
                        lis.append([])
                    for j in range(len(row[i])):
                        diff = abs(center-(row[i][j][0]+row[i][j][2]/4))
                        minimum = min(diff)
                        indexing = list(diff).index(minimum)
                        lis[indexing].append(row[i][j])
                    finalboxes.append(lis)

                #print(len(finalboxes))

                #from every single image-based cell/box the strings are extracted via pytesseract and stored in a list
                outer=[]
                for i in range(len(finalboxes)):
                    for j in range(len(finalboxes[i])):
                        inner=''
                        if(len(finalboxes[i][j])==0):
                            outer.append(' ')
                        else:
                            for k in range(len(finalboxes[i][j])):
                                y,x,w,h = finalboxes[i][j][k][0],finalboxes[i][j][k][1], finalboxes[i][j][k][2],finalboxes[i][j][k][3]
                                finalimg = img2[x:x+h, y:y+w]
                                cv2.imwrite("finalimg.png",finalimg)
                                Check_img = Image.open("finalimg.png")
                                clrs = Check_img.getcolors()
                                if len(clrs)==1:
                                    inner = "NO"
                                else:
                                    inner = "YES"                     
                        outer.append(inner)

                #Creating a dataframe of the generated OCR list
                arr = np.array(outer)
                try:
                    dataframe = pd.DataFrame(arr.reshape(len(row), countcol))
                except:
                    return "Error"
            arr1 = np.array(dataframe)
            min_row=100
            for i1 in range(len(row)):
                for j1 in range(countcol):
                    if arr1[i1][j1]=="YES":
                        if min_row>i1:
                            min_row=i1

            i=0
            arr2=[i for i in range(min_row)]
            i=0
            arr3=[i for i in range(min_row+10,len(row))]
            i=0
            arr4=[i for i in range(0,countcol-14)]
            #dataframe = dropNullColumns(dataframe)
            nan_value = float("NaN")
            dataframe.replace("", nan_value, inplace=True)
            dataframe.dropna(how='all', axis=1, inplace=True)
            dataframe.dropna(how='all', axis=0, inplace=True)
            dataframe = dataframe.replace(r'^\s*$', "NO" , regex=True)
            dataframe = dataframe.drop(arr2,axis=0)
            dataframe = dataframe.drop(arr3,axis=0)
            dataframe = dataframe.drop(arr4,axis=1)
            # try:
            #     dataframe = dataframe.drop([0,7],axis=1)
            #     dataframe = dataframe.drop([0,1,2,3,14,15,16,17],axis=0)
            
            arr=["Mon:Thry","Mon:Lab","Tue:Thry","Tue:Lab","Wed:Thry","Wed:Lab","Thu:Thry","Thu:Lab","Fri:Thry","Fri:Lab"]
            dataframe.insert(0,"0",arr)
            # except:
            #     return "Error"
            data_json = dataframe.to_json("output1.json",orient='records')
            dataframe = dataframe.to_string(index=False,header=False)
            print(dataframe)
            #data = dataframe.style.set_properties()
            #print("End "+ str(time.time()))
    except:
        return "Enter a valid image"
    return dataframe

 
app.run(debug=True,host='0.0.0.0')