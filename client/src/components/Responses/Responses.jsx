import ResponseData from "./ResponsesData";
import { FileCopy } from "@mui/icons-material";
import { RiFileCopyLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiTimeFill,
} from "react-icons/ri";
import { SwitchRight } from "@mui/icons-material";
const statusArray = ResponseData.map((x) => {
  let statusIcon;
  switch (x.uploadStatus) {
    case "Uploaded":
      statusIcon = <RiCheckboxCircleFill size={25} color="green" />;
      break;
    case "Waiting":
      statusIcon = <RiTimeFill size={25} color="orange" />;
      break;
    case "Error":
      statusIcon = <RiErrorWarningFill size={25} color="red" />;
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-col gap-y-2 md:grid grid-cols-3 w-full text-left even:bg-gray-150 border-black odd:bg-white py-3 px-6 rounded-md bg-[#F2F2F9]">
      <h1 className="col-span-1">{x.regNo}</h1>
      <h1 className="col-span-1">{x.userName}</h1>
      <h1 className="col-span-1 flex items-center gap-x-3">
        {statusIcon}
        {x.uploadStatus}
      </h1>
    </div>
  );
});
const Responses = () => {
  const showCopiedToast = () => {
    toast.success("Link copied successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      icon: <RiFileCopyLine size={25} color="green" />,
    });
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-center my-2 text-2xl">Responses</h1>
      </div>
      <div className="ml-[15vw]">
        <h1>Share this link with your peers</h1>
        <div className="flex items-center w-1/2 justify-between rounded-md border-2 border-gray-200 p-2">
          <h1 className="overflow-hidden col-span-10 whitespace-nowrap text-ellipsis">
            Link comes hereLink comes hereLink comes hereLink comes hereLink
            comes here Link comes hereLink comes hereLink comes here
          </h1>
          <button
            className="col-span-2 rounded-md p-2"
            onClick={() => {
              showCopiedToast();
              navigator.clipboard.writeText("Link comes here");
            }}
          >
            <RiFileCopyLine size={24} />
          </button>
          <ToastContainer />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center mt-5 items-center drop-shadow">
        <div className="hidden items-center md:grid grid-cols-3 md:w-3/4 py-3 px-6 rounded-md text-gray-400">
          <h1 className="col-span-1">Registration Number</h1>
          <h1 className="col-span-1">Name</h1>
          <h1 className="col-span-1">Timetable</h1>
        </div>
        <div className="flex text-left flex-col gap-y-2 w-full px-2 md:px-0 md:w-3/4 mt-5">
          {statusArray}
        </div>
        <div className="flex gap-x-5 items-center">
          <button className="col-span-1 underline decoration-dotted px-4 py-2 my-5">
            Cancel
          </button>
          <button className="col-span-1 bg-blue-600 rounded-md px-4 py-2 text-white">
            Find Slot!
          </button>
        </div>
      </div>
    </>
  );
};

export default Responses;
