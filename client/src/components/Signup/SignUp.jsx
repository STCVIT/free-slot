import React, { useState } from "react";
import signupInfoImg from "../../assets/SignupInfoImage.svg";
import { UserAuth } from "../../context/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import googleLogo from "../../assets/Gooogle-logo.svg";
import Visible from "../../assets/fi_eye.svg";
import NotVisible from "../../assets/fi_eye-off.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const oAuth = async (e) => {
    setError("");
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      setError(e.message);
      console.log(e.message);
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
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="hidden sm:block sm:col-span-2 bg-blueTheme ">
          <img
            src={signupInfoImg}
            alt=""
            className="grid col-span-2 min-h-screen"
          />
        </div>
        <div className="visible col-span-1 sm:col-span-2 mt-7">
          <div className="px-3 sm:py-2 sm:px-16 md:py-3.5 md:px-24 lg:py-5 lg:px-48">
            <h1 className="font-bold text-center text-3xl pb-5">Sign-Up</h1>
            <form>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-1">Name</label>
                <input className="focus:outline-none border-2 rounded py-3 px-4" />
              </div>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-1">
                  VIT Registration No.
                </label>
                <input className="focus:outline-none border-2 rounded py-3 px-4" />
              </div>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-1">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="focus:outline-none border-2 rounded py-3 px-4"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className=" font-semibold py-1">Password</label>
                <div className="flex flex-row border-2 rounded">
                  <input
                    className=" focus:outline-none px-4 py-3 w-full"
                    type={passwordType}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div onClick={togglePassword}>
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
              <button className="bg-blueTheme text-white w-full font-bold mx-auto py-2 rounded ">
                <Link to="/timetable">Next</Link>
              </button>
            </div>
            <div class="relative py-2">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-b border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="bg-white px-4 text- text-gray-500">OR</span>
              </div>
            </div>
            <div className="py-3">
              <button
                className="flex justify-center w-full border-2 border-blueTheme text-black font-semibold mx-auto py-2 rounded "
                type="button"
                onClick={oAuth}
              >
                <img className="px-2" src={googleLogo} alt="" />
                <p>Continue with Google</p>
              </button>
              <h6 className="text-sm text-grey py-2">
                Already have an account?
                <Link to="/login" className="pl-2 text-blueTheme">
                  Login
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
