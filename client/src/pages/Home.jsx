import React from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="grid grid-cols-6 gap-4 h-full" id="mainDiv">
        <Sidebar />
        <Tabs />
      </div>
    </div>
  );
}
