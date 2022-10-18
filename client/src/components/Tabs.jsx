import NavButton from "./NavButton/NavButton";
import UpcomingPage from "./MeetingsPges/UpcomingData";
export function Tabs() {
  // const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="col-span-5">
      <div className="text-center text-4xl font-bold p-4 py-5 ">Meetings</div>
      <div className="border-b w-2/4">
        <NavButton />
        {/* Loop through tab data and render button for each. */}
        {/* {["Upcoming", "Cancelled", "Past"].map((tab, idx) => {
          return (
            <button
            key={idx}
            className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                ? "border-blueTheme"
                : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
              >
              {tab}
              </button>
              );
            })} */}
      </div>
      <div id="MeetingCards">
        <UpcomingPage />
      </div>
    </div>
  );
}

export default Tabs;
