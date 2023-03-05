import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Tabs from "../components/MeetingsPages/Tabs";
import MainNavbar from "../components/Menus/MainNavbar";
import { FindFreeSlot } from "../context/FreeSlotContext";
import RedirectingMiddleware from "../components/Links/RedirectingMiddleware";
import AddMeToTeam from "../components/Links/AddMeToTeam";
import MobileNav from "../components/Menus/MobileNavbar";
import PageHeading from "../components/Headings/PageHeading";
import { useNavigate } from "react-router-dom";
import axios from "../axios/index";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    date: "all",
    time: "all",
    groups: "all",
    day: "all",
  });
  const [group, setGroup] = useState([null]);
  document.title = "Home";
  const { linkUid } = FindFreeSlot();
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  // useEffect(() => {
  //   const checkTT = async () => {
  //     try {
  //       const user = JSON.parse(localStorage.getItem("user"));
  //       const res = await axios.post("user/getUserByEmail", {
  //         email: user.email,
  //       });

  //       if (!res.data.timetable) {
  //         navigate("/timetable");
  //       }
  //     } catch (err) {
  //       navigate("/timetable");
  //
  //     }
  //   };
  //   checkTT();
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <MainNavbar active="home" />
      {linkUid && <AddMeToTeam />}
      <div className="max-w-screen pr-4 bg-[#f2f2f2]">
        {!isLg && <PageHeading title="Meetings" />}
        {/* <div className="lg:grid grid-cols-12 gap-4"> */}
        <div className="lg:flex gap-4">
          <div className="lg:sticky lg:h-screen top-0">
            <Sidebar filter={filter} setFilter={setFilter} group={group} />
          </div>
          <div className="w-full ">
            <Tabs filter={filter} setGroup={setGroup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
