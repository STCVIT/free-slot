/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import ModalNewTeam from "./ModalNewTeam";
import { useState } from "react";
import ModalChooseTeam from "./ModalChooseTeam";
import ModalLink from "./ModalLink";
import Responses from "./Responses/Responses";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import ComponentModal from "./ComponentModal";
import axios from "axios";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "white",

  borderRadius: "0.5rem",
  boxShadow: 12,
  p: 4,
};
export default function Example() {
  // axios.get("http://localhost:6969/").then((res) => {
  //   console.log(res.data);
  // });
  const [modalOnNew, setModalOnNew] = useState(false);

  const [modalOnChoose, setModalOnChoose] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [choiceChoose, setChoiceChoose] = useState(false);
  const [chooseTeamOpen, setChooseTeamOpen] = useState(false);
  const [modalOnLink, setModalOnLink] = useState(false);

  const [newTeamOpen, setNewTeamOpen] = useState(false);
  const [responsesOpen, setResponsesOpen] = useState(false);
  const clickedLink = () => {
    setResponsesOpen(true);
  };

  const clickedNew = () => {
    setNewTeamOpen(true);
  };

  const clickedChoose = () => {
    setChooseTeamOpen(true);
  };
  const items = [
    {
      name: "Make New Team",
      icon: <RiAddLine size={25} color="rgb(51 137 255" />,
      onClick: clickedNew,
    },
    {
      name: "Choose from existing",
      icon: <AiOutlineUnorderedList size={25} color="rgb(51 137 255" />,
      onClick: clickedChoose,
    },
    {
      name: "Create Link",
      icon: <BiLinkExternal size={25} color="rgb(51 137 255" />,
      onClick: clickedLink,
    },
  ];

  const ComponentModal = () => {
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
          <Box sx={style}>
            {chooseTeamOpen && (
              <ModalChooseTeam onClose={() => setChooseTeamOpen(false)} />
            )}
            {newTeamOpen && (
              <ModalNewTeam onClose={() => setNewTeamOpen(false)} />
            )}
            {responsesOpen && (
              <Responses onClose={() => setResponsesOpen(false)} />
            )}
          </Box>
        </Modal>
      </div>
    );
  };
  return (
    <div>
      <ComponentModal />
      <Menu as="div" className="relative inline-block text-left z-50 ">
        <div>
          <Menu.Button>
            <p className=" justify-center items-center rounded-full bg-myBlue p-5 px-8 tracking-wider text-slate-100">
              + Create
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
          <Menu.Items className="origin-top-right absolute left-0 mt-2 w-64 rounded-md shadow-xl bg-white ring-2 ring-myBlue drop-shadow  focus:outline-none">
            <div className="py-1 p-2">
              {items.map((item) => (
                <Menu.Item>
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
      {modalOnNew && <ModalNewTeam />}
      {modalOnChoose && (
        <ModalChooseTeam
          setModalOnChoose={setModalOnChoose}
          setChoiceChoose={setChoiceChoose}
        />
      )}
      {modalOnLink && <ModalLink />}
    </div>
  );
}
