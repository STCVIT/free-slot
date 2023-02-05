import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import { UserAuth } from "../../context/UserAuth";
import { UserAuth } from "../../context/UserAuthContext";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Divider } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
const mainClass =
  " font-light cursor-pointer transition-colors duration-300 w-full";
const activeClass = " border-black !font-bold";
const inactiveClass = "border-transparent hover:border-gray-200";
const MobileNav = ({ optionList, activeTab }) => {
  const [state, setState] = React.useState({
    right: false,
  });
  const navigate = useNavigate();
  const { logOut } = UserAuth();
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
  const logOutHandler = async () => {
    await logOut();
    navigate("/");
    console.log("logged out");
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {React.Children.toArray(
          optionList.map((item) => (
            <div>
              <ListItem disablePadding>
                <ListItemButton className="border-b-2 border-black">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{ color: "black" }}
                    className={` ${mainClass} ${
                      activeTab === item.toLocaleLowerCase()
                        ? activeClass
                        : inactiveClass
                    }`}
                  >
                    {item}
                  </Link>
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))
        )}
        {}
        <ListItem key={1} disablePadding>
          <ListItemButton className="border-b-2 border-black">
            <button className="text-left w-full" onClick={logOutHandler}>
              Logout
            </button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
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
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileNav;
