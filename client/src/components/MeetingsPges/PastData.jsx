import MeetingCardTemplate from "../MeetingCardTemplate";

const PastData = [
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
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

const PastPage = () => {
  return <MeetingCardTemplate list={PastData} />;
};

export default PastPage;
