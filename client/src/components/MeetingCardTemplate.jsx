import axios from "axios";
import { ReactComponent as LocationIcon } from "../assets/Location-Icon.svg";
import NestedModal from "./meetingModal";
// const deleteCard = async (idx, props) => {
//   await axios.delete("http://localhost:6969/", {
//     data: {
//       id: idx,
//       tab: props.tab,
//     },
//   });
//   props.refresh.set(!props.refresh.refresh);
// };

const MeetingCardTemplate = (props) => {
  const MeetingCardsArray = props.list.map((dataItem, idx) => {
    const data = {
      idx: idx,
      tab: props.tab,
      refresh: props.refresh,
    };
    return (
      <div className="py-4 col-span-1" id={idx}>
        <div className="p-6 max-w-sm border  bg-white rounded-lg  shadow ">
          <h5 className="mb-2 p-2 text-2xl font-bold tracking-tight text-black">
            {dataItem.time}
          </h5>
          <div className="flex">
            <p className="mb-3 p-2 font-normal ">
              <LocationIcon />
            </p>
            <p className="mb-3 p-2 font-normal text-myBlue ">
              {dataItem.place}
            </p>
          </div>
          <p className="mb-3 p-2 font-normal text-black ">
            Created by {dataItem.by}
          </p>
          <p>Day: {dataItem.day}</p>
          <p className="mb-3 p-2 font-normal text-gray-400 ">
            {dataItem.members}
          </p>
          <div className="flex w-full gap-x-4">
            <NestedModal desc="Mark as done" data={data} />
            <NestedModal desc="Cancel" data={data} />
          </div>
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
