import React from "react";
import MainNavbar from "./MainNavbar/MainNavbar";
import Home from "../pages/Home";

function HomePageBuild() {
  return (
    <div className="h-screen">
      <MainNavbar />
      <div className="gap-4 h-full" id="mainDiv">
        <Home />
      </div>
    </div>
  );
}

export default HomePageBuild;
