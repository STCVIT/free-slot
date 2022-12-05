/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./Profile";
import ContactUs from "./contactUs/contactUs";
const clickedLink = (comp) => {
  const root = createRoot(document.getElementById("mainDiv"));
  if (comp === "Profile") {
    root.render(<Profile />);
  }
  if (comp === "Contact Us") {
    root.render(<ContactUs />);
  }
};
const items = [
  {
    Profile: "/profile",
  },
  {
    "Contact Us": "/contactUs",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <Menu as="div" className="flex items-center">
      <div>
        <Menu.Button onClick={() => setOpen(!open)}>My Account</Menu.Button>
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
        <Menu.Items className="origin-top-right absolute right-1 top-20 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => clickedLink(Object.keys(item)[0])}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm w-full !text-left"
                    )}
                  >
                    {Object.keys(item)[0]}
                  </button>
                )}
              </Menu.Item>
            ))}

            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-[#CC2F3F]" : "text-[#CC2F3F]",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Logout
                </a>
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
