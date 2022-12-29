import React from "react";
import DropDownProfile from "../Dropdowns/DropDownProfile";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNavbar";
const MainNavbar = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active);
  const mainClass =
    "text-xl px-4 py-2 col-span-1 font-light cursor-pointer transition-colors duration-300";
  const activeClass = "!font-bold";
  const inactiveClass = "hover:border-gray-200 ";
  return (
    <>
      <div className="shadow z-20 bg-[#f2f2f2]  drop-shadow relative">
        <div className="flex items-center lg:flex-row flex-col justify-between lg:px-10 w-full">
          <div className="flex justify-between w-full lg:w-fit">
            <div>
              <p className="font-logo flex items-center w-full py-7 lg:p1 text-5xl ">
                Free Slots
              </p>
            </div>
            <div className="p-4 lg:hidden flex gap-x-4 items-center">
              <DropDownProfile />
              <MobileNav
                activeTab={active}
                optionList={["Home", "Schedule", "About"]}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-x-2 w-fit lg:w-full items-center">
              {["Home", "Schedule", "About"].map((item, idx) => (
                <li>
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
                </li>
              ))}
              <li className="relative">
                <DropDownProfile
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
