/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Link } from "react";
import { ProfileDropDown } from "./Navbar/NavButton/LinkData";
import { Menu, Transition } from "@headlessui/react";
import profile from "../assets/Profile.svg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const dropdownOptions = ProfileDropDown.map((option) => {
  return (
    <Menu.Item >
      {({ active }) => (
        <a href={option.path}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm w-"
          ) }
        >
          {option.linkName}
        </a>
      )}
    </Menu.Item>
  );
});

export default function Example() {
  return (
    <Menu as="div" className="flex items-center px-4 -mb-1">
      <div>
        <Menu.Button className="">
          <img src={profile} alt="" className="h-1/6" />
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
        <Menu.Items className="origin-top-right absolute right-20 top-20 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0 focus:outline-none">
            {dropdownOptions}
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
