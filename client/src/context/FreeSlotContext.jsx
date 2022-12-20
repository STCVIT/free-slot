import React from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "../axios/index";
const freeSlotContext = createContext();

export function FreeSlotContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [link, setLink] = useState(null);
  const [chosenSlotTime, setChosenSlotTime] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [linkMaker, setLinkMaker] = useState(null);
  const [linkTeam, setLinkTeam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chosenDate, setChosenDate] = useState(null);
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [newTeamName, setNewTeamName] = useState(null);
  const [redirected, setRedirected] = useState(false);
  const [linkUid, setLinkUid] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const justFindFreeSlot = async (tags) => {
    try {
      setIsLoading(true);
      console.log(tags);
      await axios
        .post("timetable/freeslot", {
          members: tags,
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          console.log(typeof res.data);
        });
      setIsLoading(false);
      toast.success("Free slots found");
    } catch (error) {
      console.error("justFindFreeSlot " + error);
    }
  };
  const saveTeamAndFindFreeSlot = async (teamName, tags) => {
    // console.log(tags);
    try {
      setIsLoading(true);
      const res = await axios.post("team/create", {
        team_name: teamName,
        members: tags,
      });
      console.log(res.data);
      localStorage.setItem("team_id", res.data.team_id);
      // setCurrentTeamId(res.data.team_id);  // console.log(currentTeamId);
      // console.log(tags);
      const tt = await axios.post("timetable/freeslot", {
        members: tags,
      });

      setData(tt.data);
      console.log(tt.data);
      setIsLoading(false);
      toast.success("Free slots found");
    } catch (error) {
      console.error("saveTeamAndFindFreeSlot " + error);
    }
  };
  const getLink = async () => {
    try {
      // localStorage.setItem("linkTeam", JSON.stringify(linkTeam));
      const teamName = localStorage.getItem("team_name");
      await axios
        .post("link", {
          team_name: teamName,
          email: JSON.parse(localStorage.getItem("user")).email,
        })
        .then((res) => {
          setLink(res.data);
        });
      localStorage.removeItem("team_name");
    } catch (error) {
      console.error("getLink " + error);
    }
  };
  // console.log(linkMaker);
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
        setChosenDate,
        chosenDate,
        chosenSlotTime,
        setChosenSlotTime,
        selectedTeam,
        setSelectedTeam,
        linkTeam,
        setLinkTeam,
        linkMaker,
        setLinkMaker,
        isLoading,
        setIsLoading,
        currentTeamId,
        setCurrentTeamId,
        newTeamName,
        setNewTeamName,
        redirected,
        setRedirected,
        linkUid,
        setLinkUid,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </freeSlotContext.Provider>
  );
}
export const FindFreeSlot = () => {
  return useContext(freeSlotContext);
};
