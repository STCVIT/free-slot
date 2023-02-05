import React, { useState } from "react";
import signupInfoImg from "../../assets/SignupInfoImage.svg";
import { UserAuth } from "../../context/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import Visible from "../../assets/fi_eye.svg";
import GoogleButton from "react-google-button";
import NotVisible from "../../assets/fi_eye-off.svg";
import axios from "../../axios/index";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import { OrComponent } from "./DragFile";
const SignUp = () => {
  document.title = "Sign Up";
  const [userDetails, setUserDetails] = useState({
    name: null,
    regno: null,
    email: null,
    password: null,
  });
  const [errors, setError] = useState({
    name: false,
    regno: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();
  const { googleSignUp, signUp } = UserAuth();
  const [passwordType, setPasswordType] = useState("password");
  const { setIsLoading } = FindFreeSlot();

  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );

  const emailPattern = /([a-z|.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/;
  const regPattern = /([0-9]{2})([A-Z]{3})([0-9]{4})/g;
  const { name, regno, email, password } = userDetails;
  const { email: emailError, regno: regnoError, name: nameError } = errors;
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!emailPattern.test(email) || !regPattern.test(regno) || !name) {
        if (!emailPattern.test(email)) {
          setError({ ...errors, email: true });
        }
        if (!regPattern.test(regno)) {
          setError({ ...errors, regno: true });
        }
        if (!name) {
          setError({ ...errors, name: true });
        }

        return;
      }
      setError({
        name: false,
        regno: false,
        email: false,
      });

      setIsLoading(true);

      const response = await axios.post("user/create", {
        name,
        regno,
        email,
      });
      if (response.status === 201) {
        const res = await signUp(email, password);
        if (res && uid) {
          navigate("/timetable/" + uid);
        } else if (res) {
          navigate("/timetable");
        }
      } else {
        alert("Failed to create an account");
      }
      setIsLoading(false);
    } catch (error) {
      setError("Failed to create an account");
      console.error(error);
      setIsLoading(false);
    }
  }
  const oAuth = async (e) => {
    setError("");
    try {
      setIsLoading(true);
      const res = await googleSignUp();
      if (res && uid) {
        navigate("/timetable/" + uid);
      } else if (res) {
        navigate("/timetable");
      }
      setIsLoading(false);
    } catch (error) {
      setError(e.message);
      console.log(e.message);
      setIsLoading(false);
    }
  };
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 ">
        <div className="hidden sm:block sm:col-span-2 bg-[#84B7FF] ">
          <img
            src={signupInfoImg}
            alt=""
            className="grid col-span-2 min-h-screen"
          />
        </div>
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="flex h-full items-center  w-full">
            <div className="px-3 sm:py-2 sm:px-16 lg:py-3.5 lg:px-24  w-full">
              <h1 className="font-bold text-center text-3xl pb-5">Sign-Up</h1>
              <GoogleButton style={{ width: "100%" }} onClick={oAuth} />
              <div className="my-4">
                <OrComponent isCaps={true} />
              </div>
              <form>
                <div className="flex flex-col py-2 w-full">
                  <label className="font-semibold py-1">Name</label>
                  <input
                    className="focus:outline-none border-2 rounded py-3 px-4"
                    id="name"
                    autoComplete="off"
                    type="text"
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    required
                  />
                  {nameError && (
                    <p className="text-red-400 mt-2 text-sm">
                      *Please enter name
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label className="font-semibold py-1">
                    VIT Registration No.
                  </label>
                  <input
                    className="focus:outline-none border-2 rounded py-3 px-4"
                    id="regno"
                    autoCapitalize={"true"}
                    type="text"
                    // value={regno.toUpperCase()}
                    autoComplete="false"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        regno: e.target.value.toUpperCase(),
                      })
                    }
                    required
                  />
                  {regnoError && (
                    <p className="text-red-400 mt-2 text-sm">
                      *Invalid Register Number
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2 w-full">
                  <label className="font-semibold py-1">Email</label>
                  <input
                    autoComplete="false"
                    className="focus:outline-none border-2 rounded py-3 px-4"
                    id="email"
                    type="email"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value.toLocaleLowerCase(),
                      })
                    }
                    required
                  />
                  {emailError && (
                    <p className="text-red-400 mt-2 text-sm">
                      *VIT Email ID needed
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className=" font-semibold py-1">Password</label>
                  <div className="flex flex-row border-2 rounded">
                    <input
                      autoComplete="false"
                      className=" focus:outline-none px-4 py-3 w-full"
                      type={passwordType}
                      id="password"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <div className="cursor-pointer" onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <img
                          className="py-4 px-2"
                          src={Visible}
                          alt="Eye Icon"
                        />
                      ) : (
                        <img
                          className="py-4 px-2"
                          src={NotVisible}
                          alt="Open Eye Icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </form>
              <div className="pt-8 pb-1 text-center ">
                <Link to="/timetable">
                  <button
                    className="bg-primary text-white w-full font-bold mx-auto py-2 rounded"
                    // disabled={loading}
                    onClick={handleSubmit}
                  >
                    Next
                  </button>
                </Link>
              </div>

              <div className="py-3">
                <h6 className="text-sm text-grey py-2">
                  Already have an account?
                  <Link
                    to={uid ? "/login/" + uid : "/login"}
                    className="pl-2 text-bg-primary"
                  >
                    Login
                  </Link>
                </h6>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SignUp;
