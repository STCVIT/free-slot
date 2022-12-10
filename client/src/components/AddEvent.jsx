import React from "react";
import axios from "axios";
import PageHeading from "./Headings/PageHeading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RangeInput = ({ value, onChange, startTime, endTime }) => {
  return (
    <div>
      <input
        type="range"
        min={startTime}
        max={endTime}
        step={1}
        value={value}
        class="slider"
        id="myRange"
        onChange={(e) => onChange(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

const EntryField = ({ label, value, onChange, isDesc }) => {
  return (
    <div>
      <label class="text-sm font-medium text-slate-500">{label}</label>
      <textarea
        rows={isDesc ? "4" : "1"}
        type="text"
        id="description"
        class="border-2 resize-none border-gray-300 text-black-900 text-sm rounded-lg w-full p-2"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

const AddEvent = () => {
  document.title = "Add Event";
  const [eventName, setEventName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("Google Meet");
  const [eventLink, setEventLink] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const handleSubmit = () => {
    let unFilled = [];
    if (!eventName) {
      unFilled.push("Event Name");
    }
    if (!eventDescription) {
      unFilled.push("Event Description");
    }
    if (!eventLocation) {
      unFilled.push("Event Location");
    }
    if (!startTime) {
      unFilled.push("Start Time");
    }
    if (!endTime) {
      unFilled.push("End Time");
    }
    if (unFilled.length > 0) {
      toast.error(
        <div>
          <p>Please fill</p>
          <ul>
            {unFilled.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      );
      return;
    }

    if (startTime >= endTime) {
      toast.error("Start time must be less than end time");
      return;
    } else {
      axios.post("http://localhost:6969/", {
        name: eventName,
        description: eventDescription,
        date: eventDate,
        location: eventLocation,
        link: eventLink,
      });
      toast.success("Event Added Successfully");
    }
  };
  const handleCancel = () => {
    setEventDate("");
    setEventDescription("");
    setEventLink("");
    setEventLocation("");
    setEventName("");
    setStartTime("");
    setEndTime("");
  };
  return (
    <div>
      <PageHeading title="Add Event" />
      <div>
        <div className="flex justify-center w-full px-4">
          <div className="flex flex-col gap-y-10 w-full md:w-2/4">
            <div>
              <RangeInput
                value={startTime}
                onChange={setStartTime}
                startTime={0}
                endTime={10}
              />
              <RangeInput
                value={endTime}
                onChange={setEndTime}
                startTime={0}
                endTime={10}
              />
            </div>
            <EntryField
              label="Event Name"
              value={eventName}
              onChange={setEventName}
            />
            <div>
              <label class="rounded-md text-sm font-medium text-slate-500">
                Event Location/Platform{" "}
              </label>
              <br />
              <select
                id="event_location"
                class="form-select  border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg p-3 w-fit"
                aria-label="Default select example"
                onChange={(e) => setEventLocation(e.target.value)}
              >
                <option selected>Google meet</option>
                <option value="1">Discord</option>
                <option value="2">Zoom</option>
                <option value="3">Other Platform</option>
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
                class="text-black bg-white border-none font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 "
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
