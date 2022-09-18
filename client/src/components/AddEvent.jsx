import React from "react";

const AddEvent = () => {
  return (
    <div className="grid grid-rows-6 h-screen">
      <h1 className="flex w-full h-full justify-center items-center text-center row-span-1 font-semibold text-2xl">AddEvent</h1>
      <div className="w-full row-span-5 items-center justify-center">
        <div className="flex w-full justify-center">
          <div className="col-span-5 flex flex-col gap-y-10 md:w-2/4">
            <div>
              <label class="text-sm font-medium text-slate-500">
                Event Name
              </label>
              <input
                id="event_name"
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
              <input
                id="description"
                class="resize border-2 border-gray-300 text-black-900 text-sm rounded-lg w-full h-20"
                required
              ></input>
            </div>

            <div>
              <label class="text-sm font-medium text-slate-500">
                Enter event Link (optional)
              </label>
              <input
                id="event_link"
                class="resize border-2 border-gray-300 text-black-900 text-sm rounded-lg w-full p-3"
              ></input>
            </div>
            <div className="flex w-full justify-between">
              <button
                type="cancel"
                class="text-black bg-white border-none font-medium rounded-lg text-sm px-1 w-60  px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
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
