import MeetingCardTemplate from "../MeetingCardTemplate";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

export const CancelledPage = ({ filter }) => {
  const [CancelledData, setCancelledData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { day, date, time, groups } = filter;
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url + "?tab=cancelled");
      setCancelledData(response.data);
    }
    getData();
  }, [refresh]);
  return (
    <MeetingCardTemplate
      list={
        day === "all"
          ? CancelledData
          : CancelledData.filter((item) => item.day === day)
      }
      tab="cancelled"
      refresh={{ refresh, set: setRefresh }}
    />
  );
};

export default CancelledPage;
