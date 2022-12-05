/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Plus from "../assets/Plus.svg";
import List from "../assets/List.svg";
import Link from "../assets/Link.svg";
import ModalNewTeam from "./ModalNewTeam";
import { useState } from "react";
import ModalChooseTeam from "./ModalChooseTeam";
import ModalLink from "./ModalLink";
import Responses from "./Responses/Responses";
import { createRoot } from "react-dom/client";
import axios from "axios";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  // axios.get("http://localhost:6969/").then((res) => {
  //   console.log(res.data);
  // });
  const [modalOnNew, setModalOnNew] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [choiceNew, setChoiceNew] = useState(false);

  const [modalOnChoose, setModalOnChoose] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [choiceChoose, setChoiceChoose] = useState(false);

  const [modalOnLink, setModalOnLink] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [choiceLink, setChoiceLink] = useState(false);

  const clickedLink = () => {
    const root = createRoot(document.getElementById("mainDiv"));
    root.render(<Responses />);
  };

  const clickedNew = () => {
    setModalOnNew(true);
  };

  const clickedChoose = () => {
    setModalOnChoose(true);
  };
  const items = [
    { name: "Make New Team", icon: Plus, onClick: clickedNew },
    { name: "Choose from existing", icon: List, onClick: clickedChoose },
    { name: "Create Link", icon: Link, onClick: clickedLink },
  ];
  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-left z-50 backdrop-blur"
      >
        <div>
          <Menu.Button className="">
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
                      <button
                        className="flex px-6 items-center p-2"
                        onClick={item.onClick}
                      >
                        <img src={item.icon} alt="" className="h-4 w-4" />
                        <p
                          className={classNames(
                            active
                              ? "text-sm bg-gray-100 text-gray-900 "
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {item.name}
                        </p>
                      </button>
                    </>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {modalOnNew && (
        <ModalNewTeam
          setModalOnNew={setModalOnNew}
          setChoiceNew={setChoiceNew}
        />
      )}
      {modalOnChoose && (
        <ModalChooseTeam
          setModalOnChoose={setModalOnChoose}
          setChoiceChoose={setChoiceChoose}
        />
      )}
      {modalOnLink && (
        <ModalLink
          setModalOnLink={setModalOnLink}
          setChoiceLink={setChoiceLink}
        />
      )}
    </>
  );
}
