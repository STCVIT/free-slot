import React from "react";
// import profile from "../../assets/Profile.svg";
import DropDownProfile from "../DropDownProfile";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Home from "../../pages/Home";
import Schedule from "../Schedule/Schedule";
import About from "../../pages/About";
const MainNavbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 font-bold cursor-pointer transition-colors duration-300";
  const activeClass = "border-black";
  const inactiveClass = "border-transparent hover:border-gray-200";
  useEffect(() => {
    const root = createRoot(document.getElementById("mainDiv"));
    if (activeTab === "home") {
      root.render(<Home />);
    } else if (activeTab === "schedule") {
      root.render(<Schedule />);
    } else if (activeTab === "about") {
      root.render(<About />);
    }
    console.log("activeTab", activeTab);
  }, [activeTab]);
  return (
    <>
      <header className="shadow z-20">
        <div className="flex items-center md:flex-row flex-col justify-between w-full">
          <div>
            <p className="font-logo flex items-center w-full p-7 md:p1 text-5xl ">
              Free Slots
            </p>
          </div>
          <div>
            <ul className="flex">
              <li
                className={`${mainClass} ${
                  activeTab === "home" ? activeClass : inactiveClass
                }`}
                onClick={() => setActiveTab("home")}
              >
                Home
              </li>
              <li
                className={`${mainClass} ${
                  activeTab === "schedule" ? activeClass : inactiveClass
                }`}
                onClick={() => setActiveTab("schedule")}
              >
                Schedule
              </li>
              <li
                className={`${mainClass} ${
                  activeTab === "about" ? activeClass : inactiveClass
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </li>
              <li className="flex ">
                <DropDownProfile />
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden">
          <ul className={navbarOpen ? "grid grid-cols-1" : "hidden"}>
            <li>
              <p className="block ">Help</p>
            </li>
            <li>
              <p className="block ">About</p>
            </li>
            <li>
              <p className="block ">Contact</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default MainNavbar;
