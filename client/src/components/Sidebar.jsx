import React from "react";
import DropDown from "./DropDownSidebar";

function Sidebar() {
  const [day, setDay] = React.useState("all");
  // const setDay = (day) => {
  //   localStorage.setItem("day", day);
  // };
  const changeDay = (dayNow) => {
    setDay(localStorage.setItem("day", dayNow));
  };

  return (
    <>
      <div className="shadow p-3 h-full">
        <aside className="" aria-label="Sidebar">
          <div className="rounded bg-white ">
            <div className="item-center p-5 z-10">
              <DropDown />
            </div>

            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider">
                    Filters
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">DATE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                {/* <button
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">DAY</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button> */}
                <label for="daySelect">Day</label>
                {/* <select name="" id="daySelect">
                  <option onClick={setDay("Monday")}>Mon</option>
                  <option onClick={() => setDay("Tuesday")}>Tue</option>
                  <option onClick={() => setDay("Wednesday")}>Wed</option>
                  <option onClick={() => setDay("Thursday")}>Thurs</option>
                  <option onClick={() => setDay("Friday")}>Fri</option>
                  <option onClick={() => setDay("Saturday")}>Sat</option>
                  <option onClick={() => setDay("Sunday")}>Sun</option>
                </select> */}
                {/* <select name="" id="daySelect"> */}
                <div onClick={() => changeDay("Monday")}>Mon</div>
                <div onClick={() => changeDay("Tuesday")}>Tue</div>
                <div onClick={() => changeDay("Wednesday")}>Wed</div>
                <div onClick={() => changeDay("Thursday")}>Thurs</div>
                <div onClick={() => changeDay("Friday")}>Fri</div>
                <div onClick={() => changeDay("Saturday")}>Sat</div>
                <div onClick={() => changeDay("Sunday")}>Sun</div>
                {/* </select> */}
                {/* <select name="" id="daySelect">
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thurs</option>
                  <option>Fri</option>
                  <option>Sat</option>
                  <option>Sun</option>
                </select> */}
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">TIME</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">GROUPS</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
