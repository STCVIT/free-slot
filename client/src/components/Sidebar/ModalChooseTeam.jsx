import PageHeading from "../Headings/PageHeading";
// import '../index.css    '
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { UserAuth } from "../../context/UserAuthContext";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import axios from "../../axios/index";
import Fuse from "fuse.js";
const ModalChooseTeam = ({ onClose, data }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { selectedTeam, setSelectedTeam, justFindFreeSlot } = FindFreeSlot();
  const regNoArr = data[0];
  const teamObj = data[1];
  console.log(teamObj);
  const goToFreeSlot = async (team_name) => {
    const regArr = new Set();
    teamObj[team_name].forEach((team) => {
      regArr.add(team);
    });
    // console.log([...regArr]);
    let finalArr = [];
    [...regArr].forEach((reg) => {
      finalArr.push(reg.reg_no);
    });
    console.log(finalArr);
    try {
      await justFindFreeSlot(finalArr);
      navigate("/freeslot");
    } catch (error) {
      console.error("goToFreeSlot " + error);
    }
    onClose(selectedTeam);
  };

  // useEffect(() => {
  //   const selectTeam = (team_name) => {

  //     setSelectedTeam([...regArr]);
  //   };
  //   console.log("Selected team: ", selectedTeam);
  //   if (selectedTeam.length > 0) {
  //   }
  // }, [selectedTeam]);
  // const [teams, setTeams] = useState([]);
  // console.log(data);
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["team_name"],
  };
  // const teamNames = data.map((team) => team.team_name);
  // console.log(teamNames);
  const fuse = new Fuse(regNoArr, options);
  const results = fuse.search(searchValue);
  // useEffect(() => {
  //   console.log(results);
  // }, [results]);
  // console.log(selectedTeam);
  // console.log("teams obj:", teamObj);
  const TeamCard = ({ team }) => {
    return (
      <div
        className="cursor-pointer hover:outline hover:bg-white p-4 rounded-md even:bg-blue-200 odd:bg-gray-200"
        onClick={() => goToFreeSlot(team.team_name)}
      >
        <div>
          <div>{team.team_name}</div>
          <div>{team.members}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="relative">
      <PageHeading title="Select your team" />
      <button className="absolute top-5 right-5" onClick={onClose}>
        <GrClose size={16} />
      </button>
      <div>
        <div className="flex border-2 border-black rounded-md">
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
            <BsSearch className=" text-2xl text-myBlue" />
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
