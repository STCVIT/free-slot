import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import NestedModal from "./meetingModal";
import { GoKebabVertical } from "react-icons/go";
const MeetingInfoModal = (props) => {
  // return <div>asd</div>;
  return (
    <div
      className="drop-shadow absolute z-[1000] top-10  md:right-6 hidden p-4 mb-4 rounded-md bg-white w-[80vw]  md:w-[25rem]"
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
            {props.members.length < 45
              ? props.members
              : props.members.slice(0, 45) + "..."}
          </span>
        </p>
      </div>
    </div>
  );
};

const MeetingCardTemplate = (props) => {
  const MeetingCardsArray = props.list.map((dataItem) => {
    const handleOpen = (id) => {
      const modal = document.getElementById("meetingInfoCard" + id);
      modal.classList.toggle("hidden");
    };

    const data = {
      idx: dataItem.id,
      tab: props.tab,
      refresh: props.refresh,
    };
    return (
      <div
        className="w-3/4 p-6 col-span-1  border relative  bg-white rounded-lg my-4 shadow "
        id={dataItem.id}
      >
        {/* {meetingInfoModalOpen( */}
        <div className="relative">
          <MeetingInfoModal
            members={dataItem.members}
            id={dataItem.id}
            desc={dataItem.desc}
          />
        </div>
        {/* )} */}
        <div className="absolute top-5 right-10 cursor-pointer">
          <GoKebabVertical size={25} onClick={() => handleOpen(dataItem.id)} />
        </div>
        <p className="px-2 text-2xl font-bold  text-black">{dataItem.time}</p>
        <div className="flex items-center gap-x-4 my-4 font-semibold text-myBlue">
          <IoLocationSharp size={20} />
          {dataItem.place}
        </div>
        <p className="font-normal flex flex-col gap-y-1 text-black ">
          <span className="font-semibold">Created by {dataItem.by}</span>
          <span>{dataItem.day}</span>
          <span>{dataItem.group}</span>
        </p>
        <div className="flex w-full gap-x-4">
          {["Mark as done", "Cancel"].map((button) => (
            <NestedModal desc={button} data={data} />
          ))}
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col w-full items-center justify-center md:grid grid-cols-3 gap-x-4 md:mx-2">
      {MeetingCardsArray}
    </div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
