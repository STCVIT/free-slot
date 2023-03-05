import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/UserAuthContext";
import googleLogo from "../../assets/Gooogle-logo.svg";
import LoginImage from "../../assets/LoginInfoImage.svg";
import Visible from "../../assets/fi_eye.svg";
import NotVisible from "../../assets/fi_eye-off.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uuidv4 } from "@firebase/util";
import GoogleButton from "react-google-button";
import RedirectingMiddleware from "../Links/RedirectingMiddleware";
import { OrComponent } from "../Signup/DragFile";
import { FindFreeSlot } from "../../context/FreeSlotContext";
import axios from "../../axios";
import AddMeToTeam from "../Links/AddMeToTeam";
const Login = () => {
  const { setLinkUid, setIsLoading, setToAddTeam, toAddTeam } = FindFreeSlot();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = UserAuth();
  const [passwordType, setPasswordType] = useState("password");
  // eslint-disable-next-line no-unused-vars
  const emailPattern = /([a-z|.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/;

  const user = localStorage.getItem("user");
  const url = new URL(window.location.href);

  const uid = url.searchParams?.get("uid")?.toString();

  // if (uid) {
  //   const teamName = url.searchParams?.get("teamName").toString();
  //   const linkMaker = url.searchParams?.get("linkMaker").toString();
  //   setToAddTeam({
  //     teamName,
  //     uid,
  //     linkMaker,
  //   });

  //   if (user) {
  //     navigate("/addtoteam", {
  //       replace: "true",
  //     });
  //     // navigate("/home", { replace: "true" });
  //     console.log("User is already logged in");
  //     // <RedirectingMiddleware />;
  //     // <AddMeToTeam modalOpen={true} />;
  //   }
  // }
  const checkUid = () => {
    if (uid) {
      const teamName = url.searchParams?.get("teamName").toString();
      const linkMaker = url.searchParams?.get("linkMaker").toString();
      setToAddTeam({
        teamName,
        uid,
        linkMaker,
      });
      if (user) {
        navigate("/addtoteam", {
          replace: "true",
        });
        // navigate("/home", { replace: "true" });
        console.log("User is already logged in");
        // <RedirectingMiddleware />;
        // <AddMeToTeam modalOpen={true} />;
      }
    } else {
      if (user) {
        navigate("/home", { replace: "true" });
        console.log("User is already logged in");
        // <RedirectingMiddleware />;
        // <AddMeToTeam modalOpen={true} />;
      }
    }
  };
  useEffect(() => {
    checkUid();
  }, []);

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    setError("");
    if (emailPattern.test(email) === false) {
      toast.error("VIT mail needed");
      return;
    }
    try {
      setIsLoading(true);
      const res = await logIn(email, password);
      if (res && uid) {
        <RedirectingMiddleware />;
        setLinkUid(uid);
        navigate("/addtoteam");
      }
      if (res && !uid) {
        navigate("/home");
      }
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Incorrect Password");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid Email");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("User not found");
      }
      setIsLoading(false);
    }
  };
  const oAuth = async (e) => {
    setError("");
    try {
      setIsLoading(true);
      const res = await googleSignIn();
      if (res) {
        navigate("/home");
      }
      setIsLoading(false);
    } catch (error) {
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
  console.log(toAddTeam);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="hidden sm:block sm:col-span-2 bg-[#84B7FF] ">
          <img
            src={LoginImage}
            alt=""
            className="grid col-span-2 min-h-screen"
          />
        </div>
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="px-3 sm:py-5 sm:px-16 lg:py-7.5 lg:py-10 lg:px-48">
            <h1 className="font-bold text-center text-3xl pb-10">Login</h1>
            <div className="flex flex-col py-2 w-full">
              <label className="font-semibold py-2">Email</label>
              <input
                autoComplete="on"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="focus:outline-none border-2 rounded py-3 px-4"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className=" font-semibold py-2">Password</label>
              <div className="flex flex-row border-2 rounded">
                <input
                  className=" focus:outline-none px-4 py-3 w-full"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={togglePassword} className="cursor-pointer">
                  {passwordType === "password" ? (
                    <img className="py-4 px-2" src={Visible} alt="Eye Icon" />
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
            <div className="pt-8 pb-1 text-center ">
              <button
                className="bg-primary text-white w-full font-bold mx-auto py-3 rounded "
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="w-fit text-bg-primary my-2 p-2">
              <Link to="/forgot">Forgot Password?</Link>
            </div>
            <OrComponent isCaps={true} />
            <div className="py-5">
              <GoogleButton style={{ width: "100%" }} onClick={oAuth} />
              <h6 className="text-sm text-grey py-2 mt-2">
                Don't have an account?
                <Link
                  to={uid ? "/signup/" + uid : "/signup"}
                  className="pl-2 text-bg-primary"
                >
                  Sign-Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
