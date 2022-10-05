import Login from './components/Login/Login'
import Home from "./components/Home"
import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
import Schedule from "./components/Schedule";
import CARD from "./components/card"
import AddEvent from "./components/AddEvent";
import './App.css'
import HomePageBuild from './components/HomePageBuild'
import Signup from './components/Signup/SignUp'
import TT from './components/Signup/Timetable'

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
          <Route path='/signup' element={<Signup />} />
          <Route path='/timetable' element={<TT />} />
          <Route path='/homepage' element={<HomePageBuild />} />
          <Route path='/card' element={<CARD />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}