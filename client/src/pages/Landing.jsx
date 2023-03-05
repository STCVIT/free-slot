import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../components/contactUs/contactUs";
import PageHeading from "../components/Headings/PageHeading";
import Socials from "../components/Socials/Socials";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { GiHamburgerMenu } from "react-icons/gi";
// import { ReactComponent as IllLogo } from "../assets/landingCard";
import { ReactComponent as IllLogo } from "../assets/landingCard.svg";
import MainNavbar from "../components/Menus/MainNavbar";
import FullPageScroll from "../components/FullPageScroll/FullPageScroll";
const features = [
  {
    title: "Upload Timetable",
    desc: `Our ML model will scan through you timetable to find the accurate slots of classes based on which your schedule will be prepared`,
  },
  {
    title: "Find FreeSlot",
    desc: `You will enter the registration numbers of your friends and find out when you all are free during weekdays.`,
  },
  {
    title: "Make Event",
    desc: `Use the formulated FreeSlots to quickly organise an event or a meet with your desired team.`,
  },
];

const FeaturesCard = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-lg p-10 lg:w-1/3">
      <div className="flex  justify-center">
        <img
          loading="lazy"
          className="h-[300px] w-[300px]"
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
  let animatedP = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    if (animatedP) {
      setTimeout(() => setIsAnimated(true), 1000);
    }
  }, []);
  const [state, setState] = React.useState({
    right: false,
  });
  const navigate = useNavigate();
  // const returnToHome = () => {
  //   if (user) {
  //     navigate("/home");
  //   }
  // };
  // useEffect(() => {
  //   returnToHome();
  // });

  const navigateSignup = () => {
    navigate("/signup");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="lg:snap-y  lg:snap-mandatory lg:h-screen overflow-y-auto scroll-smooth">
      {!user && (
        <div className="sticky top-0 bg-white flex justify-between px-12 py-7 border-b-2">
          <div>
            <p className="text-5xl font-semibold">Freeslot</p>
          </div>
          <div className="p-4 lg:hidden">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <GiHamburgerMenu size={25} color="black" />
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  <Box
                    sx={{
                      width:
                        anchor === "top" || anchor === "bottom" ? "auto" : 250,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton className="border-b-2 border-black">
                          <Link
                            to={`/login`}
                            style={{ color: "black" }}
                            className="w-full"
                          >
                            Login
                          </Link>
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemButton className="border-b-2 border-black ">
                          <Link
                            to={`/signup`}
                            style={{ color: "black" }}
                            className="w-full"
                          >
                            Signup
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
          <div className="lg:flex gap-x-4 hidden">
            <button
              onClick={navigateLogin}
              className=" text-bg-primary py-4 px-6 border border-primary rounded-lg"
            >
              Login
            </button>
            <button
              onClick={navigateSignup}
              className=" bg-primary py-4 px-6 border-primary text-white rounded-lg"
            >
              Signup
            </button>
          </div>
        </div>
      )}
      {user && (
        <div className="sticky lg:fixed top-0 z-50 w-full">
          <MainNavbar active="landing" />
        </div>
      )}
      <div className="flex flex-col w-full gap-y-10 lg:block py-10 lg:py-0 px-5 pb-32 ">
        <FullPageScroll>
          <div className="flex flex-col gap-y-8 lg:grid grid-cols-2 ">
            <div className="flex items-center justify-center px-10">
              <p
                ref={(el) => (animatedP = el)}
                className={`font-bold text-4xl lg:text-7xl relative pAnimation ${
                  isAnimated ? "after:h-0" : "after:h-[110%]"
                } `}
              >
                Scheduling
                <br />
                meetings for <i className="text-bg-primary">everyone</i>
              </p>
            </div>
            <div className="flex justify-center w-full px-8">
              <IllLogo />
            </div>
          </div>
        </FullPageScroll>
        <FullPageScroll>
          <div className="flex flex-col gap-y-4 w-full h-full items-center justify-center">
            <div className="text-center">
              <p className="flex flex-col gap-y-4">
                <span className="text-xl lg:text-5xl font-medium">Enter</span>
                <span className="text-4xl lg:text-8xl font-bold">Freeslot</span>

                <span className="font-medium text-xl lg:text-5xl text-[#A4A4A4]">
                  by STC
                </span>
              </p>
            </div>
            <div className=" flex flex-col py-7 gap-y-4 justify-between items-center lg:flex-row  bg-white rounded-lg  px-10">
              <img
                className="lg:h-[300px] lg:w-[300px]  w-[200px] object-contain"
                loading="lazy"
                src="/assets/landing-1.png"
                alt="scheduling meetings"
              />
              <div className="flex w-full justify-center items-center">
                <p className=" lg:text-4xl lg:w-3/4">
                  In this fast-paced world, it is hard to keep track of
                  one&apos;s schedule. And, it is harder to find a perfect time
                  when you & your friends are off- work. Freeslot is the
                  solution. <br />A picture and registration number is all it
                  takes.
                </p>
              </div>
            </div>
          </div>
        </FullPageScroll>
        <FullPageScroll>
          <div className="flex flex-col gap-y-4 w-full items-center justify-center h-full">
            <PageHeading title="Features" />
            <div className="flex flex-col lg:flex-row gap-x-20 gap-y-6 ">
              {features.map((feature, idx) => (
                <FeaturesCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </FullPageScroll>
        <FullPageScroll>
          <div className="w-full lg:mt-14">
            <div className="lg:grid grid-cols-2 ">
              <div className="ml-10 hidden lg:flex flex-col gap-y-4">
                <p className="font-bold text-6xl">Get in touch</p>
                <img
                  loading="lazy"
                  className="w-1/2"
                  src="/assets/contact.png"
                  alt="get in touch"
                />
              </div>

              <div>
                <p className="text-2xl font-bold lg:hidden text-center">
                  Get in touch
                </p>
                <div className="h-full  flex flex-col  items-center justify-center w-full">
                  <ContactUs isHomePage={true} />
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </FullPageScroll>
      </div>
      {/* <div className="flex flex-col px-4 lg:px-12 py-12 gap-y-32 ">
        <div className="flex flex-col gap-y-8 lg:grid grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <p className="font-bold text-4xl lg:text-7xl">
              Scheduling
              <br />
              meetings for <i className="text-bg-primary">everyone</i>
            </p>
          </div>
          <div className="flex justify-center w-full px-8">
            <IllLogo />
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
          <div className=" flex flex-col gap-y-4 justify-between lg:flex-row  bg-white rounded-lg pt-14 px-10">
            <div className="w-1/2">
              <img
                loading="lazy"
                src="/assets/landing-1.png"
                alt="scheduling meetings"
              />
            </div>
            <div className="flex w-full justify-center items-center">
              <p className=" lg:text-4xl lg:w-3/4 py-4">
                In this fast-paced world, it is hard to keep track of one&apos;s
                schedule. And, it is harder to find a perfect time when you &
                your friends are off- work. Freeslot is the solution. <br />A
                picture and registration number is all it takes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <PageHeading title="Features" />
          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-6">
            {features.map((feature, idx) => (
              <FeaturesCard key={idx} {...feature} />
            ))}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 ">
          <div className="ml-10 hidden lg:flex flex-col gap-y-4">
            <p className="font-bold text-6xl">Get in touch</p>
            <img
              loading="lazy"
              className="w-1/2"
              src="/assets/contact.png"
              alt="get in touch"
            />
          </div>

          <div className="h-full">
            <p className="text-2xl font-bold lg:hidden text-center">
              Get in touch
            </p>
            <div className="h-full">
              <ContactUs isHomePage={true} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
