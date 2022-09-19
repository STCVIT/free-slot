import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import fileUpload from "../../assets/file-upload.svg";
import TextInput from "../TextInput";
const DragFile = ({files, setFiles}) => {
  const [dropText, setDropText] = useState("Select file from your device");
  const [isUploaded, setIsUploaded] = useState(false)
  const [imageClass, setImageClass] = useState()
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setDropText((prevText) => "Change Image");
      setIsUploaded(true)
      setImageClass("outline rounded-md outline-offset-2 p-1")
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "400px" }} alt="preview" />
      </div>
    </div>
  ));
  return (
    <div className="h-full w-full border-dashed border-4 rounded-md">
      <div
        className="h-full flex flex-col items-center justify-center text-center w-full gap-y-5"
        {...getRootProps()}
      >
        {isUploaded&&
        <h1>Preview:</h1>}
        {!isUploaded &&
        <div className="flex flex-col items-center justify-center text-center gap-y-3 w-full">
        <h1>Drag & Drop your timetable</h1>
        <img src={fileUpload} alt="" />
        <h1>OR</h1>
        </div>
        }
        <div className={imageClass}> {images} </div>
        {!isUploaded && 
        <button
        className="rounded-md border-2 border-black p-2"
        >
          Select file from your device
        </button>
        }
        {isUploaded && 
        <button 
        className="rounded-md border-2 border-black p-2"
        >
          Change image
        </button>
        }
      </div>
      {/* <TextInput 
      textValue="Paste your VIT Timetable"
      /> */}
    </div>
  );
};

export default DragFile;
