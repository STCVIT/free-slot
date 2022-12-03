import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

export const UpcomingPage = ({ filter }) => {
  const [UpcomingData, setUpcomingData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { day, date, time, groups } = filter;

  console.log(filter);
  useEffect(() => {
    console.log("filters in upcoming: ", filter);
    async function getData() {
      const response = await axios.get(url + "?tab=upcoming");
      setUpcomingData(response.data);
      console.log(response.data);
    }
    getData();
  }, [refresh, filter]);
  return (
    <MeetingCardTemplate
      list={
        day === "all"
          ? UpcomingData
          : UpcomingData.filter((item) => item.day === day)
      }
      // list={UpcomingData}
      tab="upcoming"
      refresh={{ refresh, set: setRefresh }}
    />
  );
};

export default UpcomingPage;
