import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "../axios/index";

const freeSlotContext = createContext();

export function FreeSlotContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [link, setLink] = useState(null);
  const [chosenSlotTime, setChosenSlotTime] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [linkMaker, setLinkMaker] = useState(null)
  const [linkTeam, setLinkTeam] = useState("");
  const justFindFreeSlot = async (tags) => {
    console.log(tags);
    try {
      await axios
        .post("timetable/freeslot", {
          members: tags,
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          console.log(typeof res.data);
        });
    } catch (error) {
      console.error("justFindFreeSlot " + error);
    }
  };
  const saveTeamAndFindFreeSlot = async (teamName, tags) => {
    try {
      await axios.post("team/create", {
        team_name: teamName,
        members: tags,
      });
      await axios
        .post("timetable/freeslot", {
          members: tags,
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.error("saveTeamAndFindFreeSlot " + error);
    }
  };
  const getLink = async () => {
    try {
      localStorage.setItem("linkTeam", JSON.stringify(linkTeam))
      await axios
        .post("link", {
          team_name: linkTeam,
          email: JSON.parse(localStorage.getItem("user")).email,
        })
        .then((res) => {
          setLink(res.data);
        });
    } catch (error) {
      console.error("getLink " + error);
    }
  };
  console.log(linkMaker)
  return (
    <freeSlotContext.Provider
      value={{
        justFindFreeSlot,
        saveTeamAndFindFreeSlot,
        data,
        setData,
        getLink,
        link,
        setLink,
        chosenSlotTime,
        setChosenSlotTime,
        selectedTeam,
        setSelectedTeam,
        linkTeam,
        setLinkTeam,
        linkMaker,
        setLinkMaker
      }}
    >
      {children}
    </freeSlotContext.Provider>
  );
}
export const FindFreeSlot = () => {
  return useContext(freeSlotContext);
};
