import React from "react";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../axios";
const FreeSlot = ({ onClose }) => {
  const navigate = useNavigate();
  const { justFindFreeSlot, saveTeamAndFindFreeSlot, setNewTeamName } =
    FindFreeSlot();
  var regex = /([0-9]{2})([A-Za-z]{3})([0-9]{4})/;
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  const [saveTeam, setSaveTeam] = useState(true);
  const [teamName, setTeamName] = useState("");
  const [currentVaue, setCurrentValue] = useState("");
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [userDetails, setUserDetails] = useState({});
  if (!tags.includes(userDetails.reg_no) && userDetails.reg_no)
    tags.push(userDetails.reg_no);

  useEffect(() => {
    axios
      .post("user/getUserByEmail", {
        email: localUser.email,
      })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("User Details: ", userDetails);
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

  async function handleKeyDown(e) {
    if (e.key !== "Enter" && e.key !== ",") return;
    else {
      e.preventDefault();
      setCurrentValue("");
      setTagNote("Click a tag to remove.");
      let value = e.target.value;
      if (value[value.length - 1] === ",") {
        value = value.slice(0, -1);

        tags.push(value);
        setTags(tags);
      }
      if (value.includes(",")) {
        const invalid = [];
        const duplicates = [];
        let tag = value.split(",");
        console.log(tag);
        tag = new Set(tag);
        const newTags = [];
        [...tag].forEach(async (element) => {
          if (tags.includes(element)) {
            duplicates.push(element);
          } else if (regex.test(element)) {
            newTags.push(element);
          } else {
            invalid.push(element);
            return;
          }
        });
        const notFound = [];
        newTags.forEach(async (element) => {
          tags.push(element);
          setTags(tags);
        });
        if (notFound.length > 0) {
          const notFoundTags = notFound.join(", ");
          toast.error(notFoundTags + " not found!");
        }
        if (invalid.length > 0) {
          const invalidTags = invalid.join(", ");
          toast.error(
            <ToastMessageContainer
              error="Invalid tag(s) found!"
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
            />,
            {
              pauseOnFocusLoss: true,
              pauseOnHover: true,
            }
          );
        }

        console.log(tags);
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
        // if (await userFound(value)) {
        //   setTags([...tags, value.toUpperCase()]);
        // }
        // if (!(await userFound(value))) {
        //   // toast.error("User not found!");
        // }
        // (await userFound(value)) && setTags([...tags, value.toUpperCase()]);
        setTags([...tags, value.toUpperCase()]);
        // e.target.value = "";
      }
    }
  }

  function removeTag(index) {
    if (tags[index] === userDetails.reg_no) {
      toast.error("You cannot remove yourself!");
      return;
    }
    setTags(tags.filter((el, i) => i !== index));
    if (tags.length === 0) setTagNote("Add a tag!");
  }
  const removeAll = () => {
    setTags([]);
    setTagNote("Add a tag");
  };

  //this is what you need in backend @Saarim
  const submitFreeSlot = async () => {
    if (tags.length < 2) {
      toast.error("Please add at least 2 tags!");
      return;
    }
    if (saveTeam && teamName === "") {
      toast.error("Please enter a team name!");
      return;
    }
    if (saveTeam) {
      setNewTeamName(teamName);
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
    onClose();
  };
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const Confirm = ({ setConfirmationOpen }) => {
    const handleYes = () => {
      setConfirmationOpen(false);
      onClose();
    };
    const markAsDone =
      "flex-1 items-center w-fit h-fit py-2 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-sm hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 border-myBlue";
    const cancel =
      "flex-1 rounded  px-4 items-center py-2 text-black underline border-[1px] border-gray-400 rounded-sm";
    return (
      <div className="flex rounded-md justify-evenly items-center mt-4 gap-x-4 absolute z-[2000] w-full h-full bg-white/80">
        <div className="flex flex-col rounded-md px-4 lg:px-0 lg:w-1/2 py-4 justify-evenly items-center bg-white border drop-shadow-md">
          <p className="text-lg font-semibold text-center  ">
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
    <div className="relative lg:text-xl">
      {confirmationOpen && (
        <Confirm setConfirmationOpen={setConfirmationOpen} />
      )}
      {/* <button
        className="text-white absolute -top-7 right-5 p-2"
        onClick={onClose}
      >
        <AiOutlineClose size={16} color="white" />
      </button> */}
      <div className="flex justify-center flex-col gap-y-3  rounded-md p-3">
        {/* <PageHeading title="Check Free Slot" /> */}
        <div>
          <h1 className="font-semibold lg:text-[38px] text-center py-3">
            Check Free Slot
          </h1>
          <div className="flex  flex-col gap-y-3 justify-center items-start py-6">
            <div className="leading-8">
              <ul>
                {[
                  `<span class="text-green-700 font-black text-xl">#</span> Enter the registration number of the members`,
                  `<span class="font-black text-xl">⏎</span> Press Enter to separate tags.`,
                  "💡 Tip: Paste a string having registration numbers separated by commas to add all at once.",
                ].map((data, index) => (
                  <li
                    className="flex items-center gap-x-1"
                    dangerouslySetInnerHTML={{ __html: data }}
                    key={index}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="self-center">{tagNote}</div>
            <div className="flex flex-col items-center w-full rounded-md justify-center gap-2 border self-center">
              <div className="flex flex-wrap w-full lg:flex-row overflow-x-auto lg:overflow-hidden max-h-[200px] lg:h-full items-center justify-center gap-3 py-4">
                {tags.map((tag, index) => (
                  <button
                    onClick={() => removeTag(index)}
                    className="p-2 bg-myBlue text-white border border-myBlue rounded-md hover:bg-red-400 hover:line-through h hover:scale-110"
                    key={index}
                  >
                    <span className="text">{tag}</span>
                  </button>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  value={currentVaue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  className="text-center border rounded-md !py-2 "
                  placeholder="21BCE1234"
                />
              </div>
            </div>
          </div>
          <button onClick={removeAll}>Clear all</button>
        </div>
        <div className="flex lg:flex-row flex-col gap-3  lg:items-center mb-4">
          <div
            className="flex  gap-x-3 items-center font-bold cursor-pointer"
            onClick={() => {
              setSaveTeam(!saveTeam);
            }}
          >
            {saveTeam ? <CheckBox /> : <CheckBoxOutlineBlank />}
            Save this team
          </div>
          <div className="lg:self-center">
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
        <div className="self-center justify-between flex w-3/4 lg:w-2/4 gap-x-3">
          <div className="w-full">
            <button
              type="submit"
              onClick={submitFreeSlot}
              className="text-white w-full bg-myBlue font-medium rounded-lg text-sm  py-2.5 text-center border-2 border-myBlue"
            >
              Find Free Slot!
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => {
                setConfirmationOpen(!confirmationOpen);
              }}
              type="cancel"
              className="flex-1 h-full w-full items-center  text-black underline border-[1px] border-gray-400 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSlot;
