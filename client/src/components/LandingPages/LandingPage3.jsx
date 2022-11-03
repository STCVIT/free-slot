import React from "react";

const LandingPage3 = () => {
  document.title = "LandingPage3"
    return (
      <div className="grid grid-rows-6 md:h-screen">
        <h1 className="flex justify-center items-center text-center p-6 font-bold text-4xl md:text-7xl">Features</h1>
        
        <div class="text-gray-600 body-font">
          <div class="container px-9 py-4 mx-auto">
            <div class="flex flex-wrap -m-4">

              <div class="p-4 md:w-1/3">
                <div class="border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden">
                  <img class="lg:h-64 md:h-48 w-full p-4 object-cover object-center" src={require('../../assets/GoingUp.png')} alt="GoingUp"/>
                  <div class="p-6 pb-2">
                    <h1 class="title-font text-lg text-black font-bold mb-3">Uploading Timetable</h1>
                    <p class="leading-relaxed mb-3 font-normal text-black">Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule willbe prepared</p>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/3">
                <div class="border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden">
                  <img class="lg:h-64 md:h-48 w-full p-4 object-cover object-center" src={require('../../assets/GoingUp.png')} alt="GoingUp"/>
                  <div class="p-6 pb-2">
                    <h1 class="title-font text-lg text-black font-bold mb-3">Uploading Timetable</h1>
                    <p class="leading-relaxed mb-3 font-normal text-black">Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule willbe prepared</p>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/3">
                <div class="border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden">
                  <img class="lg:h-64 md:h-48 w-full p-4 object-cover object-center" src={require('../../assets/GoingUp.png')} alt="GoingUp"/>
                  <div class="p-6 pb-2">
                    <h1 class="title-font text-lg text-black font-bold mb-3">Uploading Timetable</h1>
                    <p class="leading-relaxed mb-3 font-normal text-black">Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule willbe prepared</p>
                  </div>
                </div>
              </div>

              
              
              
            </div>
          </div>
        </div>
        
  
    

      </div>
    ); 
  };
  
  export default LandingPage3;