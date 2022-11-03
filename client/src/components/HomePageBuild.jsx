import React from "react";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home";

function HomePageBuild() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="gap-4 h-full" id="mainDiv">
        <Home />
      </div>
    </div>
  );
}

export default HomePageBuild;
