import React from "react";
import DropDownProfile from "../Dropdowns/DropDownProfile";
import { useState } from "react";
import { Link } from "react-router-dom";
const MainNavbar = ({ active }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState(active);
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 font-light cursor-pointer transition-colors duration-300";
  const activeClass = "border-black !font-bold";
  const inactiveClass = "border-transparent hover:border-gray-200";
  return (
    <>
      <header className="shadow z-20 bg-[#f2f2f2]  drop-shadow">
        <div className="flex items-center md:flex-row flex-col justify-between w-full">
          <div>
            <p className="font-logo flex items-center w-full p-7 md:p1 text-5xl ">
              Free Slots
            </p>
          </div>
          <div>
            <ul className="flex gap-x-2 border-b-2 border-black">
              {["Home", "Schedule", "About"].map((item) => (
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{ color: "black" }}
                  className={`${mainClass} ${
                    activeTab === item.toLocaleLowerCase()
                      ? activeClass
                      : inactiveClass
                  }`}
                >
                  {item}
                </Link>
              ))}
              <li
                onClick={() => setActiveTab("account")}
                className={`${mainClass} ${
                  activeTab === "account" ? activeClass : inactiveClass
                }`}
              >
                <DropDownProfile
                  active={active}
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
