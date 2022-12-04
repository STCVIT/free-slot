import TabNavbar from "./TabNavbar/TabNavbar";
import UpcomingPage from "./MeetingsPges/UpcomingData";
import PageHeading from "./Headings/PageHeading";
export function Tabs({ filter }) {
  return (
    <div>
      <PageHeading title="Meetings" />
      <div className="border-b md:w-2/4">
        <TabNavbar filter={filter} />
      </div>
      <div id="MeetingCards">
        <UpcomingPage filter={filter} />
      </div>
    </div>
  );
}

export default Tabs;
