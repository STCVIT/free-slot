import PageHeading from "../Headings/PageHeading";
// import '../index.css    '
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import Fuse from "fuse.js";
const ModalChooseTeam = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const selectTeam = (idx) => {
    setSelectedTeam(idx);
  };
  const [teams, setTeams] = useState([]);
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
    keys: ["name"],
  };

  const data = [
    {
      name: "Apple",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Cat",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "ZZZ",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Dasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "AAasdas",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "BBasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Casd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
    {
      name: "Dasd",
      members: "Akash, Ananay, Anirudh, Anitej, Arushi, Astha",
    },
  ];
  const fuse = new Fuse(data, options);
  const results = fuse.search(searchValue);
  useEffect(() => {
    console.log(results);
  }, [results]);
  console.log(selectedTeam);
  const TeamCard = ({ team, idx }) => {
    const pastelColors = [
      "#F2C4DE",
      "#71B1D9",
      "#AED8F2",
      "#F2DEA2",
      "#F2CDC4",
    ];

    // console.log(bgColor);
    return (
      <div
        className="grid grid-cols-12 cursor-pointer hover:outline hover:bg-white p-4 rounded-md even:bg-blue-200 odd:bg-gray-200"
        onClick={() => selectTeam(idx)}
      >
        <div className={`col-span-1 flex items-center`}>
          <div
            style={{ background: pastelColors[idx % 5] }}
            className={`w-[75%] h-full rounded-full  flex items-center justify-center border-2 border-black`}
          >
            {team.name[0]}
            {/* S */}
          </div>
        </div>
        <div className="col-span-11">
          <div>{team.name}</div>
          <div>{team.members}</div>
          {/* <div>STC</div>
          <div>Akash, Ananay, Anirudh, Anitej, Arushi, Astha</div> */}
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
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((team, idx) => (
          <TeamCard team={team} idx={idx} />
        ))} */}
        {(searchValue === "" ? data : results).map((team, idx) => (
          <TeamCard team={searchValue === "" ? team : team.item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default ModalChooseTeam;
