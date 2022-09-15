import Login from './components/Login/Login'
// import SignupInfo from './components/SignupInfo'
// import TimeTableInfo from './components/TimetableInfo';
import Home from "./components/Home"
import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
// import card from "./components/card"
import Schedule from "./components/Schedule";
// import {Container,Row, Col } from "react-bootstrap"
import SignUp from './components/Signup/SignUpForm';
import AddEvent from "./components/AddEvent";
import './App.css'
import HomePageBuild from './components/HomePageBuild'
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
            <Route path='/' element={<Landing />} /> 
            <Route path='/addevent' element={<AddEvent />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='/freeslots' element={<Freeslot />} /> */}
            <Route path='/homepage' element={<HomePageBuild />} />

            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
  );
}
