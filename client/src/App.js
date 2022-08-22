//import Login from './components/Login'
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
//import SignUp from './components/Signup/SignUpForm';
// import AddEvent from "./components/AddEvent";
import Modify from "./components/Modify";




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
            {/* <Route path='/' element={<Landing />} />  */}
            {/* <Route path="/" element={<card />} /> */}
            {/* <Route path='/' element={<AddEvent />} /> */}
            {/* <Route path='/' element={<Schedule />} /> */}
            {/* <Route path='/' element={<TimeTableInfo />} /> */}
            {/* <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} /> */}
            <Route path='/' element={<Modify />} /> 
            
            
            
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
  );
}
