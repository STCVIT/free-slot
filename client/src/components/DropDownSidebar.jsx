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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [modalOnNew, setModalOnNew] = useState(false);
  const [choiceNew, setChoiceNew] = useState(false);

  const [modalOnChoose, setModalOnChoose] = useState(false);
  const [choiceChoose, setChoiceChoose] = useState(false);

  const [modalOnLink, setModalOnLink] = useState(false);
  const [choiceLink, setChoiceLink] = useState(false);

  const clickedLink = () => {
    setModalOnLink(true);
  };

  const clickedNew = () => {
    setModalOnNew(true);
  };

  const clickedChoose = () => {
    setModalOnChoose(true);
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <p className=" justify-center items-center rounded-full bg-blueTheme p-5 px-8 tracking-wider text-slate-100">
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
          <Menu.Items className="origin-top-right absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0 focus:outline-none">
            <div className="py-1 p-2">
              <Menu.Item>
                {({ active }) => (
                  <>
                    <button
                      className="flex px-6 items-center p-2"
                      onClick={clickedNew}
                    >
                      <img src={Plus} alt="" className="h-4 w-4" />
                      <p
                        className={classNames(
                          active
                            ? "text-sm bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Make new team
                      </p>
                    </button>
                  </>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <>
                    <button
                      className="flex px-6 items-center p-2"
                      onClick={clickedChoose}
                    >
                      <img src={List} alt="" className="h-4 w-4 " />
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Choose from existing
                      </p>
                    </button>
                  </>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <>
                    <button
                      class="flex px-6 items-center p-2"
                      onClick={clickedLink}
                    >
                      <img src={Link} alt="" className="h-4 w-4" />
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Create link
                      </p>
                    </button>
                  </>
                )}
              </Menu.Item>
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
