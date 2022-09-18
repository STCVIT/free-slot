import Login from './components/Login/Login'
// import SignupInfo from './components/SignupInfo'
// import TimeTableInfo from './components/TimetableInfo';
import Home from "./components/Home"
import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
import Schedule from "./components/Schedule/Schedule";
import CARD from "./components/card"
// import {Container,Row, Col } from "react-bootstrap"
import SignUp from './components/Signup/SignUpForm';
import AddEvent from "./components/AddEvent";
import './App.css'
import HomePageBuild from './components/HomePageBuild'
import SU from './components/Signup/SignUp'
import TimetableNew from './components/Signup/Timetable'
import Dat from './components/data'
import Profile from './components/Profile'
import Try from './try'
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
          <Route path='/signup' element={<SU />} />
          <Route path='/timetable' element={<TimetableNew />} />
          <Route path='/homepage' element={<HomePageBuild />} />
          <Route path='/card' element={<CARD />} />
          <Route path='/da' element={<Dat />} />
          <Route path='/addEvent' element={<AddEvent />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/try' element={<Try />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}