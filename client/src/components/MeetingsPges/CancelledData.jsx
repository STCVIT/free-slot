import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

const CancelledPage = ({ day }) => {
  // let day = localStorage.getItem("day");
  // const [day, setDay] = useState("all");
  const [CancelledData, setCancelledData] = useState([]);
  useEffect(() => {
    console.log("dat changed to: ", day);
    // setDay(localStorage.getItem("day"));
    async function getData() {
      const response = await axios.get(url + "?tab=cancelled");
      setCancelledData(
        day === "all"
          ? response.data
          : response.data.filter((item) => item.day === day)
      );
      // console.log(CancelledData);
      console.log(response.data);
    }
    getData();
  }, [day]);
  return <MeetingCardTemplate list={CancelledData} tab="cancelled" />;
};

export default CancelledPage;
