import NavButton from "./NavButton/NavButton";
import UpcomingPage from "./MeetingsPges/UpcomingData";
export function Tabs() {
  return (
    <div className="col-span-5">
      <div className="text-center text-4xl font-bold p-4 py-5 ">Meetings</div>
      <div className="border-b w-2/4">
        <NavButton />
      </div>
      <div id="MeetingCards">
        <UpcomingPage />
      </div>
    </div>
  );
}

export default Tabs;
