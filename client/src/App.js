import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import {
  UserAuthContextProvider
} from './context/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'

//components
import Signup from './components/Signup/SignUp'
import Timetable from './components/Signup/Timetable'
import Login from './components/Login/Login'
import Home from "./pages/Home"
import Landing from './components/Landing'
import Schedule from "./components/Schedule";
import AddEvent from "./components/AddEvent";

import './App.css'
import HomePageBuild from './components/HomePageBuild'
import SU from './components/Signup/SignUp'
import TimetableNew from './components/Signup/Timetable'
import Dat from './components/data'
import Profile from './components/Profile'
import Try from './components/try'
import Responses from './components/Responses/Responses'
import ContactUs from './components/ContactUs'
export default function App() {
  return ( <
      UserAuthContextProvider >
      <
      BrowserRouter >
      <
      Routes >
      <
      Route path = '/'
      element = {
        <
        Landing / >
      }
      /> {
      /* <Route path='/home' element={<ProtectedRoute> <Home /></ProtectedRoute>}/> */
    } <
    Route path = '/home'
  element = {
    <
    Home / >
  }
  /> <
  Route path = '/signup'
  element = {
    <
    Signup / >
  }
  /> <
  Route path = '/timetable'
  element = {
    <
    Timetable / >
  }
  /> <
  Route path = '/login'
  element = {
    <
    Login / >
  }
  /> <
  Route path = '/addevent'
  element = {
    <
    ProtectedRoute > < AddEvent / > < /ProtectedRoute>} / >
    <
    Route path = '/schedule'
    element = {
      <
      ProtectedRoute > < Schedule / > < /ProtectedRoute>} / >
      <
      /Routes> < /
      BrowserRouter > <
      /UserAuthContextProvider>
    );
  }