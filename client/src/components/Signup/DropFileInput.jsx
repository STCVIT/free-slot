import React, { useRef, useState } from 'react'
import propTypes from 'prop-types'
import fileUpload from '../../assets/file-upload.svg'
import { ImageConfig  } from '../../config/ImageConfig'
import axios from 'axios'
const DropFileInput = ({ formData, setFormData, props}) =>{
    const wrapperRef = useRef(null);
    const [files, setFiles] = useState([])
    const onDragEnter = ()=>{
        wrapperRef.current.classList.add('dragover')
    }
    const onDragLeave = ()=>{
        wrapperRef.current.classList.remove('dragover')
    }
    const onDrop = ()=>{
        wrapperRef.current.classList.remove('dragover')
    }

    // const onFileDrop = (e)=>{
    //     const newFile = e.target.files[0]
    //     if(newFile) {
    //         const updatedList = [newFile]
    //         setFiles(updatedList)
    //         props.onFileChange(updatedList)
    //     }
    // }
    const convert2base64 = (e)=>{
        setFormData({...formData, timetable: e.target.value})
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = ()=>{
            console.log(reader.result.toString())
            const string = reader.result.toString()
            axios({
                method: 'post',
                url: 'http://localhost:5000/imageupload',
                headers: {"content-type": "application/json"},
                data: {image: string}
            })
        }
        reader.readAsDataURL(file);
    }
    // const fileRemove = (file) => {
    //     const updatedList = [...files];
    //     updatedList.splice(files.indexOf(file), 1);
    //     setFiles(updatedList);
    //     props.onFileChange(updatedList);
    // }

    return (
        <>
            <div 
            ref={wrapperRef}
            className='drop-file-input'
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}>
                <div className='drop-file-input_label'>
                    <img src={fileUpload} alt=""/>
                    <p> Drag {"&"} Drop your timetable here</p>
                </div> 
                {/* <input type='file' accept ='image/*' value={formData.timetable} onChange={ (e)=>{ setFormData({...formData, timetable: convert2base64(e.target.value)})}}/> */}
                <input type='file' value={formData.timetable} accept ='image/*' onChange={ (e)=>{convert2base64(e)}}/>
            </div>
            {
                files.length>0 ? (
                    <div className='drop-file-preview'>
                        <p className='file-preview-title'>
                            Ready to upload
                        </p>
                        {/* {
                            files.map((item, index)=>(
                                <div key={index} className='drop-file-preview-item'>
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt=''/>
                                    <div>
                                        <p> {item.name}</p>
                                        <p> {item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        } */}
                    </div>
                ) : null
            }
        </>    
    ) 
}

DropFileInput.propTypes = {
    onFileChange: propTypes.func
}
export default DropFileInput