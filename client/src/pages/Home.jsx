import React from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  const [day, setDay] = React.useState("all");
  const [group, setGroup] = React.useState("all");
  const [time, setTime] = React.useState("all");
  const [date, setDate] = React.useState("all");
  //create a filter for days
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <div className="md:grid grid-cols-12 gap-4 h-full" id="mainDiv">
        <div className="hidden md:block col-span-2 h-screen">
          <Sidebar
            setDay={setDay}
            setGroup={setGroup}
            setTime={setTime}
            setDate={setDate}
          />
        </div>
        <div className="col-span-10">
          <Tabs day={day} group={group} time={time} date={date} />
        </div>
        {/* <Tabs /> */}
      </div>
    </div>
  );
}
