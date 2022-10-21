import Home from "../../../pages/Home";
import Schedule from "../../Schedule/Schedule";
const Navbar = [
  {
    linkName: "Home",
    id: "home",
    on: true,
    component: <Home />,
  },
  {
    linkName: "My Schedule",
    id: "schedule",
    on: false,
    component: <Schedule />,
  },
  {
    linkName: "About",
    id: "about",
    on: false,
    component: "a",
  },
];

const ProfileDropDown = [
  {
    linkName: "Preferences",
    id: "preferences",
    on: false,
    path: "/",
  },
  {
    linkName: "Profile",
    id: "profile",
    on: false,
    path: "/profile",
  },
  {
    linkName: "Contact Us",
    id: "contactUs",
    on: false,
    path: "/",
  },
  {
    linkName: "Logout",
    id: "logout",
    on: false,
    path: "/",
  },
];

export { Navbar, ProfileDropDown };
