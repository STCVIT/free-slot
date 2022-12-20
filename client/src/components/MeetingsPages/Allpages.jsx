import MeetingCardTemplate from "../Home/MeetingCardTemplate";
import { useEffect, useState } from "react";
//import { url } from "../../config/backend.config";
import axios from "../../axios/index";
import { ReactComponent as NoMeetings } from "../../assets/noMeetings.svg";
import { ReactComponent as NoFilterMatch } from "../../assets/noFilterMatch.svg";
import { UserAuth } from "../../context/UserAuthContext";
import { FindFreeSlot } from "../../context/FreeSlotContext";
export const AllPages = ({ filter, tab }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const group = new Set();
  const [UpcomingData, setUpcomingData] = useState([]);
  const [PastData, setPastData] = useState([]);
  const [CancelledData, setCancelledData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { day, date, time, groups } = filter;
  const [dataSet, setDataSet] = useState({
    upcoming: [],
    past: [],
    cancelled: [],
  });
  const { setIsLoading } = FindFreeSlot();
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const upcoming = await axios.post(
          "meet/getUpcoming",
          {
            email: user.email,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const past = await axios.post(
          "meet/getPast",
          {
            email: user.email,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const cancelled = await axios.post(
          "meet/getCancelled",
          {
            email: user.email,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUpcomingData(upcoming.data);
        setPastData(past.data);
        setCancelledData(cancelled.data);
        setIsLoading(false);
      } catch (err) {
        // alert(err);
        setIsLoading(false);
      }
    }
    // setIsLoading(true);
    getData();
    // setIsLoading(false);
  }, [refresh]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    if (day === "all" && date === "all" && time === "all" && groups === "all") {
      setDataSet({
        upcoming: UpcomingData,
        past: PastData,
        cancelled: CancelledData,
      });
    }
    if (day !== "all" && date === "all" && time === "all" && groups === "all") {
      const itemDay = (date) => {
        const d = new Date(date);
        return weekday[d.getDay()];
      };

      setDataSet({
        upcoming: UpcomingData.filter((item) => itemDay(item.date) === day),
        past: PastData.filter((item) => itemDay(item.date) === day),
        cancelled: CancelledData.filter((item) => itemDay(item.date) === day),
      });
    }
    if (day === "all" && date !== "all" && time === "all" && groups === "all") {
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.date === date),
        past: PastData.filter((item) => item.date === date),
        cancelled: CancelledData.filter((item) => item.date === date),
      });
    }
    if (day === "all" && date === "all" && time !== "all" && groups === "all") {
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.time === time),
        past: PastData.filter((item) => item.time === time),
        cancelled: CancelledData.filter((item) => item.time === time),
      });
    }
    if (day === "all" && date === "all" && time === "all" && groups !== "all") {
      console.log(UpcomingData);
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.team_name === groups),
        past: PastData.filter((item) => item.team_name === groups),
        cancelled: CancelledData.filter((item) => item.team_name === groups),
      });
    }
  }, [CancelledData, PastData, UpcomingData, filter, refresh]);
  const list = dataSet[tab];

  const NoMeetingsState = () => {
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const filterCheck = () => {
      if (
        day === "all" &&
        date === "all" &&
        time === "all" &&
        groups === "all"
      ) {
        return false;
      }
      return true;
    };
    useEffect(() => {
      setIsFilterApplied(filterCheck());
    }, []);

    return (
      <div className="flex justify-center items-center h-full my-4  lg:my-16">
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-base font-medium">
            {!isFilterApplied
              ? "Seems like you don't have any meeting scheduled right now"
              : "No meetings match the filters"}
          </p>
          <div className="opacity-70">
            {!isFilterApplied ? <NoMeetings /> : <NoFilterMatch />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0">
      {list && list.length === 0 && <NoMeetingsState />}

      <MeetingCardTemplate
        list={list}
        tab={tab}
        // refresh={{ refresh, set: setRefresh }}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default AllPages;
