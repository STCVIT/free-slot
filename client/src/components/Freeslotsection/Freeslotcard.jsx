import React, { useEffect } from "react";
import moment from "moment";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { useNavigate } from "react-router-dom";

const Freeslotcard = (props) => {
  const {
    chosenSlotTime,
    setChosenSlotTime,
    chosenDate,
    setChosenDate,
    currentTeamId,
    saveTeam,
  } = FindFreeSlot();

  const navigate = useNavigate();
  const clickHandler = (data, index) => {
    setChosenDate(
      moment()
        .add(1, "weeks")
        .isoWeekday(index + 1)
        .format("ddd, D MMM, YYYY")
    );
    console.log(data);

    setChosenSlotTime(data);
    navigate("/addEvent");
  };
  return (
    <div>
      <div
        className=" w-full"
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
          gridGap: "1rem",
          // justifyContent: "space-between",
        }}
      >
        {props.data?.map((days, index) =>
          days.map((value) => (
            <div
              className="max-w-sm rounded-lg overflow-hidden shadow-lg col-span-1"
              key={index}
            >
              <div className="px-6 py-4 grid grid-rows-4 gap-2">
                <div className="text-base">
                  {moment()
                    .add(1, "weeks")
                    .isoWeekday(index + 1)
                    .format("ddd")}
                  ,{" "}
                  {index + 1 < moment().isoWeekday()
                    ? moment()
                        .add(1, "weeks")
                        .isoWeekday(index + 1)
                        .format("D MMM, YYYY")
                    : moment()
                        .isoWeekday(index + 1)
                        .format("D MMM, YYYY")}
                </div>
                <div className="text-xl font-bold">
                  {value.start_time} - {value.end_time}
                </div>
                <div className="text-sm">
                  Duration:{" "}
                  {moment(value.end_time, "hh:mm a").diff(
                    moment(value.start_time, "hh:mm a"),
                    "minutes"
                  )}{" "}
                  minutes
                </div>
                {saveTeam && (
                  <div className="bg-myBlue flex  justify-center rounded-lg text-center text-white ">
                    <button
                      className="px-6 py-2.5 w-full"
                      onClick={() => clickHandler(value, index)}
                    >
                      Make Event
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Freeslotcard;
