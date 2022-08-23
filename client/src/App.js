<<<<<<< HEAD
//import Login from './components/Login'
=======
import Login from './components/Login/Login'
>>>>>>> 45e23c25719eb361cf2ab6825d39e0be8989ed4a
// import SignupInfo from './components/SignupInfo'
// import TimeTableInfo from './components/TimetableInfo';
import Home from "./components/Home"
//import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
// import card from "./components/card"
// import Schedule from "./components/Schedule";
// import {Container,Row, Col } from "react-bootstrap"
<<<<<<< HEAD
//import SignUp from './components/Signup/SignUpForm';
// import AddEvent from "./components/AddEvent";
import Modify from "./components/Modify";




=======
import SignUp from './components/Signup/SignUpForm';
import AddEvent from "./components/AddEvent";
import './App.css'
import FreeSlot from "./components/Freeslot";
import HomePageBuild from './components/HomePageBuild'
>>>>>>> 45e23c25719eb361cf2ab6825d39e0be8989ed4a
export default function App() {
  return (
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
<<<<<<< HEAD
            {/* <Route path='/' element={<Landing />} />  */}
            {/* <Route path="/" element={<card />} /> */}
            {/* <Route path='/' element={<AddEvent />} /> */}
            {/* <Route path='/' element={<Schedule />} /> */}
            {/* <Route path='/' element={<TimeTableInfo />} /> */}
            {/* <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} /> */}
            <Route path='/' element={<Modify />} /> 
            
            
=======
            <Route path='/' element={<Landing />} /> 
            <Route path='/addevent' element={<AddEvent />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='/freeslots' element={<Freeslot />} /> */}
            <Route path='/homepage' element={<HomePageBuild />} />

>>>>>>> 45e23c25719eb361cf2ab6825d39e0be8989ed4a
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
  );
}
