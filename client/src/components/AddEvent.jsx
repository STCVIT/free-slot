import React from 'react'

const AddEvent = () => {
  return (
    <div class="ml-28">
      <div class="grid gap-1 mb-6">
          <div>
            <p class="font-medium leading-tight text-2xl pl-96 pt-2">Add Event</p>
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-slate-500">Event Name</label>
            <input id="event_name" class="border-2 border-gray-300 text-black-900 text-sm rounded-lg w-80 p-3" required></input>
          </div>
        
          <div >
            <label class="block mb-2 text-sm font-medium text-slate-500">Event Location/Platform </label>
            <select  id="event_location" class="form-select appearance-none border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-80 p-3" aria-label="Default select example">
              <option selected>Google meet</option>
              <option value="1">Discord</option>
              <option value="2">Zoom</option>
              <option value="3">Other Platform</option>
            </select>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-slate-500">Description</label>
            <input id="description" class="resize border-2 border-gray-300 text-black-900 text-sm rounded-lg w-80 h-20 p-3" required></input>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-slate-500">Enter event Link (optional)</label>
            <input id="event_link" class="resize border-2 border-gray-300 text-black-900 text-sm rounded-lg w-80 p-3"></input>
          </div>
      </div>
      <button type="cancel" class="text-black bg-white border-none font-medium rounded-lg text-sm px-1 w-60  px-5 py-2.5 text-center">Cancel</button>
      <button type="submit" class="text-white bg-blue-700 font-medium rounded-lg text-sm px-1 w-60  px-5 py-2.5 text-center dark:bg-blue-600 ">Submit</button>
    </div>

  )
}

export default AddEvent
