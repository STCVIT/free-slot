import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/UserAuthContext";
import googleLogo from "../../assets/Gooogle-logo.svg";
import LoginImage from "../../assets/LoginInfoImage.svg";

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const oAuth = async (e) => {
    setError("");
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {}
  };
  return (
    <>
      <div className="grid grid-cols-4">
        <img src={LoginImage} alt="" className="grid col-span-2 min-h-screen" />
        <div className="grid col-span-2 mt-7">
          <div className="pt-20">
            <h1 className="font-bold text-center text-3xl pb-10">Login</h1>
            <button
              className="flex flex-row border-2 text-black font-bold mx-auto py-2 px-24 rounded center-true "
              type="button"
              onClick={oAuth}
            >
              <img className="px-2" src={googleLogo} alt="" />
              <p>Login with Google</p>
            </button>
            <hr></hr>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-2">
                <label className="py-2">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border p-3"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="border p-3"
                />
              </div>
              <button className="border border-blue">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login1;
