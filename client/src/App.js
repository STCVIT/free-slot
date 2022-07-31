//import Login from './components/Login'
//import SignupInfo from './components/SignupInfo'
//import TimeTableInfo from './components/TimetableInfo';
import Home from "./components/home"
import Landing from './components/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Switch, Router, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext'
import Form from './components/SignUpForm';
import AddEvent from "./components/AddEvent";
import FreeSlot from "./components/freeslot";
export default function App() {
  return (
    <>
    <Router>
      <Landing path='/' element={<Landing/>}/>
      <Form path='/signup' element={<Form/>}/>
    </Router>
    
    <UserAuthContextProvider>
      <Router>
      <Switch>
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/freeslot' element={<FreeSlot/>} />
        <Route path='/addevent' element={<AddEvent/>} />
      </Switch>
      </Router>
    </UserAuthContextProvider>
    </>
  );
}
