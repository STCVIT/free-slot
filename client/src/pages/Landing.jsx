import React, { useEffect } from "react";
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
    <div className="bg-white rounded-md p-10 w-1/3">
      <div className="flex  justify-center">
        <img
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
  const [state, setState] = React.useState({
    right: false,
  });
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
    <div className="pb-4">
      <div className="flex justify-between px-12 py-7 border-b-2">
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
      <div className="flex flex-col px-4 lg:px-12 py-12 gap-y-32 ">
        <div className="flex flex-col gap-y-8 lg:grid grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <p className="font-bold text-4xl lg:text-7xl">
              Scheduling
              <br />
              meetings for <i className="text-myBlue">everyone</i>
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
          <div className=" flex flex-col gap-y-4 justify-between lg:flex-row  bg-white rounded-md pt-14 px-10">
            <div className="w-1/2">
              <img src="/assets/landing-1.png" alt="scheduling meetings" />
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
      </div>
      <Socials />
    </div>
  );
};

export default Landing;
