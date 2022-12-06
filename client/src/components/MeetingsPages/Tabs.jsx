// import TabNavbar from "../TabNavbar/TabNavbar";
import PageHeading from "../Headings/PageHeading";
import AllPages from "./Allpages";
import { useState, useEffect } from "react";

const TabNavbar = ({ activeTab, setActiveTab }) => {
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 cursor-pointer transition-colors duration-300";
  const activeClass = "border-myBlue";
  const inactiveClass = "border-transparent hover:border-gray-200";

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

const Tabs = ({ filter, setGroup }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const [numberOfCards, setNumberOfCards] = useState([]);

  return (
    <div>
      <PageHeading title="Meetings" />
      <div className="sticky top-0 z-50 drop-shadow">
        <div className="border-b w-full bg-white pt-4">
          <TabNavbar
            filter={filter}
            numberOfCards={numberOfCards}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div>
        <AllPages
          filter={filter}
          tab={activeTab}
          setNumberOfCards={setNumberOfCards}
        />
      </div>
    </div>
  );
};

export default Tabs;
