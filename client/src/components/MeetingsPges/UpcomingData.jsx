import MeetingCardTemplate from "../MeetingCardTemplate";

const UpcomingData = [
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Upcoming",
    members: "dev, ramya, sakshi, mehul  ",
  },
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "devmehta",
    members: "dev, ramya, sakshi, mehul  ",
  },
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "devmehta",
    members: "dev, ramya, sakshi, mehul  ",
  },
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "devmehta",
    members: "dev, ramya, sakshi, mehul  ",
  },
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "devmehta",
    members: "dev, ramya, sakshi, mehul  ",
  },
];

const UpcomingPage = () => {
  return <MeetingCardTemplate list={UpcomingData} />;
};

export default UpcomingPage;
