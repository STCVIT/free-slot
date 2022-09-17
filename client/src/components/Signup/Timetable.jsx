import React, { useState } from "react";
import timetableInfoImg from "../../assets/TimetableInfoImage.svg";
import fileUpload from "../../assets/file-upload.svg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import DragFile from "./DragFile";
import TextInput from "../TextInput";
=======
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
>>>>>>> 4ca07569608f09d9a6a912d89d443a91992d5c67

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
<<<<<<< HEAD
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
=======
              <div className="lg:px-10 md:px-6 sm:px-4 sm:py-2">
                <input
                  style={{ display: "none" }}
                  accept="image/png, image/gif, image/jpeg"
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                />
                <button
                  onClick={handleClick}
                  className="flex justify-center relative w-full border-2 border-greytheme text-greytheme font-semibold mx-auto py-3 rounded "
                >
                  Select from your Device
                </button>
              </div>
            </div>
            <div className="relative sm:py-8">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-b border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="bg-white px-4 text- text-gray-500">OR</span>
              </div>
            </div>
            <div className="pt-12 sm:pt-0">
              <input
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 border-2 border-greytheme leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Paste your Timetable here"
              />
            </div>
            <div className="relative w-full">
              <div className="grid grid-col-2">
                <div className="grid-col-span-1 flex ">
                  <div className="pt-8 pb-1 text-center w-full pr-4">
                    <button className="flex justify-center w-full border-2 border-greytheme text-black font-semibold mx-auto py-3 rounded ">
                      <Link to="/signup">Back</Link>
                    </button>
                  </div>
                  <div className="pt-8 pb-1 text-center w-full pl-4">
                    <button
                      className="flex justify-center w-full  bg-blueTheme text-white font-semibold mx-auto py-3.5 rounded "
                      type="file"
                    >
                      Sign-Up
>>>>>>> 4ca07569608f09d9a6a912d89d443a91992d5c67
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
