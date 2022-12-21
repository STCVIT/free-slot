import { useState } from "react";
import Dropzone from "react-dropzone";
import { UserAuth } from "../../context/UserAuthContext";
import { Box, TextField } from "@mui/material";
import axios from "../../axios";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import fileUpload from "../../assets/file-upload.svg";
import { ReactComponent as FileUpload } from "../../assets/file-upload.svg";

const OrComponent = ({ isCaps }) => {
  const mainClass = `w-1/2 h-[1px] bg-gray-400 rounded-md`;
  return (
    <div className={`flex gap-x-2 ${isCaps ? "w-full" : "w-2/4"} items-center`}>
      <div className={mainClass}></div>
      <div>
        <p>{isCaps ? "OR" : "or"}</p>
      </div>
      <div className={mainClass}></div>
    </div>
  );
};

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
    <div className="w-full flex flex-col items-center gap-y-11">
      <Dropzone
        onDrop={(acceptedFiles) => {
          return (
            toast.success("File Uploaded!"),
            setFiles(
              acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              )
            ),
            setPreview(
              acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              )
            )
          );
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className="p-8 cursor-pointer outline-dashed outline-3  w-full  border-dashed rounded-md outline-gray-300 "
            {...getRootProps()}
          >
            <input className="h-full w-full" {...getInputProps()} />
            {!preview && (
              <div className="flex flex-col items-center gap-y-6">
                <div>
                  <FileUpload />
                </div>
                <div>Drag & Drop your timetable here</div>
                <OrComponent />
                <div className="text-center w-2/4 self-center cursor-pointer p-2 rounded-md border-2 border-gray-400">
                  Select from device
                </div>
              </div>
            )}
            {preview && (
              <div>
                {images}
                <p className="text-center mt-8 ">
                  Click/tap preview to reupload
                </p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <OrComponent isCaps={true} />
      <Box className="w-full">
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
        className="border col-span-1 w-full border-blue-600 bg-blue-600 text-white px-4 py-3 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default DragFile;
