import React, { useState } from "react";
import axios from "../axios/index";
import PageHeading from "./Headings/PageHeading";
import { toast } from "react-toastify";
import { FindFreeSlot } from "../context/FreeSlotContext";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
//import userModel from "../../../server/src/models/user.model";

const EntryField = ({ label, value, onChange, isDesc }) => {
  return (
    <div>
      <label className="text-sm font-medium text-slate-500">{label}</label>
      <textarea
        rows={isDesc ? "4" : "1"}
        type="text"
        id="description"
        className="border-2 resize-none border-gray-300 text-black-900 text-sm rounded-lg w-full p-2"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

const AddEvent = () => {
  // eslint-disable-next-line no-unused-vars
  const { chosenSlotTime, chosenDate, currentTeamId, newTeamName } =
    FindFreeSlot();
  document.title = "Add Event";
  const [eventName, setEventName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("Google meet");
  const [eventLink, setEventLink] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  var { start_time, end_time } = chosenSlotTime;
  // console.log(chosenSlotTime);
  // start_time = parseInt(chosenSlotTime.end_time.slice(0, 2));
  // end_time = parseInt(chosenSlotTime.start_time.slice(0, 2));
  const [value, setValue] = React.useState([start_time, end_time]);
  const [newStartTime, setNewStartTime] = React.useState(null);
  const [newEndTime, setNewEndTime] = React.useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!eventName) {
      toast.error("Please fill Event Name");
    } else if (!eventDescription) {
      toast.error("Please fill Event Description");
    } else if (!eventLocation) {
      toast.error("Please fill Event Location");
    }

    //  else if (value[0] === start_time && value[1] === end_time && !notified) {
    //   toast.error(
    //     "You have not modified the time, If you want to continue, please submit again"
    //   );
    //   setNotified(true);
    // }
    // else if (time[0] >= time[1]) {
    //   toast.error("Start time must be less than end time");
    //   return;
    // }
    else {
      console.log(newTeamName);
      try {
        axios.post("/meet/create", {
          team_id: localStorage.getItem("team_id"),
          email: user.email,
          title: eventName,
          start_time: start_time,
          end_time: end_time,
          // start_time: newStartTime,
          // end_time: newEndTime,
          team_name: newTeamName,
          description: eventDescription,
          date: "2022-12-14",
          location: eventLocation,
          link: eventLink,
        });

        navigate("/home");
        localStorage.removeItem("team_id")
      } catch (err) {
        console.log(err);
      }
      console.log(
        newStartTime,
        newEndTime,
        eventName,
        eventDescription,
        eventLocation
      );
    }
  };
  const handleCancel = () => {
    setEventDate("");
    setEventDescription("");
    setEventLink("");
    setEventLocation("Google meet");
    setEventName("");
    setValue([start_time, end_time]);
  };
  // const handleChange = (e) => {
  //   setValue(e);
  // };

  return (
    <div>
      <PageHeading title="Add Event" />
      <div>
        <div className="flex justify-center w-full px-4">
          <div className="flex flex-col gap-y-10 w-full lg:w-2/4">
            <div className="flex gap-x-8 items-center">
              {/* <Box sx={{ width: "15rem" }}>
                  <Slider
                    step={1}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    min={10}
                    max={12}
                    onChange={(e) => handleChange(e.target.value)}
                    valueLabelDisplay="auto"
                    disableSwap
                  />
                </Box> */}
              <div className="flex flex-col gap-y-4 w-1/2">
                <div className="flex items-center justify-between ">
                  <div>
                    <h3>Start Time: </h3>
                  </div>
                  <div>
                    <input
                      type="time"
                      required
                      className="p-2 rounded-md"
                      onChange={(e) => setNewStartTime(e.target.value)}
                    />
                    {newStartTime && newStartTime < start_time && (
                      <p className="text-red-500 text-sm">
                        Start time must be greater than {start_time}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <h3>End Time: </h3>
                  </div>
                  <div>
                    <input
                      type="time"
                      required
                      className="p-2 rounded-md"
                      onChange={(e) => setNewEndTime(e.target.value)}
                    />
                    {newEndTime && newEndTime < end_time && (
                      <p className="text-red-500 text-sm">
                        End time must be less than {end_time}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* <h3>End Time: </h3>
                <input
                  type="time"
                  onChange={(e) =>
                    // setTime((prevState) => (prevState[1] = e.target.value))
                    setNewEndTime(e.target.value)
                  }
                /> */}
            </div>
            <h1>Date: {chosenDate}</h1>
            <EntryField
              label="Event Name"
              value={eventName}
              onChange={setEventName}
            />
            <div>
              <label className="rounded-md text-sm font-medium text-slate-500">
                Event Location/Platform{" "}
              </label>
              <br />
              <select
                id="event_location"
                className="form-select  border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg p-3 w-fit"
                aria-label="Default select example"
                onChange={(e) => setEventLocation(e.target.value)}
              >
                <option
                  onClick={() => setEventLocation("Google meet")}
                  selected
                >
                  Google meet
                </option>
                <option onClick={() => setEventLocation("Discord")} value="1">
                  Discord
                </option>
                <option onClick={() => setEventLocation("Zoom")} value="2">
                  Zoom
                </option>
                <option
                  onClick={() => setEventLocation("Other Platform")}
                  value="3"
                >
                  Other Platform
                </option>
              </select>
            </div>
            <EntryField
              label="Description"
              value={eventDescription}
              onChange={setEventDescription}
              isDesc={true}
            />
            <EntryField
              label="Event Link (optional)"
              value={eventLink}
              onChange={setEventLink}
            />
            <div className="flex w-full justify-between gap-x-3 px-4">
              <button
                onClick={handleCancel}
                type="cancel"
                className="text-black bg-white border-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-blue-600 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
