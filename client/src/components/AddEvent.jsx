import React from "react";
import axios from "axios";
const AddEvent = () => {
  document.title = "Add Event";
  const [eventName, setEventName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("Google Meet");
  const [eventLink, setEventLink] = React.useState("");
  const handleSubmit = () => {
    axios.post("http://localhost:6969/", {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      location: eventLocation,
      link: eventLink,
    });
  };
  return (
    <div className="grid grid-rows-6 h-screen">
      <h1 className="flex w-full h-full justify-center items-center text-center row-span-1 font-semibold text-2xl">
        AddEvent
      </h1>
      <div className="w-full row-span-5 items-center justify-center">
        <div className="flex w-full justify-center">
          <div className="col-span-5 flex flex-col gap-y-10 md:w-2/4">
            <div>
              <label class="text-sm font-medium text-slate-500">
                Event Name
              </label>
              <input
                id="event_name"
                onChange={(e) => setEventName(e.target.value)}
                class="border-2 border-gray-300 text-black-900 text-sm rounded-lg w-full p-3"
                required
              ></input>
            </div>

            <div>
              <label class="rounded-md text-sm font-medium text-slate-500">
                Event Location/Platform{" "}
              </label>
              <select
                id="event_location"
                class="relative form-select  border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-full p-3"
                aria-label="Default select example"
                onChange={(e) => setEventLocation(e.target.value)}
              >
                <option selected>Google meet</option>
                <option value="1">Discord</option>
                <option value="2">Zoom</option>
                <option value="3">Other Platform</option>
              </select>
            </div>

            <div>
              <label class="text-sm font-medium text-slate-500">
                Description
              </label>
              <textarea
                rows="4"
                type="text"
                id="description"
                class="border-2 resize-none border-gray-300 text-black-900 text-sm rounded-lg w-full p-2"
                required
                onChange={(e) => setEventDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label class="text-sm font-medium text-slate-500">
                Enter event Link (optional)
              </label>
              <input
                id="event_link"
                onChange={(e) => setEventLink(e.target.value)}
                class="resize border-2 border-gray-300 text-black-900 text-sm rounded-lg w-full p-3"
              ></input>
            </div>
            <div className="flex w-full justify-between gap-x-3">
              <button
                onClick={() => {
                  setEventDate("");
                  setEventDescription("");
                  setEventLink("");
                  setEventLocation("");
                  setEventName("");
                }}
                type="cancel"
                class="text-black bg-white border-none font-medium rounded-lg text-sm px-1 w-60  px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                onSubmit={() => handleSubmit}
                class="text-white bg-blue-700 font-medium rounded-lg text-sm px-1 w-60  px-5 py-2.5 text-center dark:bg-blue-600 "
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
