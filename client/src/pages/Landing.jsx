import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../components/contactUs/contactUs";
import PageHeading from "../components/Headings/PageHeading";
import Socials from "../components/Socials/Socials";

const features = [
  {
    title: "Uploading Timetable",
    desc: `Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule willbe prepared`,
  },
  {
    title: "Find Freeslot",
    desc: `You will enter the registration numbers of your friends and find out when you all are free during weekdays.`,
  },
  {
    title: "Make Event",
    desc: `Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule willbe prepared`,
  },
];

const FeaturesCard = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-md p-10">
      <div className="flex  justify-center">
        <img
          className="max-h-[400px]"
          src={`/assets/${title.replace(" ", "-").toLowerCase()}.png`}
          alt={title}
        />
      </div>
      <div className="mt-4">
        <h1 className="mb-4 text-center text-3xl">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Landing = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const returnToHome = () => {
    if (user) {
      navigate("/home");
    }
  };
  useEffect(() => {
    returnToHome();
  });

  const navigateSignup = () => {
    navigate("/signup");
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="pb-4">
      <div className="flex justify-between px-12 py-7 border-b-2">
        <div>
          <p className="text-5xl font-semibold">Freeslot</p>
        </div>
        <div className="flex gap-x-4">
          <button
            onClick={navigateLogin}
            className=" text-myBlue py-4 px-6 border border-myBlue rounded-md"
          >
            Login
          </button>
          <button
            onClick={navigateSignup}
            className=" bg-myBlue py-4 px-6 border-myBlue text-white rounded-md"
          >
            Signup
          </button>
        </div>
      </div>
      <div className="flex flex-col px-4 lg:px-12 py-12 gap-y-32">
        <div className="flex flex-col gap-y-8 lg:grid grid-cols-2 ">
          <div className="flex items-center justify-between">
            <p className="font-bold text-5xl">
              Scheduling
              <br />
              meetings for <i className="text-myBlue">everyone</i>
            </p>
          </div>
          <div>
            <img
              src="/assets/landingCard.png"
              alt="scheduling meetings for everyone"
            />
          </div>
        </div>
        <div>
          <div className="text-center mb-16">
            <p>
              <span className="t text-5xl font-medium">Enter</span>
              <br />
              <br />
              <span className=" text-8xl font-bold">Freeslot</span>
              <br />
              <br />
              <span className="font-medium text-5xl text-[#A4A4A4]">
                by STC
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-4 lg:grid grid-cols-2 gap-x-4 bg-white rounded-md py-14 px-10">
            <div>
              <img src="/assets/landing-1.png" alt="scheduling meetings" />
            </div>
            <div className="flex items-center">
              <p className="text-base lg:text-4xl ">
                In this fast-paced world, it is hard to keep track of one&apos;s
                schedule. And, it is harder to find a perfect time when you &
                your friends are off- work. Freeslot is the solution. A picture
                and registration number is all it takes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <PageHeading title="Features" />
          <div className="flex flex-col lg:flex-row gap-x- gap-y-6">
            {features.map((feature, idx) => (
              <FeaturesCard key={idx} {...feature} />
            ))}
          </div>
        </div>
        <div className="lg:grid grid-cols-2">
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="font-bold text-9xl">
              Get in
              <br />
              touch
            </p>
            <img
              className="w-1/2"
              src="/assets/contact.png"
              alt="get in touch"
            />
          </div>

          <div>
            <p className="text-4xl font-bold lg:hidden text-center">
              Get in touch
            </p>
            <ContactUs isHomePage={true} />
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Landing;
