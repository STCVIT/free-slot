import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/UserAuthContext";
import PageHeading from "../components/Headings/PageHeading";
import MainNavbar from "../components/Menus/MainNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { FindFreeSlot } from "../context/FreeSlotContext";
import Loader from "../components/Loader/Loader";
const Profile = () => {
  const { user } = UserAuth();
  const [userDetails, setUserDetails] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const { isLoading, setIsLoading } = FindFreeSlot();
  console.log("User: ", user);
  useEffect(() => {
    axios
      .post("user/getUserByEmail", {
        email: user.email,
      })
      .then((res) => {
        // console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("Name: ", name);
  console.log("User Details: ", userDetails);
  document.title = "Profile";

  const [files, setFiles] = useState([]);
  const { sendTimetable } = UserAuth();
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      var file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        file = reader.result;
        //console.log(file);
        await sendTimetable(file);

        setIsLoading(false);
      };
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <MainNavbar active="account" />
      <div className="bg-gray-100">
        <PageHeading title="Profile" />
        <div className="w-full ">
          <div className="flex w-full h-full lg:justify-center px-4">
            <div className="col-span-5 gap-y-3 items-center lg:w-2/4 w-full">
              <div className="flex flex-col gap-y-6 items-start justify-start">
                <div className="p-4 rounded-md bg-white w-full">
                  <h1 className="text-gray-600 text-2xl mb-4">Login Details</h1>
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="text-start">Name</td>
                          <td className="text-end">{userDetails.name}</td>
                          {/* <td className="text-end">Ayush Mhetre</td> */}
                        </tr>
                        <tr>
                          <td className="text-start">Registration No.</td>
                          <td className="text-end">{userDetails.reg_no}</td>
                          {/* <td className="text-end">21BCE2887</td> */}
                        </tr>
                        <tr>
                          <td className="text-start">Email</td>
                          <td className="text-end">{userDetails.email}</td>
                          {/* <td className="text-end">ayush@gmail.com</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-3 rounded-md p-4 bg-white">
                  <h1 className="text-2xl text-gray-600">Timetable</h1>
                  {/* <img
                    className="h-full"
                    src={require("../assets/ttSS.png")}
                    alt="timeTable"
                  /> */}
                  <button
                    onClick={() => setShowUpload(true)}
                    className=" outline rounded-md outline-blue-600 text-blue-600 p-2 w-fit self-center lg:self-start"
                  >
                    Upload new timetable
                  </button>
                  {showUpload && (
                    <div>
                      <input
                        type="file"
                        onChange={(e) => setFiles(e.target.files)}
                      />
                      <button
                        onClick={handleSubmit}
                        className=" outline rounded-md outline-blue-600 text-blue-600 p-2 w-fit self-center lg:self-start"
                      >
                        Upload
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-3 bg-white rounded-md p-4 my-6">
                <h1 className="text-gray-600 text-2xl mb-4">Format</h1>
                <form className="flex flex-col lg:flex-row gap-y-4 gap-x-5 w-full lg:w-2/4 justify-between">
                  <div className="flex flex-col gap-y-2 items-start lg:w-1/2">
                    Date Format
                    <select
                      defaultValue={1}
                      className="relative form-select border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-full p-3"
                    >
                      <option value={1}>DD/MM/YY</option>
                      <option value={2}>MM/DD/YY</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-2 lg:w-1/2 items-start">
                    Time Format
                    <select
                      defaultValue={1}
                      className="relative form-select  border-2 border-gray-300 text-black-900 text-sm transition ease-in-out rounded-lg w-full p-3"
                    >
                      <option value={1}>12H(AM/PM)</option>
                      <option value={2}>24H</option>
                    </select>
                  </div>
                </form>
              </div>
              <div>
                <div className="bg-white rounded-md p-4">
                  <h1 className="text-gray-600 text-2xl mb-4">
                    Meet Frequency
                  </h1>
                  <div className="flex gap-x-4">
                    <label htmlFor="meetingFrequencySetter" className="w-fit">
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

                <div className="my-6 flex justify-between w-full lg:flex-row flex-col gap-y-3">
                  <div className="flex w-full lg:w-2/4 justify-between lg:justify-start gap-x-5">
                    <button className="lg:w-fit w-full border border-black rounded-md col-span-1 underline decoration-dotted p-2">
                      Cancel
                    </button>
                    <button className="col-span-1 lg:w-fit w-full bg-blue-600 rounded-md px-4 py-2 text-white">
                      Save Changes
                    </button>
                  </div>
                  <div className="flex col-span-1 items-center justify-center lg:justify-end w-full lg:w-2/4">
                    <button className=" bg-red-600 rounded-md py-2 px-4 text-white ">
                      Delete Timetable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
