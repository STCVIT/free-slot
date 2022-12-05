import TabNavbar from "../TabNavbar/TabNavbar";
import PageHeading from "../Headings/PageHeading";
import AllPages from "./Allpages";
import { useState, useEffect } from "react";

const Tabs = ({ filter, setGroup }) => {
  const [numberOfCards, setNumberOfCards] = useState([]);

  return (
    <div>
      <PageHeading title="Meetings" />
      <div className="sticky top-0 z-50 drop-shadow">
        <div className="border-b w-full bg-white pt-4">
          <TabNavbar filter={filter} numberOfCards={numberOfCards} />
        </div>
      </div>
      <div id="MeetingCards">
        <AllPages
          filter={filter}
          tab="upcoming"
          setNumberOfCards={setNumberOfCards}
        />
      </div>
    </div>
  );
};

export default Tabs;
