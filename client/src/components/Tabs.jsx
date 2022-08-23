import { useState } from "react";
import TabsData from "./TabsData"
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
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
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
        <p>{TabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}

export default Tabs;