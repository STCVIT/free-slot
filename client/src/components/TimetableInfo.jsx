import React from 'react'

const TimetableInfo = () => {
  return (
    <div class="ml-28">
    <div class="grid gap-1 mb-6">
        <div class="flex justify-center mt-8">
            <div class="max-w-2xl rounded-lg">
                <div class="m-4">
                <div class="m-2 w-64 text-center ">
                <div class="m-3">
            <p class="font-medium font-bold leading-tight text-2xl">Profile</p>
        </div>

                    <div class="relative w-20 h-20">
                        <img class="w-10 h-10 m-0 rounded-full absolute" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <div class="m-2" >
                            <label class="cursor-pointer mt-6 ml-12">
                                <span class="w-max px-4 py-2 text-blue-500 bg-white border-blue-500 border-1 rounded-lg text-xs">Uploadpicture</span>
                                <input type='file' class="hidden"  multiple="multiple"  accept="accept" />
                            </label>
                        </div>
                    </div>
                    </div>
                    <label class="inline-block mb-2 text-gray-500">Timetable</label>
                    <div class="flex items-center justify-center w-full">
                        <label
                            class="flex flex-col w-full h-32 border-none hover:bg-gray-100 hover:border-gray-300">
                            <div class="flex flex-col items-center justify-center w-96">
                                <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" class="max-w-full h-auto " alt="..." />
                                
                            </div>
                            <input type="file" class="opacity-0" />
                        </label>
                    </div>
                    <div class="mt-12 p-2">
                    
                </div>
                </div>
                <div class="mt-12 p-6">
                    <button class="w-90 px-4 py-2 text-blue-500 bg-white border-blue-500 text-xs rounded shadow-xl">Upload new timetable</button> 
                </div>

                

                <div>
                    <label class="m-1 text-gray-500 text-xs">Date Format</label> 
                    <label class="m-16 text-gray-500 text-xs">Time Format</label>          
                </div>

                <div>
                    <div class="relative inline-block  flex-col text-xs">
                        <div>
                            <button type="button" class="inline-flex justify-center w-max rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            DD/MM/YY
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </button>
                        </div>
                        {/* <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-0">MM/DD/YY</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-1">YY/MM/DD</a>
                            </div>
                        </div> */}
                    </div>
                    <div class="relative inline-block  ml-4 flex-col text-xs">
                        <div>
                            <button type="button" class="inline-flex justify-center w-max rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            12h(am/pm)
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </button>
                        </div>
                        {/* <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-0">24h</a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div class="justify-center mt-8">
                    <button type="cancel" class="w-90 px-4 py-2 text-black font-medium bg-white border-none text-sm  w-30 ml-3 rounded-lg ">Cancel</button> 
                    <button type="save" class="w-90 px-4 py-2 text-white font-medium bg-blue-600  border-none text-sm w-30 ml-3 rounded-lg shadow-xl">Save</button> 
                    <button type="delete" class="w-90 px-4 py-2 text-white font-medium bg-red-600 border-none text-sm w-30 ml-44 rounded-lg shadow-xl ">Delete</button> 
                    </div>  
                </div>
        </div>    
    </div>
    </div>

  )
}

export default TimetableInfo
