import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import fileUpload from "../../assets/file-upload.svg";
import TextInput from "../TextInput";
const DragFile = () => {
  const [files, setFiles] = useState([]);
  const [dropText, setDropText] = useState("Select file from your device");
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageClass, setImageClass] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setDropText((prevText) => "Change Image");
      setIsUploaded(true);
      setImageClass("outline rounded-md outline-offset-2 p-1");
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const imageUploaded = () => {
    if (files.length) {
      let file = files[0];
      let reader = new FileReader();
      reader.onloadend = function () {
        // document.write("RESULT: ", reader.result);
        console.log("RESULT: ", reader.result);
        // setFiles(x=>x.append(reader.result))
        // console.log()
      };
      reader.readAsDataURL(file);
    }
  };
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="h-full w-full border-dashed border-4 rounded-md">
      <label
        for="imageUpload"
        onChange={imageUploaded()}
        className="hidden h-full md:flex flex-col items-center justify-center text-center w-full gap-y-5"
      >
        <input
          {...getRootProps()}
          className="block md:hidden"
          id="imageUpload"
          style={{ visibility: "hidden" }}
          type="none"
        />
        {isUploaded && <h1>Preview:</h1>}
        {!isUploaded && (
          <div className="hidden md:flex flex-col items-center justify-center text-center gap-y-3 w-full">
            <h1>Drag & Drop your timetable</h1>
            <img src={fileUpload} alt="" />
            <h1>OR</h1>
          </div>
        )}
        <div className={imageClass}> {images} </div>
        {!isUploaded && (
          <button
            {...getRootProps()}
            className="rounded-md border-2 border-black p-2"
          >
            Select file from your device
          </button>
        )}
        {isUploaded && <h1>{files[0].name}</h1>}
        {isUploaded && (
          <button className="rounded-md border-2 border-black p-2">
            Change image
          </button>
        )}
      </label>
      <button className="flex h-full md:hidden flex-col items-center justify-center text-center w-full gap-y-5">
      <label
        {...getRootProps()}
        for="imageUploadPhone"
        onChange={imageUploaded()}
        className="rounded-md border-2 border-black p-2"
      >
          Select file from your device
      </label>
      <img src={images}/>
      <input
        className="block  md:hidden"
        id="imageUploadPhone"
        style={{ visibility: "hidden" }}
        type="file"
        />
        </button>
    </div>
  );
};

export default DragFile;
