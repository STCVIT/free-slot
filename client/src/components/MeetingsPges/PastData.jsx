import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

export const PastPage = ({ filter }) => {
  const [PastData, setPastData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { day, date, time, groups } = filter;
  console.log("day", day);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url + "?tab=past");
      setPastData(response.data);
      // console.log(PastData);
      // console.log(response.data);
    }
    getData();
  }, [refresh]);
  return (
    <>
      <MeetingCardTemplate
        list={
          day === "all" ? PastData : PastData.filter((item) => item.day === day)
        }
        tab="past"
        refresh={{ refresh, set: setRefresh }}
      />
    </>
  );
};

export default PastPage;
