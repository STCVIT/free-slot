import React, { useEffect, useState } from "react";
// import DropDownSidebar from "../Dropdowns/DropDownSidebar";
import DropDownSidebar from "../Dropdowns/DropDownSidebar";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "../../axios";

function Sidebar({ filter, setFilter }) {
  const [urlPath, setUrlPath] = useState("");
  const isLg = window.matchMedia("(min-width: 1024px)").matches;
  const [seeFilters, setSeeFilters] = useState(isLg ? true : false);

  const [groups, setGroups] = useState([]);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setUrlPath(window.location.pathname);
    // console.log(urlPath);
  }, [urlPath]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.stsTokenManager.accessToken;
    // console.log(user, token);
    async function getData() {
      // console.log("check");
      const data = await axios
        .post(
          "team/getUserTeams",
          {
            email: user.email,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          // console.log(res);
          return res.data;
        });
      // console.log("teams: ", data[0]);

      setGroups(data[0]);
    }
    getData();
  }, []);

  return (
    <>
      <aside
        className="md:sticky top-0 shadow p-3 md:h-screen"
        aria-label="Sidebar"
      >
        <div className="rounded">
          <div className="item-center p-5">
            <DropDownSidebar data={groups} />
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
            <div className={`w-3/4 md:w-full flex flex-col gap-y-4`}>
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
                multiple={false}
                disabled={urlPath === "/freeslot" ? true : false}
                options={groups.map((group) => ({
                  key: group.team_name,
                  text: group.team_name,
                  value: group.team_name,
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
