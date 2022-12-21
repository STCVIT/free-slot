import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/UserAuthContext";
import PageHeading from "../components/Headings/PageHeading";
import MainNavbar from "../components/Menus/MainNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { FindFreeSlot } from "../context/FreeSlotContext";
import Loader from "../components/Loader/Loader";
import Dropzone from "react-dropzone";
import DragFile from "../components/Signup/DragFile";

const Profile = () => {
  const { user } = UserAuth();
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [userDetails, setUserDetails] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const { isLoading, setIsLoading } = FindFreeSlot();
  console.log("User: ", user);

  useEffect(() => {
    axios
      .post("user/getUserByEmail", {
        email: localUser.email,
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
  const { sendTimetable, deleteUser } = UserAuth();
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (files[0]) {
        var file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          file = reader.result;
          const res = await sendTimetable(file);
          if (res) {
            navigate("/home");
          }
        };
        return;
      } else if (inputValue) {
        const res = await axios.post("timetable/freeSlotCopyPaste", {
          timetable: inputValue,
          email: JSON.parse(localStorage.getItem("user")).email,
        });
        res.status === 200 && navigate("/home");
        return;
      } else {
        alert("Please provide timetable in either of the ways.");
      }
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      console.log(localUser.email);
      await axios.delete(
        "user/deleteUser",
        {
          email: localUser.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localUser.token}`,
          },
        }
      );
      await deleteUser();
      localStorage.removeItem("user");
      navigate("/");
      console.log("Acc deleted");
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
                    className=" outline rounded-md outline-blue-600 text-blue-600 p-2 w-full lg:w-fit self-center lg:self-start"
                  >
                    Upload new timetable
                  </button>
                  {showUpload && (
                    <div>
                      <DragFile
                        setFiles={setFiles}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        files={files}
                      />
                      {/* <button
                        onClick={handleSubmit}
                        className=" outline rounded-md outline-blue-600 text-blue-600 p-2 w-fit self-center lg:self-start"
                      >
                        Upload
                      </button> */}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="mt-4">
                  <button
                    onClick={handleDeleteAccount}
                    className=" bg-red-600 rounded-md py-2 px-4 text-white "
                  >
                    Delete Account
                  </button>
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
