import React from "react";

const LandingPage2 = () => {
  document.title = "LandingPage2";
  return (
    <div className="grid grid-rows-6 lg:h-screen">
      <h1 className="flex justify-center items-center text-center font-semibold text-xl lg:text-4xl ">
        Enter
      </h1>
      <h1 className="flex justify-center items-center text-center p-2 font-bold text-4xl lg:text-7xl">
        Freeslot
      </h1>
      <h1 className="flex justify-center items-center text-center p-2 font-semibold text-gray-500 text-xl lg:text-4xl">
        by STC
      </h1>

      <div className="mx-8 mb-8">
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gad-6 sm:space-y-0 lg:gap-8 shadow-2xl rounded-lg">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
            <img
              className="object-cover"
              src={require("../../assets/ScheduleMeeting.png")}
              alt=""
            />
          </div>
          <div className="sm:col-span-2 space-y-4 text-2xl mt-8 p-8 lg:mt-0">
            In this fast-paced world, it is hard to keep track of one’s
            schedule. And, it is harder to find a perfect time when you & your
            friends are off- work. Freeslot is the solution. A picture and
            registration number is all it takes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
