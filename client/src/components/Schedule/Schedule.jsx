import React from "react";
import Monday from "./Days/Monday";
import NavButton from "./NavButton/NavButton";

const Schedule = () => {
  document.title = "Schedule";
  return (
    <div className="md:grid grid-rows-5 py-5 md:py-0 h-screen ">
      <div className="flex justify-center items-center text-center row-span-1 font-semibold text-2xl w-full">
        <h1 className="m-4 text-black font-bold text-2xl">Schedule</h1>
      </div>
      <div className="w-full row-span-4 items-center justify-center text-center">
        <div className="flex flex-col p-2 items-end justify-end">
            <div>
              <span className="px-8 py-2 m-4 rounded-full bg-blue-500 text-white font-semibold text-sm flex w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                Modify
              </span>
            </div>
          <div className="rounded-lg shadow-lg bg-grey-700 w-fit flex flex-col gap-y-5">
            <div className="mb-4 border-b border-gray-200">
              <NavButton />
            </div>
            <div id="myTabContent">
              <Monday />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
