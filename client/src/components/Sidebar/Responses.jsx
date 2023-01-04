import PageHeading from "../Headings/PageHeading";
import { RiFileCopyLine } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { GrClose } from "react-icons/gr";
import axios from "../../axios";
import { useState, useEffect } from "react";
const Responses = ({ onClose }) => {
  const { link, setLinkTeam, getLink, setIsLoading } = FindFreeSlot();
  const [newTeamName, setNewTeamName] = useState(null);
  const getLinkHandler = async () => {
    try {
      localStorage.setItem("team_name", newTeamName);
      // setLinkTeam(newTeamName);
      setIsLoading(true);
      await getLink();
      setIsLoading(false);
      // localStorage.removeItem("team_name");
    } catch (err) {
      console.log(err);
    }
  };
  const showCopiedToast = () => {
    toast.success("Link copied successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      icon: <RiFileCopyLine className="-scale-x-100" size={25} color="green" />,
    });
  };
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

  return (
    <div className="relative rounded-md">
      <div>
        <PageHeading title="Responses" />
      </div>
      <div className=" lg:mx-16">
        <div className="w-full lg:w-2/4">
          <div>
            <p>
              A new team will be made by this name, to which new members can
              join using the link further produced.
            </p>
            <h1 className="text-[#9C9C9C] text-2xl">Enter team name</h1>
            <div className="flex flex-col lg:grid grid-cols-12 gap-4 rounded-md border-2 border-gray-200 p-2 my-2">
              <div className="col-span-9 flex items-center">
                <input
                  value={newTeamName}
                  className="border w-full h-full p-2"
                  onChange={(e) => setNewTeamName(e.target.value)}
                />
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
                  link && navigator.clipboard.writeText(link);
                  link && showCopiedToast();
                  !link && toast.error("No link to copy!");
                }}
              >
                <RiFileCopyLine className="-scale-x-100" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-x-5 justify-center items-center ">
          <button
            onClick={onClose}
            className="border-2 border-black rounded-md col-span-1 underline decoration-dotted px-4 py-2 my-5"
          >
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
