import React, { useEffect, useState } from "react";
// import DropDownSidebar from "../Dropdowns/DropDownSidebar";
import DropDownSidebar from "../Dropdowns/DropDownSidebar";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "../../axios";

function Sidebar({ filter, setFilter }) {
  const [urlPath, setUrlPath] = useState("");
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  const [seeFilters, setSeeFilters] = useState(isLg ? true : false);
  const [teams, setTeams] = useState([]);
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
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
      setSeeFilters(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      console.log("teams: ", data);

      setGroups(data);
      setTeams(Object.keys(data[1]));
    }
    getData();
  }, []);
  // console.log(Object.keys(groups[1]));
  const FilterOptions = () => {
    return (
      <div className={`w-full flex flex-col gap-y-4`}>
        <Dropdown
          clearable={filter.day !== "all" ? true : false}
          value={filter.day !== "all" && filter.day}
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
          clearable={filter.groups !== "all" ? true : false}
          value={filter.groups !== "all" && filter.groups}
          placeholder="Team"
          multiple={false}
          selection
          disabled={urlPath === "/freeslot" ? true : false}
          options={teams.map((group) => ({
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
          multiple={false}
          placeholder="Time"
          selection
          options={[
            <input
              key={"filterTimeInput"}
              className=" p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              type="time"
              onSubmit={(e) => {
                setFilter({ ...filter, time: e.target.value });
              }}
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
    );
  };
  return (
    <>
      <div>
        {isLg && (
          <aside
            className={`${isLg && "sticky h-screen"} top-0 shadow p-3`}
            aria-label="Sidebar"
          >
            <div className="rounded">
              <div className="item-center p-5">
                <DropDownSidebar data={groups} />
              </div>

              <h1 className="ml-3 whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider">
                Filters
              </h1>
              <div className="w-1/2">
                <FilterOptions />
              </div>
            </div>
          </aside>
        )}
        {!isLg && (
          <div>
            <button
              onClick={() => setSeeFilters(!seeFilters)}
              className="whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider"
            >
              Filters {seeFilters ? "▲" : "▼"}
            </button>

            {seeFilters && <FilterOptions />}
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
