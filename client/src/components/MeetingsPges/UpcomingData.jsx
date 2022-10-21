import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

const UpcomingPage = (day) => {
  const [UpcomingData, setUpcomingData] = useState([]);
  useEffect(() => {
    console.log(day);
    async function getData() {
      const response = await axios.get(url + "?tab=upcoming");

      setUpcomingData(response.data);
    }
    getData();
  }, [day]);
  return (
    <MeetingCardTemplate
      list={UpcomingData.filter((item) => item.day === day)}
      tab="upcoming"
    />
  );
};

export default UpcomingPage;
