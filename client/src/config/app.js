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
    group: "Apple",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 2,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Cat",
    members:
      "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul, Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul,",
    day: "Tuesday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 3,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 4,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 5,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 6,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 7,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 8,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 9,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 10,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 11,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 12,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 13,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 14,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 15,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 16,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 17,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 18,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 19,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "upcoming",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Thursday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
];

const CancelledData = [
  {
    id: 20,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 21,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 22,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 23,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 24,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 25,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Cancelled",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Friday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
];

const PastData = [
  {
    id: 26,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 27,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 28,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Tuesday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 29,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Wednesday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 30,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Thursday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
  },
  {
    id: 31,
    time: "4:00 p.m. -  5:30 p.m.",
    place: "foodies",
    by: "Past",
    group: "Free Slot Project Team",
    members: "Ayush Mhetre, Dev Mehta, Ramya, Saarim, Mehul",
    day: "Monday",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum`,
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
