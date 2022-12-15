import { IoLocationSharp } from "react-icons/io5";
import NestedModal from "./meetingModal";
import { GoKebabVertical } from "react-icons/go";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import moment from "moment";
const MeetingInfoModal = (props) => {
  // return <div>asd</div>;

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
            ASD
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
    const handleOpen = (id) => {
      const modal = document.getElementById("meetingInfoCard" + id);
      modal.classList.toggle("hidden");
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
        className="w-3/4 p-6 col-span-1  border relative  bg-white rounded-lg my-4 shadow "
        id={dataItem.meet_id}
      >
        {/* {meetingInfoModalOpen( */}
        <div className="relative">
          <MeetingInfoModal
            // members={dataItem.members}
            members={"asd"}
            id={dataItem.meet_id}
            desc={dataItem.description}
          />
        </div>
        {/* )} */}
        <div className="absolute top-5 right-10 cursor-pointer">
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
        <p className="px-2 text-2xl font-bold  text-black">
          {dataItem.start_time.slice(0, -3)} - {dataItem.end_time.slice(0, -3)}
        </p>
        <div className="flex items-center gap-x-4 my-4 font-semibold text-myBlue">
          <IoLocationSharp size={20} />
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
          <div className="flex w-full gap-x-4">
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
    <div className="flex flex-col w-full items-center justify-center lg:grid grid-cols-3 gap-x-4 lg:mx-2">
      {MeetingCardsArray}
    </div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
