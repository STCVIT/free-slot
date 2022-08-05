import React from 'react'

const Schedule = () => {
  return (
    <div class="grid m-2 p-2 place-content-center">
      <div class="place-content-center">
          <p class="font-medium leading-tight text-2xl pt-2">Schedule</p>
      </div>
      <div class="flex justify-center pt-2">
        <div class="rounded-lg shadow-lg bg-grey-700 max-w-sm">
          <div class="inline">
            <span class="px-4 py-2 m-2 rounded-full bg-blue-500 text-xs text-black font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Modify
            </span>
          </div>          

        <div class="mb-4 border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 text-xs border-none rounded-t-lg text-black hover:text-bold " id="mon-tab" data-tabs-target="#tab-mon" type="button" role="tab" aria-controls="mon" aria-selected="true">Mon</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 text-xs border-none rounded-t-lg text-black hover:text-bold " id="tue-tab" data-tabs-target="#tab-tue" type="button" role="tab" aria-controls="tue" aria-selected="true">Tue</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 text-xs border-none rounded-t-lg text-black hover:text-bold " id="wed-tab" data-tabs-target="#tab-wed" type="button" role="tab" aria-controls="wed" aria-selected="true">Wed</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 text-xs border-none rounded-t-lg text-black hover:text-bold " id="thur-tab" data-tabs-target="#tab-thur" type="button" role="tab" aria-controls="thur" aria-selected="true">Thur</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block p-4 text-xs border-none rounded-t-lg text-black hover:text-bold " id="fri-tab" data-tabs-target="#tab-fri" type="button" role="tab" aria-controls="fri" aria-selected="true">Fri</button>
            </li>
        </ul>
      </div>
      <div id="myTabContent">
          <div class="p-2 rounded-lg" id="mon" role="tabpanel" aria-labelledby="mon-tab">
            <div class="p-2 m-2 max-w-sm bg-white shadow-lg rounded-lg border border-black shadow-md">
              <p class="mt-1 text-xs font-bold text-zinc-600">8:00 - 8:50 a.m.</p>
              <p class="font-bold text-zinc-600">Basic Electrical Engineering</p>
              <p class="mb-1 text-xs text-zinc-600">TT 413</p>
            </div> 

            <div class="p-2 m-2 max-w-sm bg-white shadow-lg rounded-lg border border-black shadow-md">
              <p class="mt-1 text-xs font-bold text-zinc-600">8:00 - 8:50 a.m.</p>
              <p class="font-bold text-zinc-600">Basic Electrical Engineering</p>
              <p class="mb-1 text-xs text-zinc-600">TT 413</p>
            </div>
            
          </div> 
      </div>  




        </div>
      </div>
    </div>
  )
}

export default Schedule