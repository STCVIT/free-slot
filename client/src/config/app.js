// import UpcomingData from "./UpcomingData";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());

const UpcomingData = [{
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "upcoming",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Tuesday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Thursday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodiesasddddddddddddddddd",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
];

const CancelledData = [{
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "Cancelled",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
];

const PastData = [{
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "Past",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
    {
        time: "4:00 p.m. -  5:30 p.m.",
        place: "foodies",
        by: "devmehta",
        members: "dev, ramya, sakshi, mehul  ",
        day: "Monday"
    },
];


app.get("/", (req, res) => {
    let tab = req.query.tab
    switch (tab) {
        case "upcoming":
            res.send(UpcomingData)
            break;
        case "past":
            res.send(PastData)
            break;
        case "cancelled":
            res.send(CancelledData)
            break;
    }
});

app.delete("/", (req, res) => {
    const tab = req.body.tab
    switch (tab) {
        case "upcoming": {
            UpcomingData.splice(req.body.id, 1);
            console.log(UpcomingData, req.body.id)
            res.send(UpcomingData);
        }
        break;
    case "past": {
        PastData.splice(req.body.id, 1);
        console.log(PastData, req.body.id)
        res.send(PastData);
    }
    break;
    case "cancelled": {
        CancelledData.splice(req.body.id, 1);
        console.log(CancelledData, req.body.id)
        res.send(CancelledData);
    }
    break;

    }


})


app.listen(6969, () => {
    console.log("Server started on port 6969");
});