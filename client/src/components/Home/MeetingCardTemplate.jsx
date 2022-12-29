import { ClickAwayListener } from "@mui/material";
import { IoLocationSharp } from "react-icons/io5";
import NestedModal from "./meetingModal";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GoKebabVertical } from "react-icons/go";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "../../axios";
// import { isAfter } from "date-fns";
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
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [infoOpen, setInfoOpen] = useState(false);
  const [members, setMembers] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentMeet, setCurrentMeet] = useState(null);
  const [desc, setDesc] = useState(null);
  const pastCards = [];
  const getTeamMembers = async () => {
    // console.log(props.team_id);
    const response = await axios.post("team/getTeamMembers", {
      team_id: props.team_id,
    });
    // console.log(response.data);
    setTeamMembers(response.data);
  };
  useEffect(() => {
    getTeamMembers();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isLg ? "65%" : "95%",
    bgcolor: "white",

    borderRadius: "0.5rem",
    boxShadow: 12,
    // p: 4,
  };
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
    const handleOpen = () => {
      props.list.forEach((item) => {
        if (item.meet_id === dataItem.meet_id) {
          setDesc(item.description);
          setMembers(item.members);
          setInfoOpen(true);
          setCurrentMeet(item.meet_id);
        }
      });
    };
    var date_time = dataItem.date + "T" + dataItem.end_time + "Z";
    var isafter = moment(date_time).isAfter(moment());
    if (!isafter) {
      pastCards.push(dataItem);
    }
    const data = {
      idx: dataItem.meet_id,
      tab: props.tab,
      refresh: props.refresh,
      setRefresh: props.setRefresh,
    };
    const getDay = new Date(dataItem.date);

    const style = {
      top: "0",
      width: "20vw",
      bgcolor: "background.paper",
      boxShadow: 2,
      borderRadius: "0.5rem",
      p: 4,
    };
    const handleClose = () => {
      setInfoOpen(false);
      setCurrentMeet(null);
    };
    return (
      <div
        key={idx}
        className="  self-center w-full px-8 mx-4 py-8 col-span-1  border relative  bg-white rounded-lg my-4 shadow "
        id={dataItem.meet_id}
      >
        {/* <Modal
          hideBackdrop
          open={infoOpen}
          onClose={() => setInfoOpen(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"

        > */}
        {infoOpen && currentMeet === dataItem.meet_id && (
          <div className="absolute bg-white w-full h-3/4 drop-shadow-md rounded-md z-50 p-4 top-16 left-5">
            <ClickAwayListener onClickAway={handleClose}>
              <Box>
                <div>
                  <div>
                    <p className="text-[#7B8A99]">Description</p>
                    <div className="rounded-md bg-[#F4F4F4] w-full  p-4 max-h-[25vh] overflow-y-auto my-2">
                      <p>{desc}</p>
                    </div>
                    <p className="text-[#7B8A99]">
                      Members
                      <br />
                      <span className="text-black overflow-hidden">
                        {/* {props.members.map((member, idx) => {}
                         */}
                        {/* {props.members} */}
                        {/* {props.members.join(", ")} */}
                        {/* {props.members.length < 45
              ? props.members
              : props.members.slice(0, 45) + "..."} */}
                      </span>
                    </p>
                  </div>
                </div>
              </Box>
            </ClickAwayListener>
          </div>
        )}
        {/* </Modal> */}
        <div className="absolute top-5 right-5 cursor-pointer">
          <GoKebabVertical size={25} onClick={handleOpen} />
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
          <span className="font-semibold">Created by {dataItem.admin}</span>
          {/* <span>Past: {isafter ? "No" : "Yes"}</span> */}
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
    );
  });
  return (
    <div>
      <div
        className=" "
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
          gridGap: "1rem",
        }}
      >
        {MeetingCardsArray}
        {props.tab === "upcoming" && (
          <Modal
            BackdropProps={{
              style: {
                backgroundColor: "white",
                opacity: 0.8,
              },
            }}
            open={pastCards.length > 0}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="p-4 flex flex-col gap-y-8">
                <div className="text-center font-semibold text-lg">
                  Select either of the options for your expired meetings to
                  continue further
                </div>
                <div>
                  <div className="grid grid-cols-5 text-gray-600 ">
                    <div className="col-span-1">Date</div>
                    <div className="col-span-2">Timings</div>
                    <div className="col-span-2">Options</div>
                  </div>
                  <div className="max-h-[75%] overflow-y-auto">
                    {pastCards.length > 0 &&
                      pastCards.map((item, idx) => {
                        const data = {
                          idx: item.meet_id,
                          tab: props.tab,
                          refresh: props.refresh,
                          setRefresh: props.setRefresh,
                        };

                        return (
                          <div className="grid grid-cols-5 items-center text-xl font-semibold border-b py-4">
                            <div className="col-span-1">{item.date}</div>
                            <div className="col-span-2">
                              {moment(item.start_time, "HH:mm:ss").format(
                                "hh:mm a"
                              )}{" "}
                              -{" "}
                              {moment(item.end_time, "HH:mm:ss").format(
                                "hh:mm a"
                              )}
                            </div>
                            <div className="col-span-2">
                              <div className="flex w-full gap-x-3">
                                {["Mark as done", "Cancel"].map(
                                  (button, idx) => (
                                    <NestedModal
                                      desc={button}
                                      data={data}
                                      key={idx}
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        )}
      </div>
    </div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
