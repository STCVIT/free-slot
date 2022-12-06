import React from "react";
import MainNavbar from "./Menus/MainNavbar";
import Home from "../pages/Home";

function HomePageBuild() {
  return (
    <div className="h-screen">
      <MainNavbar active="home" />
      <div
        style={{ backgroundColor: "#f2f2f2" }}
        className="gap-4 h-full"
        id="mainDiv"
      >
        <Home />
      </div>
    </div>
  );
}

export default HomePageBuild;
