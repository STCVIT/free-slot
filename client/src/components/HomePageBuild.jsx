import React from 'react'
import Sidebar from "./Sidebar";
import Tabs from "./Tabs"
import Navbar from "./Navbar/Navbar"

function HomePageBuild() {
    return (
        <div className='grid grid-rows-6'>
            <div className='row-span-1'>
            <Navbar  />
            </div>
            <div className='row-span-5' id="mainDiv">
                HomePage Comes here
            </div>
            
        </div>
    )
}

export default HomePageBuild