import React from "react";
import DropDownProfile from "../Dropdowns/DropDownProfile";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNavbar";
const MainNavbar = ({ active }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState(active);
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 font-light cursor-pointer transition-colors duration-300";
  const activeClass = "border-black !font-bold";
  const inactiveClass = "border-transparent hover:border-gray-200";
  return (
    <>
      <div className="shadow z-20 bg-[#f2f2f2]  drop-shadow relative">
        <div className="flex items-center lg:flex-row flex-col justify-between w-full">
          <div className="flex justify-between">
            <div>
              <p className="font-logo flex items-center w-full p-7 lg:p1 text-5xl ">
                Free Slots
              </p>
            </div>
            <div className="p-4 lg:hidden">
              <MobileNav
                activeTab={active}
                optionList={["Home", "Schedule", "About"]}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-x-2 w-fit lg:w-full">
              {["Home", "Schedule", "About"].map((item, idx) => (
                <Link
                  key={idx}
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
                className={`relative ${mainClass} ${
                  activeTab === "account" ? activeClass : inactiveClass
                }`}
              >
                <DropDownProfile setActiveTab={setActiveTab} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
