// import TabNavbar from "../TabNavbar/TabNavbar";
import PageHeading from "../Headings/PageHeading";
import AllPages from "./Allpages";
import { useState, useEffect } from "react";

const TabNavbar = ({ activeTab, setActiveTab }) => {
  const mainClass =
    "px-4 py-2 border-b-4  col-span-1 cursor-pointer transition-colors duration-300";
  const activeClass = "border-myBlue font-semibold";
  const inactiveClass = "border-transparent hover:border-gray-200";

  var desc = document.querySelectorAll('[id^="meetingInfoCard"]');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    desc.forEach((item) => {
      item.classList.add("hidden");
    });
  };
  return (
    <ul className="lg:grid flex lg:w-1/2 justify-between lg:justify-start  lg:gap-x-0 grid-cols-3 w-full text-center">
      {["upcoming", "cancelled", "past"].map((tab, idx) => (
        <li
          key={idx}
          className={`${mainClass} ${
            activeTab === tab ? activeClass : inactiveClass
          }`}
          onClick={() => handleTabChange(tab)}
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
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {isLg && <PageHeading title="Meetings" />}
      <div className="sticky top-0 z-20 drop-shadow">
        <div className="border-b w-full bg-white pt-4 mt-10">
          <TabNavbar
            filter={filter}
            numberOfCards={numberOfCards}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="relative">
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
