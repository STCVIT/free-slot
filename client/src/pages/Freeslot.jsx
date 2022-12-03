import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Freeslotsection from "../components/Freeslotsection";
const Freeslot = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-myBg ">
        <Sidebar />
        <Freeslotsection />
      </div>
    </>
  );
};

export default Freeslot;
