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
          <div className="flex">
            <NestedModal desc="Mark as done" data={data} />
            <NestedModal desc="Cancel" data={data} />
            {/* <button
              onClick={() => deleteCard(idx, props)}
              className="flex-1 items-center py-3 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Mark as done
            </button>
            <button
              onClick={() => deleteCard(idx, props)}
              className="flex-1 rounded px-4 items-center py-2 text-black hover:underline bg-white "
            >
              Cancel
            </button> */}
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
