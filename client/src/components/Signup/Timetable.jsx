import React, { useState } from "react";
import timetableInfoImg from "../../assets/TimetableInfoImage.svg";
import fileUpload from "../../assets/file-upload.svg";
import { Link } from "react-router-dom";
import DragFile from "./DragFile";
import TextInput from "../TextInput";

const TimetableNew = () => {
  const onFileChange = (files) => {
    return files;
  };
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    event.target.value = null;
    console.log(event.target.files);
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <>
      <div className="md:grid grid-cols-12">
        <div className="hidden md:block col-span-6 bg-blueTheme ">
          <img src={timetableInfoImg} alt="" />
        </div>
        <div className="md:grid grid-cols-6 col-span-6">
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
                  <DragFile />
                </div>
              </div>
              <div className="row-span-2">
              <div className="text-center my-5">OR</div>
                <div className="w-full">
                  <TextInput
                    type="text"
                    id="textTimeTable"
                    label="Paste your VIT Timetable"
                  />
                </div>
                <div className="flex w-full justify-evenly my-3">
                  <div className="grid grid-cols-2 w-full gap-x-3">
                    <button className="border col-span-1 w-full border-black px-4 py-2 rounded-md">
                      Back
                    </button>
                    <button className="border col-span-1 w-full border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-md">
                      Sign Up
                    </button>
                  </div>
                </div>
                <p className="text-center">
                  Alredy have an account?{" "}
                  <span className="text-blue-600 underline decoration-dotted">
                    <a href="#">Log in</a>
                  </span>
                </p>
              </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default TimetableNew;
