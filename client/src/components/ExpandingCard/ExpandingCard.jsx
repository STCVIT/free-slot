import { useState } from "react";
import { Accordion } from "@mui/material";
import { Children } from "react";

import { IoChevronDownOutline } from "react-icons/io5";
import slugify from "slugify";
const data = [
  {
    id: 1,
    title: "Create Account",
    desc: "Create an account or login into yours if already have one",
  },
  {
    id: 2,
    title: "Add peers",
    desc: "Enter the registrations number of your meeting members and make a team",
  },
  {
    id: 3,
    title: "Make Event",
    desc: "Choose the free slot timings of your convenience and schedule a meet for everyone.",
  },
];

const ExpandingCard = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className=" lg:my-10 lg:px-16  my-4">
        <div className="flex w-full gap-x-10">
          <div className="w-full lg:w-1/2 min-h-full border">
            {Children.toArray(
              data.map((item, idx) => {
                const isActive = data[active].title === item.title;
                return (
                  <div
                    onClick={() => setActive(idx)}
                    className={`transition-all duration-300 flex flex-col relative border-b gap-y-4 w-full h-1/6 cursor-pointer justify-center p-2 ${
                      isActive && " !h-4/6 "
                    }`}
                  >
                    <div className="flex justify-between items-start ">
                      <h1
                        className={` transition-all flex justify-between items-center w-full duration-300 ease-in-out p-0 m-0 font-bold text-2xl ${
                          isActive && "!text-3xl lg:!text-5xl"
                        }`}
                      >
                        {item.title}{" "}
                      </h1>
                      <div
                        className={`h-fit transition-all duration-300 ease-in-out absolute top-1 right-1 ${
                          isActive && "rotate-180"
                        }`}
                      >
                        <IoChevronDownOutline size={25} />
                      </div>
                    </div>
                    <p
                      className={`transition-all w-3/4 duration-150 ease-in text-[0px] ${
                        isActive && "!text-lg lg:!text-2xl"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-1/2 hidden lg:block">
            <img
              className={`rounded-md h-full`}
              src={`/assets/aboutImage${active + 1}.png`}
              alt={data[active].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandingCard;
