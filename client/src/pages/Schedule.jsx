import React from "react";

import MondayData from "../components/Schedule/Data/MondayData";
import TuesdayData from "../components/Schedule/Data/TuesdayData";
import WednesdayData from "../components/Schedule/Data/WednesdayData";
import ThursdayData from "../components/Schedule/Data/ThursdayData";
import FridayData from "../components/Schedule/Data/FridayData";
import { useState } from "react";
import MainNavbar from "../components/Menus/MainNavbar";
import PageHeading from "../components/Headings/PageHeading";
// import PageHeading from "../Headings/PageHeading";
const sched = {
  mon: MondayData,
  tues: TuesdayData,
  wed: WednesdayData,
  thurs: ThursdayData,
  fri: FridayData,
};

const ScheduleButton = (props) => {
  return (
    <div class="p-4 rounded-lg bg-white my-4 grid grid-cols-12 text-xl font-semibold ">
      <div className="col-span-4">{props.subject}</div>
      <div className="col-span-8">{props.time}</div>
    </div>
  );
};

const Schedule = () => {
  document.title = "Schedule";
  const [activeTab, setActiveTab] = useState("mon");
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 font-bold cursor-pointer transition-colors duration-300";
  const activeClass = "border-black";
  const inactiveClass = "border-transparent hover:border-gray-200";
  return (
    <>
      <MainNavbar active="schedule" />
      <div className="py-5 md:py-0 md:h-screen">
        <PageHeading title="Schedule" />
        <div className="grid place-content-center">
          <div className="rounded-lg w-fit flex flex-col gap-y-5 ">
            <button className="w-max self-end text-sm font-extralight px-8 py-2 m-4 rounded-full bg-blue-500 text-white ">
              Modify
            </button>
            <div>
              <div className="flex gap-x-3 w-full justify-between border-b-2 border-black">
                {["Mon", "Tues", "Wed", "Thurs", "Fri"].map((day) => (
                  <button
                    className={`${mainClass} ${
                      activeTab === day.toLocaleLowerCase()
                        ? activeClass
                        : inactiveClass
                    }`}
                    onClick={() => setActiveTab(day.toLocaleLowerCase())}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-transparent" id="myTabContent">
              {sched[activeTab].map((x) => (
                <ScheduleButton time={x.time} subject={x.subject} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
