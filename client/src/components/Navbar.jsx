import React from "react";
import profile from "../assets/Profile.svg";
import DropDownProfile from "./DropDownProfile";
import DropDownPhone from "./DropDownPhone";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <header className="shadow z-20">
        <div className="container flex justify-between mx-auto">
          <p className="hidden sm:font-logo sm:flex items-center lg:p-7 md:p-4 sm:p1 sm:text-5xl ">
            Free Slots
          </p>
          <ul className="item-stretch space-x-2 flex">
            <li className="flex sm:hidden">
              <DropDownPhone />
            </li>
            <li className="hidden sm:flex">
              <p className="flex items-center px-4 -mb-1">Home</p>
            </li>
            <li className="hidden sm:flex">
              <p className="flex items-center px-4 -mb-1">My Schedule</p>
            </li>
            <li className="hidden sm:flex">
              <p className="flex items-center px-4 -mb-1">About</p>
            </li>
          </ul>

          <div className="flex">
            <DropDownProfile />
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
}

export default Navbar;
