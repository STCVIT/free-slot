import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import UpcomingPage from "../MeetingsPges/UpcomingData";
import CancelledPage from "../MeetingsPges/CancelledData";
import PastPage from "../MeetingsPges/PastData";

const TabNavbar = ({ filter }) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 cursor-pointer transition-colors duration-300";
  const activeClass = "border-myBlue";
  const inactiveClass = "border-transparent hover:border-gray-200";
  useEffect(() => {
    const root = createRoot(document.getElementById("MeetingCards"));
    if (activeTab === "upcoming") {
      root.render(<UpcomingPage filter={filter} />);
    } else if (activeTab === "cancelled") {
      root.render(<CancelledPage filter={filter} />);
    } else if (activeTab === "past") {
      root.render(<PastPage filter={filter} />);
    }
    console.log("activeTab", activeTab);
  }, [filter, activeTab]);
  return (
    <ul className="md:grid flex   md:gap-x-0 grid-cols-3 w-full text-center">
      <li
        className={`${mainClass} ${
          activeTab === "upcoming" ? activeClass : inactiveClass
        }`}
        onClick={() => setActiveTab("upcoming")}
      >
        Upcoming
      </li>
      <li
        className={`${mainClass} ${
          activeTab === "cancelled" ? activeClass : inactiveClass
        }`}
        onClick={() => setActiveTab("cancelled")}
      >
        Cancelled
      </li>
      <li
        className={`${mainClass}  ${
          activeTab === "past" ? activeClass : inactiveClass
        }`}
        onClick={() => setActiveTab("past")}
      >
        Past
      </li>
    </ul>
  );
};
export default TabNavbar;
