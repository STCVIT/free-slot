import PageHeading from "../components/Headings/PageHeading";
import Socials from "../components/Socials/Socials";
import MainNavbar from "../components/Menus/MainNavbar";
const AboutCard = ({ title, desc }) => {
  return (
    <div className="rounded-md drop-shadow bg-white px-6 py-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="grid grid-cols-10 gap-x-12">
        <div className="col-span-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/${title
              .toLowerCase()
              .replace(" ", "-")}.png`}
            alt={title}
          />
        </div>
        <div className="col-span-7 flex items-center">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "THE PROJECT",
    desc: `In present times, where people have busy schedules and it is difficult for them to find the time slot suitable for them, asking each member of the team individually is a tedious task. In a meeting where inputs of all the members are required, short attendance due to conflicting time schedule hampers the objective of the meeting`,
  },
  {
    title: "THE IDEA",
    desc: `The idea of FreeSlot originated with the thought of reducing human effort of asking each person his schedule and manually finding a common slot. This project will give the user or the meeting lead an ease to schedule a meeting with maximum participants attending it.     `,
  },
  {
    title: "THE PURPOSE",
    desc: `The versatility of this project enables everyone to use it irrespective of their technical expertise. The easy interface is 
    aimed at making the project easy to use for students in VIT.`,
  },
  {
    title: "THE COMMUNITY",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
];

const About = () => {
  document.title = "About";
  return (
    <>
      <MainNavbar active="about" />
      <div>
        <PageHeading title="About" />
        <div className="px-[30%] flex flex-col gap-y-16">
          {data.map((item, idx) => (
            <AboutCard
              key={idx}
              title={item.title}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
        {/* <div className="flex w-full py-4 px-2 justify-center items-center"> */}
        <Socials />
        {/* </div> */}
      </div>
    </>
  );
};

export default About;
