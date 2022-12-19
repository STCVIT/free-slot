import React, { useState } from "react";
import timetableInfoImg from "../../assets/TimetableInfoImage.svg";
import { Link, useNavigate } from "react-router-dom";
import DragFile from "./DragFile";
import { UserAuth } from "../../context/UserAuthContext";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { Box, TextField } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../axios";
const TextInput = (props) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <Box>
      <Box>
        <Box>
          <TextField
            type={props.type}
            id={props.id}
            label={props.label}
            value={props.textValue}
            size="small"
            fullWidth
            onChange={(e) => props.setTextValue(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default function Timetable() {
  const [files, setFiles] = useState([]);
  const { sendTimetable } = UserAuth();
  const { setIsLoading } = FindFreeSlot();
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (files[0]) {
        var file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          file = reader.result;
          const res = await sendTimetable(file);
          if (res) {
            navigate("/home");
          }
        };
        return;
      } else if (inputValue) {
        const res = await axios.post("timetable/freeSlotCopyPaste", {
          timetable: inputValue,
          email: JSON.parse(localStorage.getItem("user")).email,
        });
        res.status === 200 && navigate("/home");
        return;
      } else {
        toast.error("Please provide timetable in either of the ways.");
      }
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="px-4 lg:px-0 lg:grid grid-cols-12">
        <div className="hidden lg:block col-span-6 bg-myBlue ">
          <img src={timetableInfoImg} alt="" />
        </div>
        <div className="lg:grid grid-cols-6 col-span-6">
          <div className="col-span-1"></div>
          <div className="col-span-4 grid grid-rows-6 w-full h-screen py-4">
            <div className="text-center row-span-1">
              <h1 className="text-2xl font-semibold">Sign Up</h1>
              <p className="px-4">
                Upload the full screenshot of your VIT Timetable of current
                semester.
              </p>
            </div>
            <div className="flex flex-col gap-y-3 row-span-3">
              <h1 className="self-start">Timetable</h1>
              <div className="w-full items-center justify-center h-full flex">
                <DragFile files={files} setFiles={setFiles} />
              </div>
            </div>
            <div className="row-span-2">
              <div className="text-center my-5">OR</div>
              <div className="w-full">
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
              </div>
              <div className="grid my-4 place-content-center w-full gap-x-3">
                <a href="/home">
                  <button
                    className="border col-span-1 w-full border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </a>
              </div>
              <p className="text-center">
                Alredy have an account?{" "}
                <span className="text-blue-600 underline decoration-dotted">
                  <Link to="/login">Log in</Link>
                </span>
              </p>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
