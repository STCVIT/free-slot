import React, { useState } from "react";
// import DropDown from "../Dropdowns/DropDownSidebar";
import DropDown from "../Dropdowns/DropDownSidebar";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Sidebar({ filter, setFilter }) {
  const isLg = window.matchMedia("(min-width: 1024px)").matches;
  const [seeFilters, setSeeFilters] = useState(isLg ? true : false);
  // const [groups, setGroups] = useState([])
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const groups = [
    {
      name: "Apple",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Cat",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "ZZZ",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Dasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "AAasdas",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "BBasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Casd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Dasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
  ];
  return (
    <>
      <aside className="sticky top-0 shadow p-3 h-screen" aria-label="Sidebar">
        <div className="rounded">
          <div className="item-center p-5 relative">
            <DropDown data={groups} />
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
                  key: group.name,
                  text: group.name,
                  value: group.name,
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
    </>
  );
}

export default Sidebar;
