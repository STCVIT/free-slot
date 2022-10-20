import React from "react";

const LandingPage3 = () => {
  document.title = "LandingPage3"
    return (
        <div class="flex flex-col xl:flex-row  w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <div class="grid grid-cols-2 gap-4 w-full mt-12 m-6">
                <div>
                    <div class="ml-9">
                        <p class="m-4 text-black font-bold text-6xl">
                            Get in
                        </p>
                        <p class="m-4 text-black font-bold text-6xl">
                            touch
                        </p>
                    </div>
                    <img class="object-cover" src={require('../assets/PersonalInformation.png')} alt="Flower and sky"/>
                </div>
                
            
                <div class="flex flex-col">
                    {/* <p class="mt-4 text-base md:text-lg text-gray-600">
                    In this fast-paced world, it is hard to keep track of one’s schedule. And, it is harder to find a perfect time when you & your friends are off- work. Freeslot is the solution. A picture and registration number is all it takes..
                    </p> */}
                </div>
            </div> 
        </div>
    ); 
  };
  
  export default LandingPage3;