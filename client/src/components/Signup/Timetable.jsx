import React, { useState } from "react";
import timetableInfoImg from "../../assets/TimetableInfoImage.svg";
import { Link } from "react-router-dom";
import DragFile from "./DragFile";

import { FindFreeSlot } from "../../context/FreeSlotContext";

import "react-toastify/dist/ReactToastify.css";

export default function Timetable() {
  const [files, setFiles] = useState([]);
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const [inputValue, setInputValue] = useState(null);

  return (
    <>
      <div className="px-4 lg:px-0 lg:grid grid-cols-12">
        <div className="hidden lg:block col-span-6 bg-myBlue ">
          <img src={timetableInfoImg} alt="" />
        </div>
        <div className="lg:grid grid-cols-6 col-span-6">
          <div className="col-span-1"></div>
          <div className="col-span-4 flex flex-col gap-y-10 items-center w-full h-screen py-4">
            <div className="text-center row-span-1">
              <h1 className="text-2xl font-semibold">Sign Up</h1>
              <p className="px-4">
                Upload the full screenshot of your VIT Timetable of current
                semester.
              </p>
            </div>
            <div className="flex flex-col gap-y-3 row-span-3 w-full">
              <h1 className="self-start">Timetable</h1>
              <div className="w-full items-center justify-center h-full flex">
                <DragFile
                  setFiles={setFiles}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  files={files}
                />
              </div>
            </div>
            <div className="row-span-2">
              <div className="w-full"></div>
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
