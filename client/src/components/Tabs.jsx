import { useState } from "react";
import TabsData from "./TabsData"
import { ReactComponent as LocationIcon } from '../assets/Location-Icon.svg'
export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="col-span-5">
      <div className="text-center text-4xl font-bold p-4 py-5 ">Meetings</div>
      <div className="border-b grid grid-cols-12">
        {/* Loop through tab data and render button for each. */}
        {TabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                ? "border-blueTheme"
                : "border-transparent hover:border-gray-200"
                }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="py-4">
        <div className="p-6 max-w-sm border  bg-white rounded-lg  shadow ">
          <h5 className="mb-2 p-2 text-2xl font-bold tracking-tight text-black">{TabsData[activeTabIndex].time}</h5>
          <div className="flex">
            <p className="mb-3 p-2 font-normal "><LocationIcon /></p>
            <p className="mb-3 p-2 font-normal text-blueTheme ">{TabsData[activeTabIndex].place}</p>
          </div>
          <p className="mb-3 p-2 font-normal text-black ">Created by {TabsData[activeTabIndex].by}</p>
          <p className="mb-3 p-2 font-normal text-gray-400 ">{TabsData[activeTabIndex].members}</p>
          <div className="flex">
            <button className="flex-1 items-center py-3 px-5 text-sm font-medium text-center text-white bg-blueTheme rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Mark as done
            </button>
            <button className="flex-1 rounded px-4 items-center py-2 text-black hover:underline bg-white ">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;