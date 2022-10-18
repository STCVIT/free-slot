import React from "react";
import profile from "../../assets/Profile.svg";
import DropDownProfile from "../DropDownProfile";
import { NavButton } from "./NavButton/NavButton";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
              <NavButton />
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
}

export default Navbar;
