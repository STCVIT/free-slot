import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

//components
import Signup from "./components/Signup/SignUp";
import Timetable from "./components/Signup/Timetable";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Landing from "./components/Landing";
// import Schedule from "./components/Schedule";
import Schedule from "./components/Schedule/Schedule";
import AddEvent from "./components/AddEvent";
import Profile from "./components/Profile";
import LandingPage2 from "./components/LandingPages/LandingPage2";
import LandingPage3 from "./components/LandingPages/LandingPage3";
import Responses from "./components/Responses/Responses";
import "./App.css";
import HomePageBuild from "./components/HomePageBuild";
import ContactUs from "./components/ContactUs";
export default function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
          <Route
            path="/home"
            element={
              // <ProtectedRoute > < Home / > < /ProtectedRoute>}/ >
              <HomePageBuild />
            }
          />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/timetable" element={<Timetable />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/landingPage2" element={<LandingPage2 />} />{" "}
          <Route path="/landingPage3" element={<LandingPage3 />} />{" "}
          <Route path="/responses" element={<Responses />} />{" "}
          <Route path="/contactUs" element={<ContactUs />} />{" "}
          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                {" "}
                <Schedule />{" "}
              </ProtectedRoute>
            }
          />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </UserAuthContextProvider>
  );
}
