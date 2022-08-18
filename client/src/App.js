import Login from './components/Login'
// import SignupInfo from './components/SignupInfo'
// import TimeTableInfo from './components/TimetableInfo';
import Home from "./components/Home"
import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
import Schedule from "./components/Schedule";
// import {Container,Row, Col } from "react-bootstrap"
import SignUp from './components/Signup/SignUpForm';
import AddEvent from "./components/AddEvent";
import Freeslot from "./components/Freeslot";

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
            <Route path='/' element={<AddEvent />} />
            <Route path='/' element={<Schedule />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<freeslot />} />
            
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
  );
}
