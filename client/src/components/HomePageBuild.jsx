import React from 'react'
import Sidebar from "./Sidebar";
import Tabs from "./Tabs"
import Navbar from "./Navbar";


function HomePageBuild() {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="invisible sm:visible grid grid-cols-6 gap-4 h-full">
                <Sidebar />
                <Tabs />

            </div>
        </div>
    )
}

export default HomePageBuild