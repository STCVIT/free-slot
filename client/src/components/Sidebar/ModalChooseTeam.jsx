import PageHeading from "../Headings/PageHeading";
// import '../index.css    '
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

import { UserAuth } from "../../context/UserAuthContext";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import axios from "../../axios/index";
import Fuse from "fuse.js";
import { toast } from "react-toastify";
const ModalChooseTeam = ({ onClose, data }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [teamToDelete, setTeamToDelete] = useState(null);
  const {
    selectedTeam,
    setSelectedTeam,
    justFindFreeSlot,
    setRefreshTeams,
    refreshTeams,
    setIsLoading,
  } = FindFreeSlot();
  const regNoArr = data[0];
  const teamObj = data[1];
  console.log(teamObj);
  const goToFreeSlot = async (team_name) => {
    const regArr = new Set();
    teamObj[team_name].forEach((team) => {
      regArr.add(team);
    });
    let finalArr = [];
    [...regArr].forEach((reg) => {
      finalArr.push(reg.reg_no);
    });
    console.log(finalArr);

    try {
      const teamId = await axios.get(`team/${team_name}`);
      console.log(teamId);
      localStorage.setItem("team_id", teamId.data.team_id);
      await justFindFreeSlot(finalArr);
      navigate("/freeslot");
    } catch (error) {
      console.error("goToFreeSlot " + error);
    }
    onClose(selectedTeam);
  };

  const options = {
    shouldSort: true,
    keys: ["team_name"],
  };

  const fuse = new Fuse(regNoArr, options);
  const results = fuse.search(searchValue);
  const deleteTeam = async (team_id) => {
    try {
      setIsLoading(true);
      await axios.delete(`team/deleteTeam/${team_id}`);
      setRefreshTeams(!refreshTeams);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };
  const DeleteModal = ({ teamToDelete }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-600/30 bg-opacity-50 z-50 flex justify-center items-center rounded-lg">
        <div className="bg-white rounded-md p-4 w-96">
          <div className="text-center text-xl font-bold">
            Are you sure you want to delete the team{" "}
            <b>"{teamToDelete.team_name}"</b>?
          </div>
          <div className="flex justify-center gap-x-4 mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                setDeleteModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white px-4 py-2 rounded-md"
              onClick={() => {
                deleteTeam(teamToDelete.team_id);
                setDeleteModalOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TeamCard = ({ team }) => {
    return (
      <div className=" flex items-center justify-between hover:outline hover:bg-white rounded-md even:bg-blue-200 odd:bg-gray-200">
        {deleteModalOpen && <DeleteModal teamToDelete={teamToDelete} />}
        <div
          onClick={() => goToFreeSlot(team.team_name)}
          className="w-full cursor-pointer px-4 py-4"
        >
          <div>{team.team_name}</div>
          <div>{team.members}</div>
        </div>
        <div
          className="px-4 ml-3 cursor-pointer flex justify-center items-center py-4 border-l border-gray-500"
          // onClick={() => deleteTeam(team.team_id)}
          // onClick={() => deleteTeam(team.team_id)}
          onClick={() => {
            setTeamToDelete(team);
            setDeleteModalOpen(true);
          }}
        >
          <FiTrash2 />
        </div>
      </div>
    );
  };
  return (
    <div className="relative">
      <PageHeading title="Select your team" />

      <div>
        <div className="flex border-2 border-black rounded-md mx-4">
          <input
            autoComplete="off"
            type="search"
            id="default-search"
            className="w-full px-2 py-4 border-r-2 border-black active:border-none focus:outline-none"
            placeholder="Search team"
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="p-4">
            <BsSearch className=" text-2xl text-bg-primary" />
          </div>
        </div>
      </div>
      <div className="h-[50vh] overflow-y-auto p-4 my-4 flex flex-col gap-y-4 ">
        {(searchValue === "" ? regNoArr : results).map((team, idx) => (
          <TeamCard
            key={idx}
            team={searchValue === "" ? team : team.item}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalChooseTeam;
