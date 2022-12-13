import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Tabs from "../components/MeetingsPages/Tabs";
import MainNavbar from "../components/Menus/MainNavbar";
const Home = () => {
  const [filter, setFilter] = useState({
    date: "all",
    time: "all",
    groups: "all",
    day: "all",
  });
  const [group, setGroup] = useState([null]);
  document.title = "Home";
  return (
    <>
      <MainNavbar active="home" />
      <div className="max-w-screen pr-4 bg-[#f2f2f2]">
        <div className="lg:grid grid-cols-12 gap-4">
          <div className=" lg:block col-span-2">
            <Sidebar filter={filter} setFilter={setFilter} group={group} />
          </div>
          <div className="col-span-10">
            <Tabs filter={filter} setGroup={setGroup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
