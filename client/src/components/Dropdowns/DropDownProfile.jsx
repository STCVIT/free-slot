/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { UserAuth } from "../../context/UserAuthContext";

import { Link, useNavigate } from "react-router-dom";
const items = [
  {
    name: "Profile",
    to: "/profile",
  },
  {
    name: "Contact Us",
    to: "/contactUs",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = async () => {
    await logOut();
    navigate("/");
    console.log("logged out");
  };
  const [open, setOpen] = useState(false);
  return (
    <Menu as="div" className="flex items-center">
      <Menu.Button onClick={() => setOpen(!open)}>My Account</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-5 lg:right-1 top-20 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0 focus:outline-none">
          <div className="py-1">
            {items.map((item, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => (
                  <Link
                    to={item.to}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm w-full !text-left"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}

            <Menu.Item>
              {({ active }) => (
                <Link
                  onClick={logOutHandler}
                  to="/"
                  className={classNames(
                    active ? "bg-gray-100 text-[#CC2F3F]" : "text-[#CC2F3F]",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
            {/* <form method="POST" action="/">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-red-900' : 'text-gray-700',
                                            'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
