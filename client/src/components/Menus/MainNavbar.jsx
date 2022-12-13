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
      <header className="shadow z-20 bg-[#f2f2f2]  drop-shadow relative">
        <div className="flex items-center lg:flex-row flex-col justify-between w-full">
          <div>
            <p className="font-logo flex items-center w-full p-7 lg:p1 text-5xl ">
              Free Slots
            </p>
          </div>
          <div>
            <ul className="flex gap-x-2">
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
      </header>
    </>
  );
};

export default MainNavbar;
