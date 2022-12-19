import PageHeading from "../components/Headings/PageHeading";
import Socials from "../components/Socials/Socials";
import MainNavbar from "../components/Menus/MainNavbar";
import ExpandingCard from "../components/ExpandingCard/ExpandingCard";
const AboutCard = ({ title, desc, reverse }) => {
  return (
    <div className="flex flex-col py-4 lg:py-10 justify-between items-center bg-white rounded-md h-full">
      <div>
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
      <div className="h-2/3 my-3 lg:my-10">
        <img
          className="h-full"
          src={`/assets/${title.toLowerCase().replace(" ", "-")}.png`}
          alt={title}
        />
      </div>
      <div className="flex justify-center h-full">
        <p className="lg:w-3/4 lg:text-2xl px-3">{desc}</p>
      </div>
    </div>
  );
};
const data = [
  {
    title: "THE PROJECT",
    reverse: false,
    desc: `In present times, where people have busy schedules and it is difficult for them to find the time slot suitable for them, asking each member of the team individually is a tedious task. In a meeting where inputs of all the members are required, short attendance due to conflicting time schedule hampers the objective of the meeting`,
  },
  {
    title: "IDEA BEHIND",
    reverse: true,
    desc: `The idea of FreeSlot originated with the thought of reducing human effort of asking each person his schedule and manually finding a common slot. This project will give the user or the meeting lead an ease to schedule a meeting with maximum participants attending it.     `,
  },
];

const About = () => {
  document.title = "About";
  return (
    <>
      <MainNavbar active="about" />
      <div>
        <PageHeading title="About Us" />
        <div className="flex flex-col gap-y-40 px-11">
          <div className="flex flex-col gap-y-4 lg:grid grid-cols-2 gap-x-16 px-4 lg:px-16">
            {data.map((item, idx) => (
              <AboutCard
                key={idx}
                reverse={item.reverse}
                title={item.title}
                image={item.image}
                desc={item.desc}
              />
            ))}
          </div>
          <ExpandingCard />
          {/* <div className="p-11">
            <img src="/assets/the-purpose.png" alt="illustration" />
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-8xl font-bold">THE COMMUNITY</h3>
            <img
              className="w-1/6 my-10"
              src="/assets/the-community.png"
              alt="community"
            />
            <p className="w-1/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor in dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia .
            </p>
          </div>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default About;
