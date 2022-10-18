import UpcomingPage from "../MeetingsPges/UpcomingData";
import CancelledPage from "../MeetingsPges/CancelledData";
import PastPage from "../MeetingsPges/PastData";
export default [
  {
    linkName: "Upcoming",
    id: "upcoming",
    on: true,
    component: <UpcomingPage />,
  },
  {
    linkName: "Cancelled",
    id: "cancelled",
    on: false,
    component: <CancelledPage />,
  },
  {
    linkName: "Past",
    id: "past",
    on: false,
    component: <PastPage />,
  },
];
