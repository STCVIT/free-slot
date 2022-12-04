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
    "px-4 py-2 border-b-4 col-span-1 font-light cursor-pointer transition-colors duration-300";
  const activeClass = "border-black !font-bold";
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
      <header className="shadow z-20 bg-[#BEBDBD]  drop-shadow">
        <div className="flex items-center md:flex-row flex-col justify-between w-full">
          <div>
            <p className="font-logo flex items-center w-full p-7 md:p1 text-5xl ">
              Free Slots
            </p>
          </div>
          <div>
            <ul className="flex gap-x-2 border-b-2 border-black">
              {["Home", "Schedule", "About"].map((item) => (
                <button
                  className={`${mainClass} ${
                    activeTab === item.toLocaleLowerCase()
                      ? activeClass
                      : inactiveClass
                  }`}
                  onClick={() => setActiveTab(item.toLocaleLowerCase())}
                >
                  {item}
                </button>
              ))}
              <li
                onClick={() => setActiveTab("dropDown")}
                className={`${mainClass} ${
                  activeTab === "dropDown" ? activeClass : inactiveClass
                }`}
              >
                <DropDownProfile
                  mainClass={mainClass}
                  inactiveClass={inactiveClass}
                  activeClass={activeClass}
                />
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
