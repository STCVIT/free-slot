import React, { useRef, useState } from "react";
import signupInfoImg from "../../assets/SignupInfoImage.svg";
import { UserAuth } from "../../context/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import googleLogo from "../../assets/Gooogle-logo.svg";
import Visible from "../../assets/fi_eye.svg";
import NotVisible from "../../assets/fi_eye-off.svg";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("")
  const [regno, setRegno] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { googleSignIn } = UserAuth();
  const [passwordType, setPasswordType] = useState("password");
  const provider = new GoogleAuthProvider();
  async function handleSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      setError("")
      setLoading(true)
      const response = await axios.post('http://localhost:4000/user/create', 
      {
        name,
        regno,
        email
      })
      if(response.status==200){
        await createUserWithEmailAndPassword(auth, email, password)
        console.log("hi")
        navigate("/timetable")
      }
      console.log(name);
    } catch (error) {
      setError("Failed to create an account")
    }
    setLoading(false)
  } 
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
                <input className="focus:outline-none border-2 rounded py-3 px-4"
                id="name"
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required />
              </div>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-1">
                  VIT Registration No.
                </label>
                <input className="focus:outline-none border-2 rounded py-3 px-4"
                id="regno"
                type="text"
                value={regno}
                onChange={(e)=> setRegno(e.target.value)}
                required/>
              </div>
              <div className="flex flex-col py-2 w-full">
                <label className="font-semibold py-1">Email</label>
                <input
                  className="focus:outline-none border-2 rounded py-3 px-4"
                  id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
              </div>
              <div className="flex flex-col py-2">
                <label className=" font-semibold py-1">Password</label>
                <div className="flex flex-row border-2 rounded">
                  <input
                    className=" focus:outline-none px-4 py-3 w-full"
                    type={passwordType}
                    id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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
              <button className="bg-blueTheme text-white w-full font-bold mx-auto py-2 rounded" disabled={loading} onClick={handleSubmit}>
                Next
              </button>
            </div>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text- text-gray-500">OR</span>
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
