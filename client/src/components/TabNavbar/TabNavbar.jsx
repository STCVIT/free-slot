import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import AllPages from "../MeetingsPges/Allpages";
const TabNavbar = ({ filter }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 cursor-pointer transition-colors duration-300";
  const activeClass = "border-myBlue";
  const inactiveClass = "border-transparent hover:border-gray-200";
  useEffect(() => {
    const root = createRoot(document.getElementById("MeetingCards"));
    root.render(<AllPages filter={filter} tab={activeTab} />);
  }, [filter, activeTab]);
  return (
    <ul className="md:grid flex md:w-1/2   md:gap-x-0 grid-cols-3 w-full text-center">
      {["upcoming", "cancelled", "past"].map((tab, idx) => (
        <li
          className={`${mainClass} ${
            activeTab === tab ? activeClass : inactiveClass
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab[0].toUpperCase() + tab.slice(1)}
        </li>
      ))}
    </ul>
  );
};
export default TabNavbar;
