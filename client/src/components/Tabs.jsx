import NavButton from "./NavButton/NavButton";
import UpcomingPage from "./MeetingsPges/UpcomingData";
export function Tabs({ filter }) {
  return (
    <div>
      <div className="text-center text-4xl font-bold p-4 py-5 ">Meetings</div>
      <div className="border-b w-2/4">
        <NavButton filter={filter} />
      </div>
      <div id="MeetingCards">{/* <UpcomingPage filter={filter} /> */}</div>
    </div>
  );
}

export default Tabs;
