import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/UserAuthContext";
import googleLogo from "../../assets/Gooogle-logo.svg";
import LoginImage from "../../assets/LoginInfoImage.svg";
import Visible from "../../assets/fi_eye.svg";
import NotVisible from "../../assets/fi_eye-off.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uuidv4 } from "@firebase/util";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = UserAuth();
  const [passwordType, setPasswordType] = useState("password");
  // eslint-disable-next-line no-unused-vars
  const emailPattern = /([a-z|.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/;

  const [passwordInput, setPasswordInput] = useState("");
  const uid = window.location.pathname.match(
    /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (emailPattern.test(email) === false) {
      toast.error("VIT mail needed");
      return;
    }

    try {
      const res = await logIn(email, password);
      if (res && uid) {
        navigate("/addtoteam/" + uid);
      } else if (res) {
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Incorrect Password");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid Email");
      }
    }
  };
  const oAuth = async (e) => {
    setError("");
    try {
      const res = await googleSignIn();
      if (res && uid) {
        navigate("/addtoteam/" + uid);
      } else if (res) {
        navigate("/home");
      }
    } catch (error) {}
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
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="hidden sm:block sm:col-span-2 bg-myBlue ">
          <img
            src={LoginImage}
            alt=""
            className="grid col-span-2 min-h-screen"
          />
        </div>
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="px-3 sm:py-5 sm:px-16 lg:py-7.5 lg:py-10 lg:px-48">
            <h1 className="font-bold text-center text-3xl pb-10">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-2">Email</label>
                <input
                  autoComplete="true"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="focus:outline-none border-2 rounded py-3 px-4"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className=" font-semibold py-2">Password</label>
                <div className="flex flex-row border-2 rounded">
                  <input
                    autoComplete="false"
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
            </form>
            <div className="pt-8 pb-1 text-center ">
              <button
                className="bg-myBlue text-white w-full font-bold mx-auto py-3 rounded "
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <h6 className="text-sm text-grey">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="" className="text-myBlue">
                Forgot Password?
              </a>
            </h6>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text- text-gray-500">OR</span>
              </div>
            </div>
            <div className="py-5">
              <button
                className="flex justify-center w-full border-2 border-myBlue text-black font-semibold mx-auto py-3 rounded "
                type="button"
                onClick={oAuth}
              >
                <img className="px-2" src={googleLogo} alt="" />
                <p>Continue with Google</p>
              </button>
              <h6 className="text-sm text-grey py-2">
                Don't have an account?
                <Link
                  to={uid ? "/signup/" + uid : "/signup"}
                  className="pl-2 text-myBlue"
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
