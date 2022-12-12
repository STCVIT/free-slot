import React from "react";
import ContactUs from "../contactUs/contactUs";
import Socials from "../Socials/Socials";

const LandingPage3 = () => {
  document.title = "LandingPage3";
  return (
    <div className="flex flex-col xl:flex-row  w-full  rounded-lg overflow-hidden cursor-pointer">
      <div className="grid grid-cols-2 gap-4 w-full mt-12 m-6">
        <div>
          <div className="ml-9">
            <h1 className="m-1 md:m-4 text-black font-bold text-4xl md:text-6xl">
              Get in
            </h1>
            <h1 className="m-1 md:m-4 text-black font-bold text-4xl md:text-6xl">
              touch
            </h1>
          </div>
          <img
            className="m-4 object-cover"
            src={require("../../assets/PersonalInformation.png")}
            alt="Flower and sky"
          />
        </div>
        <div>
          <ContactUs isHomePage={true} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage3;
