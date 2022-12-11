import React from "react";
import Freeslotcard from "./Freeslotcard";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import PageHeading from "../Headings/PageHeading";
const Freeslotsection = () => {
  const { data, setData } = FindFreeSlot();
  return (
    <>
      <div className="mx-auto">
        <PageHeading title="Freeslots" />
        <div className="px-7 grid grid-cols-4 gap-x-6 gap-y-7 mx-auto">
          <Freeslotcard data={data} />
        </div>
      </div>
    </>
  );
};

export default Freeslotsection;
