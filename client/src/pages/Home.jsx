import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
const Home = () => {
  document.title = "Home";
  const [filter, setFilter] = useState({
    date: "all",
    time: "all",
    groups: "all",
    day: "all",
  });
  return (
    <div className="">
      <div className="md:grid grid-cols-12 gap-4 " id="mainDiv">
        <div className="hidden md:block col-span-2">
          <Sidebar filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-span-10">
          <Tabs filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
