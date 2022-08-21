import React from 'react'
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs"
import Navbar from "./components/Navbar";


function HomePageBuild() {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="grid grid-cols-6 gap-4 h-full">
                <Sidebar />
                <Tabs />

            </div>
        </div>
    )
}

export default HomePageBuild