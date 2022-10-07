import React from "react";
import Monday from "./Days/Monday";
import NavButton from "./NavButton/NavButton";

const Schedule = () => {
  document.title = "Schedule";
  return (
    <div className="md:grid grid-rows-5 py-5 md:py-0 h-screen">
      <div className="flex justify-center items-center text-center row-span-1 font-semibold text-2xl w-full">
        <h1>Schedule</h1>
      </div>
      <div className="w-full row-span-4 items-center justify-center">
        <div class="flex flex-col p-2 items-center justify-center">
          <div class="rounded-lg shadow-lg bg-grey-700 w-fit flex flex-col gap-y-5">
            <div>
              <span class="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                Modify
              </span>
            </div>

            <div class="mb-4 border-b border-gray-200">
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
