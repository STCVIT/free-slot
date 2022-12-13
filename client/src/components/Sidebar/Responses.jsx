import ResponseData from "./ResponsesData";
import PageHeading from "../Headings/PageHeading";
import { RiFileCopyLine } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { GrClose } from "react-icons/gr";
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiTimeFill,
} from "react-icons/ri";
import axios from "../../axios";
import { useEffect } from "react";

const isLg = window.innerWidth > 768;
const statusArray = ResponseData.map((x) => {
  let statusIcon;
  switch (x.uploadStatus) {
    case "Uploaded":
      statusIcon = <RiCheckboxCircleFill size={19} color="#2BAD75" />;
      break;
    case "Waiting":
      statusIcon = <RiTimeFill size={19} color="#FFA133" />;
      break;
    case "Error":
      statusIcon = <RiErrorWarningFill size={19} color="#CC2F3F" />;
      break;
    default:
      break;
  }
  return (
    <tr className="text-xl md:text-2xl odd:bg-gray-200">
      <td className="p-2">{x.regNo}</td>
      <td className="p-2">{x.userName}</td>
      {isLg && <td className="p-2">{x.email}</td>}
    </tr>
  );
});

const Responses = ({ onClose }) => {
  const { link, linkTeam, setLinkTeam, getLink } = FindFreeSlot();
  const getLinkHandler = async () => {
    await getLink()
  };
  const showCopiedToast = () => {
    toast.success("Link copied successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      icon: <RiFileCopyLine className="-scale-x-100" size={25} color="green" />,
    });
  };
  return (
    <div className="relative rounded-md">
      <button className="absolute top-5 right-5" onClick={onClose}>
        <GrClose size={16} />
      </button>
      <div>
        <PageHeading title="Responses" />
      </div>
      <div className=" md:mx-16">
        <div className="w-full md:w-2/4">
          <div>
            <p>
              A new team will be made by this name, to which new members can
              join using the link further produced.
            </p>
            <h1 className="text-[#9C9C9C] text-2xl">Enter team name</h1>
            <div className="flex flex-col md:grid grid-cols-12 gap-4 rounded-md border-2 border-gray-200 p-2 my-2">
              <div className="col-span-9 flex items-center">
                <input
                  className="border w-full h-full p-2"
                  value={linkTeam}
                  onChange={(e) => setLinkTeam(e.target.value)}
                ></input>
              </div>
              <div className="col-span-3">
                <button
                  onClick={getLinkHandler}
                  className="w-full border-2 border-blue-600 bg-blue-600 rounded-md px-4 py-2 text-white"
                >
                  Get Link
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-[#9C9C9C] text-2xl">
            Share this link with your peers
          </h1>
          <div className="grid grid-cols-12  rounded-md border-2 border-gray-200 p-2 my-2">
            <div className="col-span-11 flex items-center">
              <h1 className="self-center text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                {link}
              </h1>
            </div>
            <div className="col-span-1">
              <button
                className=" rounded-md p-2"
                onClick={() => {
                  showCopiedToast();
                  navigator.clipboard.writeText(link);
                }}
              >
                <RiFileCopyLine className="-scale-x-100" size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-5 items-center drop-shadow overflow-y-auto h-[25vh] border-2 border-gray-200 bg-white px-2 md:px-16 py-4 rounded-md">
          <table
            style={{ borderCollapse: "separate", borderSpacing: "0px 8px" }}
            className="table-auto w-full text-left "
          >
            <thead>
              <tr>
                {(isLg
                  ? ["Reg No.", "Name", "Email"]
                  : ["Reg No.", "Name"]
                ).map((item, idx) => (
                  <th key={idx} className=" text-[#9C9C9C]  font-body">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{statusArray}</tbody>
          </table>
        </div>
        <div className="flex gap-x-5 justify-center items-center ">
          <button className="border-2 border-black rounded-md col-span-1 underline decoration-dotted px-4 py-2 my-5">
            Cancel
          </button>
          <button className="col-span-1 border-2 border-blue-600 bg-blue-600 rounded-md px-4 py-2 text-white">
            Find Slot!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responses;
