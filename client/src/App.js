import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { FreeSlotContextProvider } from "./context/FreeSlotContext";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

//components
import Signup from "./components/Signup/SignUp";
import Timetable from "./components/Signup/Timetable";
import Login from "./components/Login/Login";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Schedule from "./pages/Schedule";
import AddEvent from "./components/AddEvent";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import FreeSlot from "./pages/Freeslot";
import ContactUs from "./components/contactUs/contactUs";
export default function App() {
  return (
    <>
      <UserAuthContextProvider>
        <FreeSlotContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contactUs" element={<ContactUs isHomePage={false} />}/>
              <Route path="/addEvent" element={<AddEvent />} />
              <Route path="/freeslot" element={<FreeSlot/>}/>
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        </FreeSlotContextProvider>
      </UserAuthContextProvider>
    </>
  );
}
