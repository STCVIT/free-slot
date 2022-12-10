import React from "react";
import { GrClose } from "react-icons/gr";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageHeading from "../Headings/PageHeading";
const FreeSlot = ({ onClose }) => {
  const navigate = useNavigate();
  const { justFindFreeSlot, saveTeamAndFindFreeSlot } = FindFreeSlot();
  var regex = /([0-9]{2})([A-Za-z]{3})([0-9]{4})/;
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  const [saveTeam, setSaveTeam] = useState(true);
  const [teamName, setTeamName] = useState("");
  const ToastMessageContainer = (props) => {
    return (
      <div>
        <p>
          {props.error}
          <br />
          {props.description && props.description}
        </p>
      </div>
    );
  };
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    else {
      setTagNote("Click a tag to remove.");
      let value = e.target.value;
      if (value[value.length - 1] === ",") {
        value = value.slice(0, -1);
      }
      if (value.includes(",")) {
        const invalid = [];
        const duplicates = [];
        e.target.value = "";
        let newTag = [];
        let tag = value.split(",");
        // if (new Set(tag).size < tag.length) {
        //   toast.error(
        //     <ToastMessageContainer
        //       error="Duplicate tag(s) found!"
        //       description="Duplicate tags inserted only once."
        //     />
        //   );
        // }
        tag = new Set(tag);
        tag.forEach((element) => {
          if (tags.includes(element)) {
            duplicates.push(element);
          } else if (regex.test(element)) {
            newTag.push(element);
          } else {
            invalid.push(element);
            return;
          }
        });
        if (invalid.length > 0) {
          const invalidTags = invalid.join(", ");
          toast.error(
            <ToastMessageContainer
              error="Invalid tag(s) found!"
              // type="Invalid tag(s)"
              description={invalidTags}
            />,
            {
              pauseOnFocusLoss: true,
              pauseOnHover: true,
            }
          );
        }
        if (duplicates.length > 0) {
          const duplicateTags = duplicates.join(", ");
          toast.error(
            <ToastMessageContainer
              error="Duplicate tag(s) found!"
              description={duplicateTags}
              // description={duplicateTags}
            />,
            {
              pauseOnFocusLoss: true,
              pauseOnHover: true,
            }
          );
        }

        setTags([...tags, ...newTag]);
      } else {
        if (!value.trim()) return;
        else if (!regex.test(value) || value.length > 9) {
          setTagNote("Please enter a valid tag.");
          toast.error(
            <ToastMessageContainer
              error="Invalid tag found!"
              // type="Invalid tag"
              description={value}
            />
          );
          e.target.value = "";
          return;
        } else if (tags.includes(value.toUpperCase())) {
          toast.error(
            <ToastMessageContainer
              error={`${value.toUpperCase()} exists already!`}
            />,
            {
              position: toast.POSITION.TOP_RIGHT,
              // icon: <RiFileCopyLine size={25} color="green" />,
            }
          );
          e.target.value = "";
          return;
        }
        setTags([...tags, value.toUpperCase()]);
        e.target.value = "";
      }
    }
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
    if (tags.length === 0) setTagNote("Add a tag!");
  }
  const removeAll = () => {
    setTags([]);
    setTagNote("Add a tag");
  };

  //this is what you need in backend @Saarim
  const submitFreeSlot = async () => {
    if (tags.length === 0) {
      toast.error("Please add a tag!");
      return;
    }
    if (saveTeam && teamName === "") {
      toast.error("Please enter a team name!");
      return;
    }
    if (saveTeam) {
      await saveTeamAndFindFreeSlot(teamName, tags);
    } else {
      await justFindFreeSlot(tags);
    }
    navigate("/freeslot");
    console.log(tags);
    console.log(saveTeam);
    console.log(teamName);
    setTags([]);
    setTeamName("");
    toast.success("Free slot added successfully!");
    onClose();
  };
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const Confirm = ({ setConfirmationOpen }) => {
    const handleYes = () => {
      toast.success("Submission cancelled!");
      setConfirmationOpen(false);
      onClose();
    };
    const markAsDone =
      "flex-1 items-center w-fit h-fit py-2 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 border-myBlue";
    const cancel =
      "flex-1 rounded px-4 items-center w-fit h-fit py-2 text-black underline bg-white border-2 border-black rounded-lg";
    return (
      <div className="flex rounded-md justify-evenly items-center mt-4 gap-x-4 absolute z-[2000] w-full h-full bg-white/80">
        <div className="flex flex-col rounded-md px-4 md:px-0 md:w-1/2 py-4 justify-evenly items-center bg-gray-200">
          <p className="text-lg font-semibold text-center  border-b-2 border-black ">
            Are you sure you want to cancel?
          </p>
          <div className="flex w-1/2 items-center justify-between gap-x-4">
            <button className={markAsDone} onClick={handleYes}>
              Yes
            </button>
            <button
              className={cancel}
              onClick={() => setConfirmationOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="relative">
      {confirmationOpen && (
        <Confirm setConfirmationOpen={setConfirmationOpen} />
      )}
      <button className="absolute top-5 right-5" onClick={onClose}>
        <GrClose size={16} />
      </button>
      <div className="flex justify-center flex-col gap-y-3  rounded-md p-3">
        <PageHeading title="Check Free Slot" />
        <div>
          <div className="flex flex-col gap-y-3 justify-center items-start px-2 py-6">
            <div>
              Enter the reg no. or name of the members:
              <br />
              <i>Press Enter to seperate tags.</i>
              <br />
              <b>
                *Note: Paste a string having registration numbers separated by
                commas to add all at once.
              </b>
            </div>
            <div className="self-center">{tagNote}</div>
            <div className="flex flex-col items-center w-full rounded-md justify-center gap-2 border self-center">
              <div className="flex flex-wrap w-full md:flex-row overflow-x-auto lg:overflow-hidden max-h-[200px] md:h-full items-center justify-center gap-3 py-4">
                {tags.map((tag, index) => (
                  <button
                    onClick={() => removeTag(index)}
                    className="p-2 bg-myBlue text-white rounded-md hover:bg-red-400 hover:line-through h hover:scale-110"
                    key={index}
                  >
                    <span className="text">{tag}</span>
                  </button>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="text-center border rounded-md py-2"
                  placeholder="21XXX0000"
                />
              </div>
            </div>
          </div>
          <button
            className="underline decoration-dotted underline-offset-2 font-semibold"
            onClick={removeAll}
          >
            Clear all
          </button>
        </div>
        <div className="flex md:flex-row flex-col gap-3  md:items-center mb-4">
          <div
            className="flex  gap-x-3 items-center font-bold cursor-pointer"
            onClick={() => {
              setSaveTeam(!saveTeam);
            }}
          >
            {saveTeam ? <CheckBox /> : <CheckBoxOutlineBlank />}
            Save this team
          </div>
          <div className="md:self-center">
            {saveTeam && (
              <input
                className="px-2 py-2 border-2 rounded-md w-full"
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="self-center flex w-3/4 md:w-2/4 justify-between gap-x-3">
          <button
            type="submit"
            onClick={submitFreeSlot}
            class="text-white bg-myBlue font-medium rounded-lg text-sm w-60 py-2.5 text-center border-2 border-myBlue"
          >
            Find Free Slot!
          </button>
          <button
            onClick={() => {
              setConfirmationOpen(!confirmationOpen);
            }}
            type="cancel"
            class="text-black bg-white border-none font-medium rounded-lg underline-offset-2 text-sm w-60 outline text-center underline decoration-dotted"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeSlot;
