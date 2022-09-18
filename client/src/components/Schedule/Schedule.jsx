import React from 'react'
import Monday from './Days/Monday'
import NavButton from './NavButton/NavButton'

const Schedule = () => {
  return (
    <div className="grid grid-rows-6 h-screen">
      <h1 className="flex w-full h-full justify-center items-center text-center row-span-1 font-semibold text-2xl">Schedule</h1>
      <div className="w-full row-span-5 items-center justify-center">
      <div class="flex justify-center pt-2">
        <div class="rounded-lg shadow-lg bg-grey-700 max-w-sm">
          <div class="inline">
            <span class="px-4 py-2 m-2 rounded-full bg-blue-500 text-white text-black font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Modify
            </span>
          </div>          

        <div class="mb-4 border-b border-gray-200">

        <NavButton />
      </div>
      <div id="myTabContent">
           <Monday />
      </div>  
        </div>
      </div>
    </div>
    </div>
  )
}

export default Schedule