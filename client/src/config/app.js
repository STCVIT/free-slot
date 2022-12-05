// import UpcomingData from "./UpcomingData";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const UpcomingData = [
  {
    id: 1,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 2,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 3,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 4,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 5,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 6,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 7,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 8,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 9,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 10,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 11,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 12,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 13,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 14,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 15,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 16,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 17,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 18,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 19,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    day: "Thursday",
  },
];

const CancelledData = [
  {
    id: 20,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 21,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 22,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 23,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 24,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 25,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    day: "Friday",
  },
];

const PastData = [
  {
    id: 26,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 27,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Monday",
  },
  {
    id: 28,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Tuesday",
  },
  {
    id: 29,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Wednesday",
  },
  {
    id: 30,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Thursday",
  },
  {
    id: 31,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    day: "Monday",
  },
];

app.get("/", (req, res) => {
  let tab = req.query.tab;
  switch (tab) {
    case "upcoming":
      res.send(UpcomingData);
      break;
    case "past":
      res.send(PastData);
      break;
    case "cancelled":
      res.send(CancelledData);
      break;
  }
});

app.delete("/", (req, res) => {
  const tab = req.body.tab;
  switch (tab) {
    case "upcoming":
      {
        for (let i = 0; i < UpcomingData.length; i++) {
          if (UpcomingData[i].id === req.body.id) {
            UpcomingData.splice(i, 1);
            break;
          }
        }
        console.log(UpcomingData, req.body.id);
        res.send(UpcomingData);
      }
      break;
    case "past":
      {
        for (let i = 0; i < PastData.length; i++) {
          if (PastData[i].id === req.body.id) {
            PastData.splice(i, 1);
            break;
          }
        }

        console.log(PastData, req.body.id);
        res.send(PastData);
      }
      break;
    case "cancelled":
      {
        for (let i = 0; i < CancelledData.length; i++) {
          if (CancelledData[i].id === req.body.id) {
            CancelledData.splice(i, 1);
            break;
          }
        }
        console.log(CancelledData, req.body.id);
        res.send(CancelledData);
      }
      break;
  }
});

app.listen(6969, () => {
  console.log("Server started on port 6969");
});
