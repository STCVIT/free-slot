import React, { useState } from "react";
import timetableInfoImg from "../../assets/TimetableInfoImage.svg";
import fileUpload from "../../assets/file-upload.svg";
import { Link } from "react-router-dom";

const Timetable = () => {
  const onFileChange = (files) => {
    return files;
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="hidden sm:block sm:col-span-2 bg-blueTheme ">
          <img
            src={timetableInfoImg}
            alt=""
            className="grid col-span-2 min-h-screen"
          />
        </div>
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="px-3 sm:py-2 sm:px-16 md:py-3.5 md:px-24 lg:py-5 lg:px-48">
            <h1 className="font-bold text-center text-3xl pb-5">Sign-Up</h1>

            <h1 className="pt-4 pb-16 text-greytheme w-full">
              Upload the full screenshot of your VIT Timetable of current
              semester.
            </h1>
            <h1 class="text-greytheme font-semibold py-7.5" for="username">
              Timetable
            </h1>
            <div className="flex flex-col sm:border-dashed sm:border-2 lg:h-60 md:h-72 sm:h-78 w-full px-8 py-8">
              <div className="hidden sm:block">
                <div className="hidden sm:flex justify-center ">
                  <div className="lg:px-20 md:15px">
                    <img src={fileUpload} alt="" />
                  </div>
                </div>
                <h1 className="sm:text-bold sm:py-4 sm:text-center sm:text-greytheme ">
                  Drop your Timetable here
                </h1>
              </div>
              <div class="hidden sm:block sm:relative sm:py-2">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-b border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="bg-white px-4 text- text-gray-500">OR</span>
                </div>
              </div>
              <div className="lg:px-10 md:px-6 sm:px-4 sm:py-2">
                <button
                  className="flex justify-center relative w-full border-2 border-greytheme text-greytheme font-semibold mx-auto py-3 rounded "
                  type="button"
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
                    <button className="flex justify-center w-full  bg-blueTheme text-white font-semibold mx-auto py-3.5 rounded ">
                      Sign-Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
