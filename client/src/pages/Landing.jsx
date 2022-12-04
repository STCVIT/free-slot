import React from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../components/contactUs/contactUs";
import Socials from "../components/Socials/Socials";

const Landing = () => {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="bg-[#BEBDBD] py-4">
      <nav className="flex px-12 py-6">
        <header className="text-4xl font-bold font-logo">Freeslot</header>
        <div className="flex ml-auto">
          <button className="mx-2" onClick={navigateLogin}>
            {" "}
            Login
          </button>
          <button className="mx-2" onClick={navigateSignup}>
            {" "}
            Signup
          </button>
        </div>
      </nav>
      <div className="grid grid-rows-6 md:h-screen">
        <h1 className="flex justify-center items-center text-center font-semibold text-xl md:text-4xl ">
          Enter
        </h1>
        <h1 className="flex justify-center items-center text-center p-2 font-bold text-4xl md:text-7xl">
          Freeslot
        </h1>
        <h1 className="flex justify-center items-center text-center p-2 font-semibold text-gray-500 text-xl md:text-4xl">
          by STC
        </h1>

        <div class="mx-8 mb-8">
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gad-6 sm:space-y-0 lg:gap-8 shadow-2xl rounded-lg">
            <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
              <img
                class="object-cover"
                src={require("../assets/ScheduleMeeting.png")}
                alt=""
              />
            </div>
            <div class="sm:col-span-2 space-y-4 text-2xl mt-8 p-8 md:mt-0">
              In this fast-paced world, it is hard to keep track of one’s
              schedule. And, it is harder to find a perfect time when you & your
              friends are off- work. Freeslot is the solution. A picture and
              registration number is all it takes.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-6 md:h-screen">
        <h1 className="flex justify-center items-center text-center p-6 font-bold text-4xl md:text-7xl">
          Features
        </h1>

        <div class="text-gray-600 body-font">
          <div class="container px-9 py-4 mx-auto">
            <div class="flex flex-wrap -m-4">
              {[1, 2, 3].map((item) => (
                <div class="p-4 md:w-1/3">
                  <div class="border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden">
                    <img
                      class="lg:h-64 md:h-48 w-full p-4 object-cover object-center"
                      src={require("../assets/GoingUp.png")}
                      alt="GoingUp"
                    />
                    <div class="p-6 pb-2">
                      <h1 class="title-font text-lg text-black font-bold mb-3">
                        Uploading Timetable
                      </h1>
                      <p class="leading-relaxed mb-3 font-normal text-black">
                        Our ML model will scan through you timetable to find the
                        accurate slots of classes based on which your schedule
                        willbe prepared
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col xl:flex-row  w-full  rounded-lg overflow-hidden cursor-pointer">
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
            <img
              class="m-4 object-cover"
              src={require("../assets/PersonalInformation.png")}
              alt="Flower and sky"
            />
          </div>
          <div>
            <ContactUs isHomePage={true} />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <Socials />
      </div>
    </div>
  );
};

export default Landing;
