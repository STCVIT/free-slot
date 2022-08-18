import React from "react";
import profile from "../Profile.svg"
import DropDownProfile from "./DropDownProfile"


function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <header className="shadow z-20">
                <div className="container flex justify-between mx-auto">
                    <p className="font-logo  flex items-center p-7 md:p1 text-5xl ">
                        Free Slots
                    </p>
                    <ul className="item-stretch hidden space-x-3 md:flex">
                        <li className="flex" >
                            <p className="flex items-center px-4 -mb-1">Home</p>
                            
                        </li>
                        <li className="flex">
                            <p className="flex items-center px-4 -mb-1">My Schedule</p>
                        </li>
                        <li className="flex">
                            <p className="flex items-center px-4 -mb-1">About</p>
                        </li>
                        <li className="flex">
                            <DropDownProfile />
                        </li>
                        
                    </ul>
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