import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

const UpcomingPage = () => {
  const [UpcomingData, setUpcomingData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url + "?tab=upcoming");
      setUpcomingData(response.data);
      // console.log(UpcomingData);
      console.log(response.data);
    }
    getData();
  }, [refresh]);
  return (
    <MeetingCardTemplate
      list={UpcomingData}
      tab="upcoming"
      refresh={{ refresh, set: setRefresh }}
    />
  );
};

export default UpcomingPage;
