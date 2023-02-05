import moment from "moment";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import MainNavbar from "../components/Menus/MainNavbar";
import PageHeading from "../components/Headings/PageHeading";
import { FindFreeSlot } from "../context/FreeSlotContext";
import { useEffect } from "react";
import background from "./schedule.png";

import axios from "../axios";
const Schedule = () => {
  document.title = "Schedule";
  const { setIsLoading } = FindFreeSlot();
  const [isModified, setIsModified] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [overlappingTimes, setOverlappingTimes] = useState([]);
  const [timeTable, setTimeTable] = useState([
    [{ start_time: "", end_time: "", type: "" }],
  ]);
  const [showModify, setShowModify] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState(null);
  const [availableCard, setAvailableCard] = useState({
    start_time: null,
    end_time: null,
    type: null,
  });
  const [newTask, setNewTask] = useState({
    start_time: null,
    end_time: null,
    type: null,
  });
  const [fetchTimetable, setFetchTimetable] = useState(false);
  const mainClass =
    "px-4 py-2 border-b-4 col-span-1 font-bold cursor-pointer transition-colors duration-300 text-sm ";
  const activeClass = "border-black";
  const inactiveClass = "border-transparent hover:border-gray-200";
  const daysData = ["Mon", "Tue", "Wed", "Thur", "Fri"];
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    try {
      const getUser = async () => {
        setIsLoading(true);
        const userData = await axios.get(
          "user/getUser",
          {
            email: user.email,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setTimeTable(userData.data.timetable);
        console.log(userData.data.timetable);
        setIsLoading(false);
      };
      getUser();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [fetchTimetable]);

  const activateEdit = (idx) => {
    setCurrentlyEditing(idx);
  };

  const editCard = (idx, param, value) => {
    const newTimeTable = [...timeTable];

    newTimeTable[activeTab][idx][param] = value;
    // newTimeTable[activeTab][idx][param] = value !== "" ? value : null;
    setTimeTable(newTimeTable);
  };

  const addTask = () => {
    const newTimeTable = [...timeTable];
    // const overlappingTimes = [];
    if (!newTask.type || !newTask.start_time || !newTask.end_time) {
      toast.error("Please fill all the fields");
      return;
    }
    const beforeTime = moment(newTask.start_time, "HH:mm");
    const afterTime = moment(newTask.end_time, "HH:mm");
    if (beforeTime.isAfter(afterTime)) {
      toast.error("Start time cannot be after end time");
      return;
    } else if (beforeTime.isSame(afterTime)) {
      toast.error("Start time cannot be same as end time");
      return;
    }
    newTimeTable[activeTab].forEach((card, index) => {
      const cardBeforeTime = moment(card.start_time, "HH:mm");
      const cardAfterTime = moment(card.end_time, "HH:mm");
      console.log(
        beforeTime.isBetween(cardBeforeTime, cardAfterTime),
        afterTime.isBetween(cardBeforeTime, cardAfterTime)
      );
      if (
        beforeTime.isBetween(cardBeforeTime, cardAfterTime) ||
        afterTime.isBetween(cardBeforeTime, cardAfterTime)
      ) {
        setOverlappingTimes([
          cardBeforeTime.format("hh:mm a"),
          cardAfterTime.format("hh:mm a"),
        ]);
      }
    });

    if (overlappingTimes.length > 0) {
      toast.error(
        <div>
          Overlapping times: <br />
          {overlappingTimes.join(" - ")}
        </div>
      );
      return;
    }
    newTimeTable[activeTab].push(newTask);
    setIsModified(true);
    setTimeTable(newTimeTable);
    setNewTask({ start_time: "", end_time: "", type: "" });
  };
  const handleAcceptCardChange = (idx) => {
    availableCard.type && editCard(idx, "type", availableCard.type);
    availableCard.start_time &&
      editCard(idx, "start_time", availableCard.start_time);
    availableCard.end_time && editCard(idx, "end_time", availableCard.end_time);
    setNewTask({ start_time: "", end_time: "", type: "" });
    setAvailableCard({ start_time: "", end_time: "", type: "" });
    setIsModified(true);
    setCurrentlyEditing(null);
  };
  const handleCancelCardChange = (idx) => {
    setCurrentlyEditing(null);
  };
  const handleDeleteCard = (idx) => {
    const newTimeTable = [...timeTable];
    newTimeTable[activeTab].splice(idx, 1);
    setTimeTable(newTimeTable);
  };
  const handleModifyClick = async () => {
    try {
      !showModify && setShowModify(true);
      if (!showModify) {
        setShowModify(true);
        return;
      }
      setShowModify(false);

      await axios.patch(
        "user/updateUser",
        {
          email: user.email,
          timetable: timeTable,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFetchTimetable(!fetchTimetable);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MainNavbar active="schedule" />
      <div>
        <PageHeading title="Schedule" />
        <div className="flex justify-center lg:!text-lg !text-sm pb-pageEnd">
          <div className="rounded-lg  px-10 flex flex-col gap-y-5 w-fit ">
            <button
              onClick={() => handleModifyClick()}
              className="hidden lg:block w-max  self-end  font-extralight px-8 py-3 m-4 rounded-full bg-primary text-white "
            >
              {showModify ? "Done" : "Modify"}
            </button>
            <button
              onClick={() => handleModifyClick()}
              className="lg:hidden rounded-full p-2 drop-shadow-lg bg-primary fixed z-50 bottom-[10vh] right-[10vw]"
            >
              {showModify ? (
                <BsCheck color="white" size={36} />
              ) : (
                <MdEdit color="white" size={36} />
              )}
            </button>
            <div>
              <div className="flex gap-x-3 lg:w-full justify-between border-b-2 border-black ">
                {daysData?.map((day, idx) => (
                  <button
                    key={idx}
                    className={`${mainClass} lg:!text-lg !text-sm ${
                      activeTab === idx ? activeClass : inactiveClass
                    }`}
                    onClick={() => {
                      setCurrentlyEditing(null);
                      setActiveTab(idx);
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-transparent " id="myTabContent">
              {timeTable[activeTab]?.map((x, idx) => (
                <div
                  key={idx}
                  className={`py-4  px-8 rounded-lg bg-white my-4 flex justify-between  font-semibold `}
                >
                  {currentlyEditing !== idx && (
                    <div className="col-span-3 ">
                      {x.type &&
                        x.type !== "" &&
                        x.type[0].toUpperCase() + x.type.slice(1)}
                    </div>
                  )}
                  {currentlyEditing === idx && (
                    <input
                      className="col-span-3 "
                      placeholder={
                        x.type !== "" &&
                        x.type[0].toUpperCase() + x.type.slice(1)
                      }
                      type="text"
                      value={availableCard.type}
                      onChange={(e) => {
                        // editCard(idx, "type", e.target.value);
                        setAvailableCard({
                          ...availableCard,
                          type: e.target.value,
                        });
                      }}
                    />
                  )}

                  <div
                    className={`col-span-6 flex gap-x-2 items-center text-center 
                    
                    `}
                  >
                    {/* {currentlyEditing !== idx && <div>{x.start_time}</div>} */}
                    {currentlyEditing !== idx && (
                      <div>
                        {moment(x.start_time, "HH:mm:ss").format("hh:mm a")}
                      </div>
                    )}
                    {currentlyEditing === idx && (
                      <input
                        value={availableCard.start_time}
                        className="col-span-1"
                        placeholder={x.start_time}
                        type="time"
                        onChange={(e) => {
                          // editCard(idx, "start_time", e.target.value);
                          setAvailableCard({
                            ...availableCard,
                            start_time: e.target.value,
                          });
                        }}
                      />
                    )}
                    <div>-</div>
                    {/* {currentlyEditing !== idx && <div>{x.end_time}</div>} */}
                    {currentlyEditing !== idx && (
                      <div>
                        {moment(x.end_time, "HH:mm:ss").format("hh:mm a")}
                      </div>
                    )}
                    {currentlyEditing === idx && (
                      <input
                        value={availableCard.end_time}
                        className="col-span-1"
                        placeholder={x.end_time}
                        type="time"
                        onChange={(e) => {
                          // editCard(idx, "end_time", e.target.value);
                          setAvailableCard({
                            ...availableCard,
                            end_time: e.target.value,
                          });
                        }}
                      />
                    )}
                  </div>

                  {showModify && (
                    <div className="col-span-3">
                      {currentlyEditing !== idx && (
                        <div className={`flex gap-x-6 justify-center`}>
                          <button onClick={() => activateEdit(idx)}>
                            <MdEdit />
                          </button>
                          <button onClick={() => handleDeleteCard(idx)}>
                            <FaTrash />
                          </button>
                        </div>
                      )}
                      {currentlyEditing === idx && (
                        <div className={`flex gap-x-6 justify-center`}>
                          <button onClick={() => handleAcceptCardChange(idx)}>
                            <BsCheck size={30} />
                          </button>
                          <button onClick={() => handleCancelCardChange(idx)}>
                            <GrClose />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {showModify && (
                <div className="p-4 rounded-lg bg-white my-4  flex flex-col gap-y-2">
                  <input
                    className="w-full p-4"
                    placeholder={"Subject"}
                    type="text"
                    value={newTask.type}
                    onChange={(e) => {
                      setNewTask({ ...newTask, type: e.target.value });
                    }}
                  />
                  <div>
                    <input
                      className="w-full p-4"
                      placeholder="From"
                      type="time"
                      value={newTask.start_time}
                      onChange={(e) => {
                        setNewTask({ ...newTask, start_time: e.target.value });
                      }}
                    />
                    <div className="w-full flex items-center justify-center">
                      -
                    </div>
                    <input
                      className="w-full p-4"
                      placeholder="To"
                      value={newTask.end_time}
                      type="time"
                      onChange={(e) => {
                        setNewTask({ ...newTask, end_time: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-full h-max flex justify-center">
                    <button
                      className=" w-full p-4 rounded-md text-white bg-primary"
                      onClick={addTask}
                    >
                      {/* <BsCheck size={30} />
                       */}
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
