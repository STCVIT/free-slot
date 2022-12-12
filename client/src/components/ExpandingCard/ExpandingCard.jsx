import { useState } from "react";

const data = [
  {
    image: "/",
    title: "Create Account",
    desc: "Create an account or login into yours if already have one",
  },
  {
    image: "/",
    title: "Add peers",
    desc: "Enter the registrations number of your meeting members and make a team",
  },
  {
    image: "/",
    title: "Make Event",
    desc: "Choose the free slot timings of your convenience and schedule a meet for everyone.",
  },
];

const ExpandingCard = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [currentIdx, setcurrentIdx] = useState([0, 1, 2]);
  const [mouseFinally, setMouseFinally] = useState(true);

  const handleMouseLeave = () => {
    setcurrentIdx([0, 1, 2]);
    setMouseFinally(true);
  };

  const handleMouseEnter = (idx) => {
    setMouseFinally(false);
    setIsHovered(true);
    setcurrentIdx([idx]);
  };
  return (
    <div className="my-10" onMouseLeave={() => handleMouseLeave()}>
      <div className={`flex  w-full rounded-md outline`}>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  items-start border-l border-r border-black p-6 h-[600px] ${
                isHovered && currentIdx.includes(idx)
                  ? "w-full text-full"
                  : "w-0 text-[1px]"
              } ${
                mouseFinally ? "!w-1/3" : ""
              } transition-width duration-1000 ease-in-out`}
              onMouseEnter={() => handleMouseEnter(idx)}
            >
              {!currentIdx.includes(idx) && (
                <div className="text-xl font-semibold">{idx + 1}</div>
              )}
              <div>
                {isHovered && currentIdx.includes(idx) && (
                  <div>
                    <div className="flex flex-row-reverse">
                      <div className="rounded-md p-2 -mx-2">
                        <img
                          className="rounded-md "
                          src={`/assets/image${idx + 1}.png`}
                          alt={item.title}
                        />
                      </div>
                      {currentIdx.length !== 3 && (
                        <div className="flex flex-col gap-y-2 py-2 leading-tight">
                          <p className="text-5xl p-0 m-0 font-bold">
                            {idx + 1}
                          </p>
                          <p className="text-4xl p-0 m-0 font-bold">
                            {item.title}
                          </p>
                          <p className="text-base ">{item.desc}</p>
                        </div>
                      )}
                    </div>
                    {currentIdx.length === 3 && (
                      <div className="flex flex-col gap-y-2 py-2 leading-tight">
                        <p className="text-5xl p-0 m-0 font-bold">{idx + 1}</p>
                        <p className="text-4xl p-0 m-0 font-bold">
                          {item.title}
                        </p>
                        <p className="text-base ">{item.desc}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingCard;
