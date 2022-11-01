import NavButton from "./NavButton/NavButton";
import UpcomingPage from "./MeetingsPges/UpcomingData";
export function Tabs({ day, group, time, date }) {
  return (
    <div>
      <div className="text-center text-4xl font-bold p-4 py-5 ">Meetings</div>
      <div className="border-b w-2/4">
        <NavButton />
      </div>
      <div id="MeetingCards">
        <UpcomingPage day={localStorage.getItem("day")} />
      </div>
    </div>
  );
}

export default Tabs;
