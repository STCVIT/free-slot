import MeetingCardTemplate from "../MeetingCardTemplate";
//import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { url } from "../../config/backend.config";
import axios from "axios";

const PastPage = () => {
  const [PastData, setPastData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(url + "?tab=past");
      setPastData(response.data);
      // console.log(PastData);
      console.log(response.data);
    }
    getData();
  }, [refresh]);
  return (
    <MeetingCardTemplate
      list={PastData}
      tab="past"
      refresh={{ refresh, set: setRefresh }}
    />
  );
};

export default PastPage;
