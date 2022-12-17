import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { FreeSlotContextProvider } from "./context/FreeSlotContext";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

//components
import Signup from "./components/Signup/SignUp";
import Timetable from "./components/Signup/Timetable";
import Login from "./components/Login/Login";
import Forgot from "./components/Login/Forgot";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Schedule from "./pages/Schedule";
import AddEvent from "./components/AddEvent";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import FreeSlot from "./pages/Freeslot";
import ContactUs from "./components/contactUs/contactUs";
import AddMeToTeam from "./components/Links/AddMeToTeam";
import RedirectingMiddleware from "./components/Links/RedirectingMiddleware";
import Loader from "./components/Loader/Loader";
export default function App() {
  return (
    <>
      <UserAuthContextProvider>
        <FreeSlotContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/:id" element={<Signup />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/timetable/:id" element={<Timetable />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/:id" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/about" element={<About />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route
                path="/contactUs"
                element={<ContactUs isHomePage={false} />}
              />
              <Route path="/addEvent" element={<AddEvent />} />
              <Route path="/freeslot" element={<FreeSlot />} />
              <Route path="/addtoteam/:id" element={<AddMeToTeam />} />
              {/* <Route path='/:id' element={localStorage.getItem("user")? <AddMeToTeam /> : <Login/>}/> */}
              <Route path="/:id" element={<RedirectingMiddleware />} />
            </Routes>
            <ToastContainer />
            <Loader />
          </BrowserRouter>
        </FreeSlotContextProvider>
      </UserAuthContextProvider>
    </>
  );
}
