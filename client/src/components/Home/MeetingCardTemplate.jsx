import { IoLocationSharp } from "react-icons/io5";
import NestedModal from "./meetingModal";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../axios";
const MeetingInfoModal = (props) => {
  // return <div>asd</div>;
  // const [teamMembers, setTeamMembers] = useState([]);

  // const getTeamMembers = async () => {
  //   console.log(props.team_id);
  //   const response = await axios.post("team/getTeamMembers", {
  //     team_id: props.team_id,
  //   });
  //   console.log(response.data);
  //   setTeamMembers(response.data);
  // };
  // useEffect(() => {
  //   getTeamMembers();
  // }, []);
  // console.log(teamMembers);
  // teamMembers.join(", ");
  return (
    <div
      className="drop-shadow absolute z-[1000] top-10  lg:right-6 hidden p-4 mb-4 rounded-md bg-white w-[80vw]  lg:w-[25rem]"
      id={"meetingInfoCard" + props.id}
    >
      <div>
        <p className="text-[#7B8A99]">Description</p>
        <div className="rounded-md bg-[#F4F4F4] w-full  p-4 max-h-[25vh] overflow-y-auto my-2">
          <p>{props.desc}</p>
        </div>
        <p className="text-[#7B8A99]">
          Members
          <br />
          <span className="text-black overflow-hidden">
            {/* {props.members.map((member, idx) => {}
             */}
            {props.members}
            {/* {props.members.join(", ")} */}
            {/* {props.members.length < 45
              ? props.members
              : props.members.slice(0, 45) + "..."} */}
          </span>
        </p>
      </div>
    </div>
  );
};

const MeetingCardTemplate = (props) => {
  const [members, setMembers] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const getTeamMembers = async () => {
    console.log(props.team_id);
    const response = await axios.post("team/getTeamMembers", {
      team_id: props.team_id,
    });
    console.log(response.data);
    setTeamMembers(response.data);
  };
  useEffect(() => {
    getTeamMembers();
  }, []);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const MeetingCardsArray = props.list.map((dataItem, idx) => {
    console.log(dataItem);
    const handleOpen = async (id) => {
      const response = await axios.post("team/getTeamMembers", {
        team_id: dataItem.team_id,
      });
      console.log(response.data);
      const modal = document.getElementById("meetingInfoCard" + id);
      modal.classList.toggle("hidden");
      // setMembers(response.data);
      setMembers([response.data.map((member) => member.name)].join(",\t"));
    };

    const data = {
      idx: dataItem.meet_id,
      tab: props.tab,
      refresh: props.refresh,
      setRefresh: props.setRefresh,
    };
    const getDay = new Date(dataItem.date);
    // dataItem.date = moment(dataItem.date).format("Do MMM YY");

    console.log(dataItem);
    return (
      <div
        key={idx}
        className="  self-center w-full px-8 mx-4 py-8 col-span-1  border relative  bg-white rounded-lg my-4 shadow "
        id={dataItem.meet_id}
      >
        {/* {meetingInfoModalOpen( */}
        <div className="relative">
          <MeetingInfoModal
            // members={dataItem.members}
            teamId={dataItem.team_id}
            // members={teamMembers}
            members={members}
            id={dataItem.meet_id}
            desc={dataItem.description}
          />
        </div>
        {/* )} */}
        <div className="absolute top-5 right-5 cursor-pointer">
          <GoKebabVertical
            size={25}
            onClick={() => handleOpen(dataItem.meet_id)}
          />
        </div>
        <p>
          <span>{weekday[getDay.getDay()]}</span>
          <span className="font-semibold">
            , {moment(dataItem.date).format("Do MMM YY")}
          </span>
        </p>
        <p className="text-2xl font-bold  text-black">
          {moment(dataItem.start_time, "HH:mm:ss").format("hh:mm a")} -{" "}
          {moment(dataItem.end_time, "HH:mm:ss").format("hh:mm a")}
        </p>
        <div className="flex gap-x-4 my-4 font-semibold text-myBlue">
          {["Gmeet", "Zoom", "Discord"].includes(dataItem.location) ? (
            <BsFillCameraVideoFill size={20} />
          ) : (
            <IoLocationSharp size={20} />
          )}
          {dataItem.location}
        </div>
        <p className="font-normal flex flex-col gap-y-1 text-black ">
          {/* <span className="font-semibold">Created by {dataItem.by}</span> */}
          <span className="font-semibold">Created by {dataItem.admin}</span>

          {/* <span>{dataItem.day}</span> */}

          <span>{dataItem.title}</span>
          <span>{dataItem.team_name}</span>
        </p>
        {props.tab === "upcoming" && (
          <div className="flex w-full gap-x-3">
            {["Mark as done", "Cancel"].map((button, idx) => (
              <NestedModal desc={button} data={data} key={idx} />
            ))}
          </div>
        )}
      </div>
      // <div>{dataItem.description}</div>
    );
  });
  return (
    // <div className="flex w-full items-center flex-auto flex-wrap justify-between  gap-x-4 lg:mx-2">
    // <div className="flex flex-wrap justify-between after:flex-auto">
    <div>
      <div
        className=" "
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
          gridGap: "1rem",
          // justifyContent: "space-between",
        }}
      >
        {MeetingCardsArray}
      </div>
    </div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
