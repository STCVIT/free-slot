import { ReactComponent as LocationIcon } from "../assets/Location-Icon.svg";
const MeetingCardTemplate = (props) => {
  const MeetingCardsArray = props.list.map((dataItem) => {
    return (
      <div className="py-4 col-span-1">
        <div className="p-6 max-w-sm border  bg-white rounded-lg  shadow ">
          <h5 className="mb-2 p-2 text-2xl font-bold tracking-tight text-black">
            {dataItem.time}
          </h5>
          <div className="flex">
            <p className="mb-3 p-2 font-normal ">
              <LocationIcon />
            </p>
            <p className="mb-3 p-2 font-normal text-blueTheme ">
              {dataItem.place}
            </p>
          </div>
          <p className="mb-3 p-2 font-normal text-black ">
            Created by {dataItem.by}
          </p>
          <p className="mb-3 p-2 font-normal text-gray-400 ">
            {dataItem.members}
          </p>
          <div className="flex">
            <button className="flex-1 items-center py-3 px-5 text-sm font-medium text-center text-white bg-blueTheme rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Mark as done
            </button>
            <button className="flex-1 rounded px-4 items-center py-2 text-black hover:underline bg-white ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-3 gap-x-4 mx-2">{MeetingCardsArray}</div>
  );
  // return <div>{trial}</div>;
};

export default MeetingCardTemplate;
