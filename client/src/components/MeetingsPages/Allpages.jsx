import MeetingCardTemplate from "../Home/MeetingCardTemplate";
import { useEffect, useState } from "react";
//import { url } from "../../config/backend.config";
import axios from "../../axios/index";
import { UserAuth } from '../../context/UserAuthContext'
export const AllPages = ({ filter, tab }) => {
  const user = JSON.parse(localStorage.getItem("user"))
 const token = user.stsTokenManager.accessToken
  const group = new Set();
  const [UpcomingData, setUpcomingData] = useState([]);
  const [PastData, setPastData] = useState([]);
  const [CancelledData, setCancelledData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { day, date, time, groups } = filter;
  //   const [list, setList] = useState([]);
  const [dataSet, setDataSet] = useState({
    upcoming: [],
    past: [],
    cancelled: [],
  });

  useEffect(() => {
    async function getData() { 
      const upcoming = await axios.post("meet/getUpcoming", {
        email: user.email
      }, {headers: {'Authorization': `Bearer ${token}`}});
      const past = await axios.post("meet/getPast", {
        email: user.email
      }, {headers: {'Authorization': `Bearer ${token}`}});
      const cancelled = await axios.post("meet/getCancelled",{
        email: user.email
      }, {headers: {'Authorization': `Bearer ${token}`}});
      console.log(upcoming.data);
      setUpcomingData(upcoming.data);
      setPastData(past.data);
      setCancelledData(cancelled.data);
    }
    getData();
  }, [refresh]);

  useEffect(() => {
    // if (day === "all") {
    //   setDataSet({
    //     upcoming: UpcomingData,
    //     past: PastData,
    //     cancelled: CancelledData,
    //   });
    // } else {
    //   setDataSet({
    //     upcoming: UpcomingData.filter((item) => item.day === day),
    //     past: PastData.filter((item) => item.day === day),
    //     cancelled: CancelledData.filter((item) => item.day === day),
    //   });
    // }
    if (day === "all" && date === "all" && time === "all" && groups === "all") {
      setDataSet({
        upcoming: UpcomingData,
        past: PastData,
        cancelled: CancelledData,
      });
    }
    if (day !== "all" && date === "all" && time === "all" && groups === "all") {
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.day === day),
        past: PastData.filter((item) => item.day === day),
        cancelled: CancelledData.filter((item) => item.day === day),
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
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.group === groups),
        past: PastData.filter((item) => item.group === groups),
        cancelled: CancelledData.filter((item) => item.group === groups),
      });
    }
    // if (day != "all" || date != "all" || time != "all" || groups != "all") {
    //   setDataSet({
    //     upcoming: UpcomingData.filter(
    //       (item) =>
    //         item.day === day ||
    //         item.date === date ||
    //         item.time === time ||
    //         item.group === groups
    //     ),
    //     past: PastData.filter(
    //       (item) =>
    //         item.day === day ||
    //         item.date === date ||
    //         item.time === time ||
    //         item.group === groups
    //     ),
    //     cancelled: CancelledData.filter(
    //       (item) =>
    //         item.day === day ||
    //         item.date === date ||
    //         item.time === time ||
    //         item.group === groups
    //     ),
    //   });
    // }
  }, [CancelledData, PastData, UpcomingData, filter]);
  const list = dataSet.upcoming;
  // for (let i = 0; i < UpcomingData.length; i++) {
  //   group.add(UpcomingData[i].group);
  // }
  // for (let i = 0; i < PastData.length; i++) {
  //   group.add(PastData[i].group);
  // }
  // for (let i = 0; i < CancelledData.length; i++) {
  //   group.add(CancelledData[i].group);
  // }
console.log(dataSet.upcoming)
  // setGroup([...group]);

  return (
    <div className="sticky top-0">
      <MeetingCardTemplate
        list={list}
        tab={tab}
        refresh={{ refresh, set: setRefresh }}
      />
    </div>
  );
};

export default AllPages;
