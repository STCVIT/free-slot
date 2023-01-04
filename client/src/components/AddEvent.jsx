import React, { useState } from "react";
import axios from "../axios/index";
import PageHeading from "./Headings/PageHeading";
import { toast } from "react-toastify";
import { FindFreeSlot } from "../context/FreeSlotContext";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
//import userModel from "../../../server/src/models/user.model";
import { ReactComponent as Gmeet } from "../assets/Gmeet.svg";
import { ReactComponent as Zoom } from "../assets/Zoom.svg";
import { ReactComponent as Discord } from "../assets/Discord.svg";
import { ReactComponent as Offline } from "../assets/Offline.svg";
const EntryField = ({ label, value, onChange, isDesc }) => {
  return (
    <div>
      <label className="text-sm font-medium text-slate-500">{label}</label>
      <textarea
        rows={isDesc ? "4" : "1"}
        type="text"
        id="description"
        className="focus:border-myBlue focus:!outline-none mt-4 ring-0 border-2 resize-none  text-black-900 text-sm rounded-lg w-full p-4"
        required
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

const AddEvent = () => {
  // eslint-disable-next-line no-unused-vars
  const { chosenSlotTime, chosenDate, newTeamName } = FindFreeSlot();
  document.title = "Add Event";
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    eventName: null,
    eventDescription: null,
    eventLocation: null,
    eventLink: null,
    newStartTime: null,
    newEndTime: null,
  });
  const {
    eventName,
    eventDescription,
    eventLocation,
    eventLink,
    newStartTime,
    newEndTime,
  } = formData;
  var { start_time, end_time } = chosenSlotTime;
  const [value, setValue] = React.useState([start_time, end_time]);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!eventName) {
      toast.error("Please fill Event Name");
    } else if (!eventDescription) {
      toast.error("Please fill Event Description");
    } else if (!eventLocation) {
      toast.error("Please fill Event Location");
    } else if (!newStartTime) {
      toast.error("Please fill Start Time");
    } else if (!newEndTime) {
      toast.error("Please fill End Time");
    } else if (newStartTime > newEndTime) {
      toast.error("Start Time cannot be greater than End Time");
    } else {
      try {
        axios.post("/meet/create", {
          team_id: localStorage.getItem("team_id"),
          email: user.email,
          title: eventName,
          start_time: newStartTime,
          end_time: newEndTime,
          team_name: newTeamName,
          description: eventDescription,
          date: moment(chosenDate).format('YYYY-MM-DD'),
          location: eventLocation,
          link: eventLink,
        });

        navigate("/home");
        localStorage.removeItem("team_id");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleCancel = () => {
    setFormData({
      eventName: null,
      eventDescription: null,
      eventDate: null,
      eventLocation: null,
      eventLink: null,
      newStartTime: null,
      newEndTime: null,
    });
    setValue([start_time, end_time]);
  };

  const platforms = [
    {
      name: "Discord",
      icon: <Discord />,
    },
    {
      name: "Gmeet",
      icon: <Gmeet />,
    },
    {
      name: "Zoom",
      icon: <Zoom />,
    },

    {
      name: "Offline",
      icon: <Offline />,
    },
  ];
  return (
    <div className="pb-20">
      <PageHeading title="Add Event" />
      <div>
        <div className=" flex justify-center w-full p-4 ">
          <div className="flex bg-blue-50 rounded-md p-6 flex-col gap-y-10 w-full lg:w-2/4">
            <div className="flex gap-x-8 items-center">
              <div className="flex  gap-x-8 w-1/2">
                <div className="flex items-center justify-between ">
                  <div className="">
                    <h3>Start Time: </h3>
                    <div>
                      <input
                        type="time"
                        required
                        className="p-2 rounded-md"
                        onChange={(event) =>
                          setFormData((prev) => {
                            return {
                              ...prev,
                              newStartTime: event.target.value,
                            };
                          })
                        }
                      />
                      {newStartTime && newStartTime < start_time && (
                        <p className="text-red-500 text-sm">
                          Start time must be greater than {start_time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <h3>End Time: </h3>
                    <div>
                      <input
                        type="time"
                        required
                        className="p-2 rounded-md"
                        onChange={(event) =>
                          setFormData((prev) => {
                            return { ...prev, newEndTime: event.target.value };
                          })
                        }
                      />
                      {newEndTime && newEndTime < end_time && (
                        <p className="text-red-500 text-sm">
                          End time must be less than {end_time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1>Date: {chosenDate}</h1> */}
            <EntryField
              label="Event Name"
              value={eventName}
              attr={"eventName"}
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, eventName: event.target.value };
                })
              }
            />
            <EntryField
              label="Description"
              value={eventDescription}
              attr={"eventDescription"}
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, eventDescription: event.target.value };
                })
              }
              isDesc={true}
            />
            <div>
              <p className="rounded-md text-sm font-medium text-slate-500">
                Platform:
              </p>
              <div className="flex gap-x-4 mt-2">
                {platforms.map((platform) => (
                  <div
                    className={`border hover:border-blue-300 cursor-pointer ${
                      eventLocation === platform.name && "border-myBlue"
                    } rounded-md`}
                    onClick={() =>
                      setFormData((prev) => {
                        return { ...prev, eventLocation: platform.name };
                      })
                    }
                  >
                    {platform.icon}
                  </div>
                ))}
              </div>
            </div>

            <EntryField
              label="Event Link (optional)"
              value={eventLink}
              attr={"eventLink"}
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, eventLink: event.target.value };
                })
              }
            />
            <div className="flex w-full  gap-x-4">
              <button
                onClick={handleCancel}
                type="cancel"
                className="text-black bg-white border-none font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-blue-600 "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
