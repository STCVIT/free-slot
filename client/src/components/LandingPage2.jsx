import React from "react";

const LandingPage2 = () => {
  document.title = "LandingPage2"
    return (
      <div className="grid grid-rows-6 md:h-screen">
        <h1 className="flex justify-center items-center text-center font-semibold row-span-1 text-4xl">
          Enter
        </h1>
        <h1 className="flex justify-center items-center text-center row-span-1 font-bold text-7xl">
          Freeslot
        </h1>
        <h1 className="flex justify-center items-center text-center row-span-1 font-semibold text-gray-500 text-4xl">
          by STC
        </h1>
  
        <div class="flex justify-center h-40 w-4/5 ml-28 rounded-lg bg-white shadow-lg">
          <div class="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <img class="object-cover w-full h-36 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require('../assets/ScheduleMeeting.png')} alt=""/>
            <div class="relative p-4 justify-start">
              <p class="mt-4 text-base md:text-lg text-black">
              In this fast-paced world, it is hard to keep track of one’s schedule. And, it is harder to find a perfect time when you & your friends are off- work. Freeslot is the solution. A picture and registration number is all it takes.
              </p>
            </div>
          </div>
        </div>
      </div>
    ); 
  };
  
  export default LandingPage2;