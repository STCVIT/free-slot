// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { UserAuth } from "../../context/UserAuthContext";
import { Box, TextField } from "@mui/material";
import axios from "../../axios";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import fileUpload from "../../assets/file-upload.svg";
// const DragFile = ({ files, setFiles }) => {
//   // eslint-disable-next-line no-unused-vars
//   const [dropText, setDropText] = useState("Select file from your device");
//   const [isUploaded, setIsUploaded] = useState(false);
//   const [imageClass, setImageClass] = useState();
//   // eslint-disable-next-line no-unused-vars
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop: (acceptedFiles) => {
//       setDropText((prevText) => "Change Image");
//       setIsUploaded(true);
//       setImageClass("outline rounded-md outline-offset-2 p-1");
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });
//   const imageUploaded = () => {
//     if (files.length) {
//       let file = files[0];
//       let reader = new FileReader();
//       reader.onloadend = function () {
//         // document.write("RESULT: ", reader.result);
//         console.log("RESULT: ", reader.result);
//         // setFiles(x=>x.append(reader.result))
//         // console.log()
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const images = files.map((file) => (
//     <div key={file.name}>
//       <div>
//         <img src={file.preview} style={{ width: "200px" }} alt="preview" />
//       </div>
//     </div>
//   ));
//   return (
//     <div className="h-full w-full border-dashed border-4 rounded-md">
//       <label
//         for="imageUpload"
//         onChange={imageUploaded()}
//         className="hidden h-full lg:flex flex-col items-center justify-center text-center w-full gap-y-5"
//       >
//         <input
//           {...getRootProps()}
//           className="block lg:hidden"
//           id="imageUpload"
//           style={{ visibility: "hidden" }}
//           type="none"
//         />
//         {isUploaded && <h1>Preview:</h1>}
//         {!isUploaded && (
//           <div className="hidden lg:flex flex-col items-center justify-center text-center gap-y-3 w-full">
//             <h1>Drag & Drop your timetable</h1>
//             <img src={fileUpload} alt="" />
//             <h1>OR</h1>
//           </div>
//         )}
//         <div className={imageClass}> {images} </div>
//         {!isUploaded && (
//           <button
//             {...getRootProps()}
//             className="rounded-md border-2 border-black p-2"
//           >
//             Select file from your device
//           </button>
//         )}
//         {isUploaded && <h1>{files[0].name}</h1>}
//         {isUploaded && (
//           <button className="rounded-md border-2 border-black p-2">
//             Change image
//           </button>
//         )}
//       </label>
//       <button className="flex h-full lg:hidden flex-col items-center justify-center text-center w-full gap-y-5">
//         <label
//           {...getRootProps()}
//           for="imageUploadPhone"
//           onChange={imageUploaded()}
//           className="rounded-md border-2 border-black p-2"
//         >
//           Select file from your device
//         </label>
//         <img src={images} alt="Select File" />
//         <input
//           className="block  lg:hidden"
//           id="imageUploadPhone"
//           style={{ visibility: "hidden" }}
//           type="file"
//         />
//       </button>
//     </div>
//   );
// };

// export default DragFile;

const DragFile = ({ files, setFiles, inputValue, setInputValue }) => {
  const [preview, setPreview] = useState(null);
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt="preview" />
      </div>
    </div>
  ));
  function notify() {
    window.location.pathname === "/timetable" && navigate("/home");
    toast.success(
      <div>
        Timetable Updated!
        <br />
        Please check schedule to confirm
      </div>
    );
    console.log(window.location.href);
  }
  const { sendTimetable } = UserAuth();
  const navigate = useNavigate();
  const { setIsLoading } = FindFreeSlot();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (files[0]) {
        var file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          file = reader.result;
          const res = await sendTimetable(file);
          console.log(res);
          if (res.status === 200) {
            notify();
          }
        };
        setIsLoading(false);
        return;
      } else if (inputValue) {
        console.log(window.location.pathname);
        const res = await axios.post("timetable/freeSlotCopyPaste", {
          timetable: inputValue,
          email: JSON.parse(localStorage.getItem("user")).email,
        });
        setIsLoading(false);

        if (res.status === 200) {
          notify();
        }
        return;
      } else {
        alert.error("Please provide timetable in either of the ways.");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Dropzone
        onDrop={(acceptedFiles) => {
          toast.success("File Uploaded!");
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
          setPreview(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div className="p-8 cursor-pointer outline " {...getRootProps()}>
            <input {...getInputProps()} />
            {!preview && (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
            {preview && images}
          </div>
        )}
      </Dropzone>
      OR
      <Box>
        <Box>
          <Box>
            <TextField
              type="text"
              id="textTimeTable"
              label="Paste your VIT Timetable"
              value={inputValue}
              size="small"
              fullWidth
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <button
        className="border col-span-1 w-full border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default DragFile;
