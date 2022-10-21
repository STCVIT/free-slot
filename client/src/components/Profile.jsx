import { number } from "prop-types";
import React from "react";

const Profile = () => {
  document.title = "Profile";
  return (
    <div className="bg-gray-100">
      <h1 className="flex w-full justify-center items-center text-center font-semibold text-2xl">
        Profile
      </h1>
      <div className="w-full ">
        <div className="flex w-full h-full md:justify-center px-4">
          <div className="col-span-5 gap-y-3 items-center md:w-2/4 w-full">
            <div className="flex flex-col gap-y-6 items-start justify-start">
              <div className="p-4 rounded-md bg-white w-full">
                <h1 className="text-gray-600 text-2xl mb-4">Login Details</h1>
                <div>
                  <table className="w-full">
                    <tr>
                      <td className="text-start">Name</td>
                      <td className="text-end">Ayush Mhetre</td>
                    </tr>
                    <tr>
                      <td className="text-start">Registration No.</td>
                      <td className="text-end">21BCE2887</td>
                    </tr>
                    <tr>
                      <td className="text-start">Email</td>
                      <td className="text-end">ayush@gmail.com</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 rounded-md p-4 bg-white">
                <h1 className="text-2xl text-gray-600">Timetable</h1>
                <img className="h-full" src={require("../assets/ttSS.png")} />
                <button className=" outline rounded-md outline-blue-600 text-blue-600 p-2 w-fit">
                  Upload new timetable
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 bg-white rounded-md p-4 my-6">
              <form className="flex gap-x-5 w-full md:w-2/4 justify-between">
                <div className="flex flex-col gap-y-2 items-start w-1/2">
                  Date Format
                  <select class="relative form-select border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-full p-3">
                    <option selected>DD/MM/YY</option>
                    <option value="1">MM/DD/YY</option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-2 w-1/2 items-start">
                  Time Format
                  <select class="relative form-select  border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-full p-3">
                    <option selected>12H(AM/PM)</option>
                    <option value="1">24H</option>
                  </select>
                </div>
              </form>
            </div>
            <div>
              <div className="bg-white rounded-md p-4">
                <h1 className="text-gray-600 text-2xl mb-4">Meet Frequency</h1>
                <div className="flex gap-x-4">
                  <label for="meetingFrequencySetter" className="w-fit">
                    <input
                      id="meetingFrequencySetter"
                      type="number"
                      placeholder={1}
                      style={{
                        width: "3rem",
                        textAlign: "center",
                        textDecoration: "underline",
                      }}
                    />
                  </label>
                  meets per
                  <select className="underline">
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between w-full md:flex-row flex-col gap-y-3">
                <div className="grid grid-cols-2 w-full md:w-2/4 items-start justify-start gap-x-5">
                  <button className="col-span-1 underline decoration-dotted px-4 py-2">
                    Cancel
                  </button>
                  <button className="col-span-1 bg-blue-600 rounded-md px-4 py-2 text-white">
                    Save
                  </button>
                </div>
                <div className="flex col-span-1 items-center justify-center w-full md:w-2/4">
                  <button className=" bg-red-600 rounded-md px-4 py-2 text-white">
                    Delete Timetable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
