import React from "react";
import Circle from "../assets/circle.svg";
import Cross from "../assets/Cross.svg";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FindFreeSlot } from "../context/FreeSlotContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const FreeSlotAdd = () => {
  const { saveTeamAndFindFreeSlot, justFindFreeSlot } = FindFreeSlot()
  const navigate = useNavigate()
  var regex = /([0-9]{2})([A-Za-z]{3})([0-9]{4})/;
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  const [saveTeam, setSaveTeam] = useState(true);
  const [teamName, setTeamName] = useState("");
  const ToastMessageContainer = (props) => {
    return (
      <div>
        <h1 className="mb-2">{props.error}</h1>
        {props.type && <h3>{props.type}:</h3>}
        {props.description && <p>{props.description}</p>}
      </div>
    );
  };
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    else {
      setTagNote("Click a tag to remove.");
      const value = e.target.value;
      if (value.includes(",")) {
        const invalid = [];
        e.target.value = "";
        let newTag = [];
        let tag = value.split(",");
        if (new Set(tag).size < tag.length) {
          toast.error(
            <ToastMessageContainer
              error="Duplicate tags found!"
              description="Duplicate tags inserted only once."
            />
          );
        }
        tag = new Set(tag);
        tag.forEach((element) => {
          if (regex.test(element)) {
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
              error="Invalid tags found!"
              type="Invalid tags"
              description={invalidTags}
            />
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
              type="Invalid tag"
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
    if(saveTeam){
     await saveTeamAndFindFreeSlot(teamName, tags);
    }
    else {
      await justFindFreeSlot(tags);
    }
    navigate('/freeslot')
    console.log(tags);
    console.log(saveTeam);
    console.log(teamName);
    setTags([]);
    setTeamName("");
  };
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute ${
          confirmationOpen ? "flex" : "hidden"
        } items-center bg-gray-800/50 backdrop-blur  h-full w-full justify-center z-50`}
      >
        <div className="bg-white rounded-md flex flex-col w-3/4">
          <div className="bg-myBlue rounded-t-md border-b-2 py-2 text-white text-center">
            Are you Sure?
          </div>
          <div className="flex justify-evenly py-5">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-y-3 drop-shadow-xl bg-white rounded-md p-3 md:col-span-6">
        <h1 className="text-center font-bold text-2xl">Check Free Slot</h1>
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
              <div className="flex flex-wrap w-full md:flex-row overflow-x-scroll lg:overflow-hidden max-h-[200px] md:h-full items-center justify-center gap-3 py-4">
                {tags.map((tag, index) => (
                  <button
                    onClick={() => removeTag(index)}
                    className="p-2 bg-[#CFDBE6] rounded-md hover:text-red-400 hover:line-through h hover:scale-110"
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
              <h1>Team Name:</h1>
              <input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
          </div>
          <button
            className="underline decoration-dotted underline-offset-2 font-semibold"
            onClick={removeAll}
          >
            Clear all
          </button>
        </div>
        <div
          className="flex gap-x-3 items-center font-bold cursor-pointer"
          onClick={() => {
            setSaveTeam(!saveTeam);
          }}
        >
          {saveTeam ? <CheckBox /> : <CheckBoxOutlineBlank />}
          Save this team
        </div>
        <div className="self-center flex w-3/4 md:w-2/4 justify-between gap-x-3">
          <button
            onClick={() => {
              setConfirmationOpen(!confirmationOpen);
            }}
            type="cancel"
            class="text-black bg-white border-none font-medium rounded-lg underline-offset-2 text-sm w-60 outline text-center underline decoration-dotted"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={submitFreeSlot}
            class="text-white bg-blue-700 font-medium rounded-lg text-sm w-60 py-2.5 text-center dark:bg-blue-600 "
          >
            Find Free Slot!
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

// import '../index.css    '
const FreeSlot = ({ setModalOnNew, setChoiceNew }) => {
  const handleOKClickChoose = () => {
    setChoiceNew(true);
    setModalOnNew(false);
  };
  const handleCancelClickChoose = () => {
    setChoiceNew(false);
    setModalOnNew(false);
    console.log("cancel");
  };

  return (
    <div className="modal-container bg-zinc-200/60  opacity-100 fixed inset-0 z-10000 ">
      <div className="modal flex h-screen justify-center items-center opacity-100">
        <div className="flex-col items-center bg-white shadow-lg border rounded-xl ">
          <header className="p-4 bg-myBlue text-white relative flex items-center rounded-t-xl">
            <img
              src={Cross}
              onClick={handleCancelClickChoose}
              alt=""
              className="cursor-pointer grid col-span-2 ml-5 mt-3 absolute top-[20%]"
            ></img>
            <h1 className="bg-myBlue text-white col-span-4 text-xl w-full text-center">
              Create Team
            </h1>
          </header>
          <FreeSlotAdd />
        </div>
      </div>
    </div>
  );
};

export default FreeSlot;
