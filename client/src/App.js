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
        < Landing / >
      }
      /> <
      Route path = '/home'
      element = {
        < ProtectedRoute > < Home / > < /ProtectedRoute>}/ >
        <
        Route path = '/signup'
        element = {
          < Signup / >
        }
        /> <
        Route path = '/timetable'
        element = {
          < Timetable / >
        }
        /> <
        Route path = '/login'
        element = {
          < Login / >
        }
        /> <
        Route path = '/schedule'
        element = {
          < ProtectedRoute > < Schedule / > < /ProtectedRoute>} / >
          <
          /Routes> <
          /BrowserRouter> <
          /UserAuthContextProvider>
        );
      }