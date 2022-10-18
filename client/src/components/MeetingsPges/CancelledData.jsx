import MeetingCardTemplate from "../MeetingCardTemplate";

const CancelledData = [
  {
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
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

const CancelledPage = () => {
  return <MeetingCardTemplate list={CancelledData} />;
};

export default CancelledPage;
