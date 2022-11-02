import React from "react";

const LandingPage3 = () => {
  document.title = "LandingPage3"
    return (
        <div class="flex flex-col xl:flex-row  w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <div class="grid grid-cols-2 gap-4 w-full mt-12 m-6">
                <div>
                    <div class="ml-9">
                        <h1 class="m-1 md:m-4 text-black font-bold text-4xl md:text-6xl">
                            Get in
                        </h1>
                        <h1 class="m-1 md:m-4 text-black font-bold text-4xl md:text-6xl">
                            touch
                        </h1>
                    </div>
                    <img class="m-4 object-cover" src={require('../assets/PersonalInformation.png')} alt="Flower and sky"/>
                </div>
                
            
                <div class="flex flex-col">
                   
                </div>
            </div> 
        </div>
    ); 
  };
  
  export default LandingPage3;