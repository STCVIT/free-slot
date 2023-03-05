import React from "react";
import Navbar from "../components/Menus/MainNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Freeslotsection from "../components/Freeslotsection/Freeslotsection";
const Freeslot = () => {
  return (
    <>
      <Navbar active={"home"} />
      <div className="flex  w-full pb-10">
        {/* <Sidebar /> */}
        <Freeslotsection />
      </div>
    </>
  );
};

export default Freeslot;
