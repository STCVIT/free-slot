import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
const Home = () => {
  const [filter, setFilter] = useState({
    date: "all",
    time: "all",
    groups: "all",
    day: "all",
  });
  return (
    <div className="h-screen">
      <div className="md:grid grid-cols-12 gap-4 h-full" id="mainDiv">
        <div className="hidden md:block col-span-2 h-screen">
          <Sidebar filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-span-10">
          <Tabs filter={filter} />
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default Home;
