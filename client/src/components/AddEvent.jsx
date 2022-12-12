import React, { useState } from "react";
import axios from "../axios/index";
import PageHeading from "./Headings/PageHeading";
import { toast } from "react-toastify";
import { FindFreeSlot } from "../context/FreeSlotContext";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
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
  const { chosenSlotTime, chosenDate } = FindFreeSlot();
  document.title = "Add Event";
  const [eventName, setEventName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("Google meet");
  const [eventLink, setEventLink] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  var { start_time, end_time } = chosenSlotTime;
  const [notified, setNotified] = useState(false);
  start_time = parseInt(chosenSlotTime.end_time.slice(0, 2));
  end_time = parseInt(chosenSlotTime.start_time.slice(0, 2));
  const [value, setValue] = React.useState([start_time, end_time]);
  const handleSubmit = () => {
    if (!eventName) {
      toast.error("Please fill Event Name");
    } else if (!eventDescription) {
      toast.error("Please fill Event Description");
    } else if (!eventLocation) {
      toast.error("Please fill Event Location");
    } else if (value[0] === start_time && value[1] === end_time && !notified) {
      toast.error(
        "You have not modified the time, If you want to continue, please submit again"
      );
      setNotified(true);
    } else if (value[0] >= value[1]) {
      toast.error("Start time must be less than end time");
      return;
    } else {
      axios.post("/meet/create", {
        email: user.email,
        title: eventName,
        description: eventDescription,
        date: eventDate,
        location: eventLocation,
        link: eventLink,
      });
      toast.success("Event Added Successfully");
      console.log(value, eventName, eventDescription, eventLocation);
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
  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div>
      <PageHeading title="Add Event" />
      <div>
        <div className="flex justify-center w-full px-4">
          <div className="flex flex-col gap-y-10 w-full md:w-2/4">
            <div className="flex justify-evenly items-center">
              <div className="p-2 rounded-md bg-myBlue text-white font-semibold">
                {value[0]}
              </div>
              <div>
                <Box sx={{ width: "15rem" }}>
                  <Slider
                    step={1}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    min={start_time}
                    max={end_time}
                    onChange={(e) => handleChange(e.target.value)}
                    valueLabelDisplay="auto"
                    disableSwap
                  />
                </Box>
              </div>
              <div className="p-2 rounded-md bg-myBlue text-white font-semibold">
                {value[1]}
              </div>
            </div>
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
