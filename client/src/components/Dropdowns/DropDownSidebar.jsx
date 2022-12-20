/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import ModalNewTeam from "../Sidebar/ModalNewTeam";
import { useState, useEffect } from "react";
import ModalChooseTeam from "../Sidebar/ModalChooseTeam";
import Responses from "../Sidebar/Responses";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import ComponentModal from "./ComponentModal";
import axios from "axios";
import { ClickAwayListener } from "@mui/material";

export default function Example({ data }) {
  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.matchMedia("(min-width: 1024px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // axios.get("http://localhost:6969/").then((res) => {
  //   console.log(res.data);
  // });

  const [chooseTeamOpen, setChooseTeamOpen] = useState(false);
  const [newTeamOpen, setNewTeamOpen] = useState(false);
  const [responsesOpen, setResponsesOpen] = useState(false);
  const clickedLink = () => {
    setResponsesOpen(true);
    setNewTeamOpen(false);
    setChooseTeamOpen(false);
  };

  const clickedNew = () => {
    setNewTeamOpen(true);
    setResponsesOpen(false);
    setChooseTeamOpen(false);
  };

  const clickedChoose = () => {
    setChooseTeamOpen(true);
    setResponsesOpen(false);
    setNewTeamOpen(false);
  };
  const items = [
    {
      name: "Make New Team",
      icon: <RiAddLine size={16} color="rgb(51 137 255" />,
      onClick: clickedNew,
    },
    {
      name: "Choose from existing",
      icon: <AiOutlineUnorderedList size={16} color="rgb(51 137 255" />,
      onClick: clickedChoose,
    },
    {
      name: "Create Link",
      icon: <BiLinkExternal size={16} color="rgb(51 137 255" />,
      onClick: clickedLink,
    },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isLg ? "75%" : "95%",
    bgcolor: "white",

    borderRadius: "0.5rem",
    boxShadow: 12,
    p: 4,
  };
  const createStyle = isLg
    ? {}
    : { position: "fixed", zIndex: 10000, bottom: "5vh", right: "7vw" };

  const ComponentModal = () => {
    function modalOff() {
      if (responsesOpen) setResponsesOpen(false);
      if (newTeamOpen) setNewTeamOpen(false);
      if (chooseTeamOpen) setChooseTeamOpen(false);
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modalOff();
    });
    return (
      <div>
        <Modal
          BackdropProps={{
            style: {
              backgroundColor: "white",
              opacity: 0.8,
            },
          }}
          open={responsesOpen || newTeamOpen || chooseTeamOpen}
          onClose={() => setResponsesOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ClickAwayListener onClickAway={modalOff}>
            <Box sx={style}>
              {chooseTeamOpen && (
                <ModalChooseTeam
                  data={data}
                  onClose={() => setChooseTeamOpen(false)}
                />
              )}
              {newTeamOpen && (
                <ModalNewTeam onClose={() => setNewTeamOpen(false)} />
              )}
              {responsesOpen && (
                <Responses onClose={() => setResponsesOpen(false)} />
              )}
            </Box>
          </ClickAwayListener>
        </Modal>
      </div>
    );
  };
  return (
    <div style={createStyle} className="relative right-0">
      <ComponentModal />
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button>
            <p className=" justify-center items-center rounded-full bg-myBlue p-5 px-8 tracking-wider text-slate-100">
              {isLg ? "+ Create" : "+"}
            </p>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`${
              !isLg ? "bottom-20 right-5" : ""
            } absolute z-50 mt-2 w-max rounded-md shadow-xl bg-white ring-2 ring-myBlue drop-shadow  focus:outline-none`}
          >
            <div className="py-1 p-3">
              {items.map((item, idx) => (
                <Menu.Item key={idx}>
                  {({ active }) => (
                    <>
                      <div
                        className="flex gap-x-2 p-2 cursor-pointer items-center"
                        onClick={item.onClick}
                      >
                        <div>{item.icon}</div>
                        <div className={`text-gray-${active ? "900" : "700"}`}>
                          {item.name}
                        </div>
                      </div>
                    </>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
