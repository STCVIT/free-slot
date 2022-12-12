import React from "react";

const Modify = () => {
  return (
    <div className="grid m-2 p-2 place-content-center">
      <div className="flex justify-center pt-2">
        <div className="rounded-lg bg-grey-700 w-96 max-w-sm">
          <div className="place-content-center">
            <p className="font-medium leading-tight text-2xl pt-2 pl-20">
              Schedule
            </p>
          </div>
          <div className="justify-center mt-8">
            <button
              type="Working Hours"
              className="w-90 px-4 py-2 text-black font-medium bg-white border-1 border-black text-sm w-30 ml-3 rounded-lg"
            >
              Working Hours
            </button>
          </div>
          <div className="justify-center mt-8">
            <button
              type="cancel"
              className="w-90 px-4 py-2 text-black font-medium bg-white border-none text-sm  w-30 ml-3 rounded-lg "
            >
              Cancel
            </button>
            <button
              type="save"
              className="w-90 px-4 py-2 text-white font-medium bg-blue-600  border-none text-sm w-30 ml-3 rounded-lg shadow-xl"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modify;
