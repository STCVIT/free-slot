import axios from "axios";
import { ReactComponent as LocationIcon } from "../assets/Location-Icon.svg";
import NestedModal from "./meetingModal";
import { GoKebabVertical } from "react-icons/go";
const MeetingCardTemplate = (props) => {
  const MeetingCardsArray = props.list.map((dataItem) => {
    const data = {
      idx: dataItem.id,
      tab: props.tab,
      refresh: props.refresh,
    };
    return (
      <div
        className=" p-6 col-span-1 max-w-sm border relative  bg-white rounded-lg my-4 shadow "
        id={dataItem.id}
      >
        <div className="absolute top-5 right-10">
          <GoKebabVertical size={25} />
        </div>
        <p className="px-2 text-2xl font-bold  text-black">{dataItem.time}</p>
        <div className="flex">
          <p className="mb-3 p-2 font-normal ">
            <LocationIcon />
          </p>
          <p className="mb-3 p-2 font-normal text-myBlue ">{dataItem.place}</p>
        </div>
        <p className="mb-3 p-2 font-normal text-black ">
          Created by {dataItem.by}
        </p>
        <p>Day: {dataItem.day}</p>
        <p>ID: {dataItem.id}</p>
        <p className="mb-3 p-2 font-normal text-gray-400 ">{dataItem.group}</p>
        <div className="flex w-full gap-x-4">
          {["Mark as done", "Cancel"].map((button) => (
            <NestedModal desc={button} data={data} />
          ))}
          {/* <NestedModal desc="Mark as done" data={data} />
             <NestedModal desc="Cancel" data={data} /> */}
        </div>
      </div>
    );
  });
  return (
    <div className="md:grid grid-cols-3 gap-x-4 mx-2">{MeetingCardsArray}</div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
