import React, { useState } from "react";
import DropDown from "./DropDownSidebar";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Datepicker from "flowbite-datepicker/Datepicker";
function Sidebar({ filter, setFilter }) {
  const isLg = window.matchMedia("(min-width: 1024px)").matches;
  const [seeFilters, setSeeFilters] = useState(isLg ? true : false);
  // const dateObj = new Date();
  // const [date, setDate] = useState(dateObj);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const groups = [
    "Group A",
    "Group B",
    "Group C",
    "Group D",
    "Group E",
    "Group F",
    "Group G",
    "Group H",
    "Group I",
    "Group J",
    "Group K",
    "Group L",
    "Group M",
    "Group N",
    "Group O",
    "Group P",
    "Group Q",
    "Group R",
    "Group S",
    "Group T",
    "Group U",
    "Group V",
    "Group W",
    "Group X",
    "Group Y",
    "Group Z",
  ];
  return (
    <>
      <div className="shadow p-3 ">
        <aside className="" aria-label="Sidebar">
          <div className="rounded bg-white ">
            <div className="item-center p-5 relative">
              <DropDown />
            </div>

            <h1 className="hidden md:block ml-3 whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider">
              Filters
            </h1>

            <button
              onClick={() => setSeeFilters(!seeFilters)}
              className="md:hidden whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider"
            >
              Filters {seeFilters ? "▲" : "▼"}
            </button>

            {seeFilters && (
              <div className="w-3/4 md:w-full flex flex-col gap-y-4">
                <Dropdown
                  clearable
                  multiple={false}
                  placeholder="Day"
                  selection
                  options={days.map((day) => ({
                    key: day,
                    text: day,
                    value: day,
                  }))}
                  onChange={(e, { value }) => {
                    setFilter({ ...filter, day: value === "" ? "all" : value });
                  }}
                  button={true}
                  defaultSelectedLabel="all"
                />

                <Dropdown
                  clearable
                  placeholder="Group"
                  selection
                  options={groups.map((group) => ({
                    key: group,
                    text: group,
                    value: group,
                  }))}
                  onChange={(e, { value }) => {
                    setFilter({
                      ...filter,
                      groups: value === "" ? "all" : value,
                    });
                  }}
                  button={true}
                  defaultSelectedLabel="all"
                />
                <Dropdown
                  clearable
                  basic={false}
                  multiple={false}
                  placeholder="Time"
                  selection
                  options={[
                    <input
                      className="w-full p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                      type="time"
                      onChange={(e) =>
                        setFilter({ ...filter, time: e.target.value })
                      }
                    />,
                  ]}
                  onChange={(e, { value }) => {
                    setFilter({
                      ...filter,
                      date: value === "" ? "all" : value,
                    });
                  }}
                  button={true}
                  defaultSelectedLabel="all"
                />
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
