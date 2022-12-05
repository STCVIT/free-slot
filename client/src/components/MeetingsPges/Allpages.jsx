import MeetingCardTemplate from "../MeetingCardTemplate";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";
export const AllPages = ({ filter, tab }) => {
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
      const upcoming = await axios.get(url + "?tab=upcoming");
      const past = await axios.get(url + "?tab=past");
      const cancelled = await axios.get(url + "?tab=cancelled");
      console.log(upcoming.data);
      setUpcomingData(upcoming.data);
      setPastData(past.data);
      setCancelledData(cancelled.data);
    }
    getData();
  }, [refresh]);

  useEffect(() => {
    if (day === "all") {
      setDataSet({
        upcoming: UpcomingData,
        past: PastData,
        cancelled: CancelledData,
      });
    } else {
      setDataSet({
        upcoming: UpcomingData.filter((item) => item.day === day),
        past: PastData.filter((item) => item.day === day),
        cancelled: CancelledData.filter((item) => item.day === day),
      });
    }
  }, [CancelledData, PastData, UpcomingData, filter]);
  const list = dataSet[tab];
  for (let i = 0; i < UpcomingData.length; i++) {
    group.add(UpcomingData[i].group);
  }
  for (let i = 0; i < PastData.length; i++) {
    group.add(PastData[i].group);
  }
  for (let i = 0; i < CancelledData.length; i++) {
    group.add(CancelledData[i].group);
  }

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
