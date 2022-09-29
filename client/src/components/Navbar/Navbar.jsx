import React from "react";
import profile from "../../assets/Profile.svg"
import DropDownProfile from "../DropDownProfile"
import {NavButton} from "./NavButton/NavButton";

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
                        {/* <li className="flex" >
                            <p className="flex items-center px-4 -mb-1">Home</p>
                            
                            </li>
                            <li className="flex">
                            <p className="flex items-center px-4 -mb-1">My Schedule</p>
                            </li>
                            <li className="flex">
                            <p className="flex items-center px-4 -mb-1">About</p>
                        </li> */}
                        <NavButton />
                        <li className="flex ">
                            <DropDownProfile />
                        </li>
                        
                    </ul>
                        </div>
                </div>

                <div className="md:hidden">
                    <ul className={(navbarOpen ? "grid grid-cols-1" : "hidden")}>
                        <li ><p className="block " >Help</p></li>
                        <li ><p className="block " >About</p></li>
                        <li ><p className="block ">Contact</p></li>
                    </ul>
                </div>
            </header>

            {/* <nav className='flex'>
                <div className='flex-none'>
                    <h1 className=' text-7xl p-5'>FreeSlots</h1>
                </div>
                <div className='flex flex-row-reverse'>
                    <div >
                        <h3 className=' p-5'>Home</h3>
                    </div>
                    <div>
                        <h3 className=' p-5'>My Schedule</h3>
                    </div>
                    <div>
                        <h3 className=' p-5'>About</h3>
                    </div>
                </div>
            </nav> */}
        </>

    )
}


export default Navbar