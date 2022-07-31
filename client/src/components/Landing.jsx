import React, { useState } from "react"
import { useNavigate , Link } from 'react-router-dom';
// import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Landing = () => {
  let navigate = useNavigate();
  const [nav, setNav] = useState(false)

  const handleLogin = () => {
    navigate("/login") 
  }

  const handleSignUp = () => {
    navigate("/signup") 
  }

  return (
  <div>
    <div className="p-4">
      <button className="hover:bg-indigo-600 hover:text-white rounded-xl bg-transparent border-indigo-600 border text-indigo-600 px-10 py-3 mb-4" onClick={handleLogin}>Login</button>
    </div>
    <div className="p-4">
      <button className=' bg-indigo-600 text-white rounded-xl hover:bg-transparent hover:border hover:border-indigo-600 hover:text-indigo-600 px-8 py-3 mb-4'  onClick={handleSignUp}>Sign Up</button >
    </div>
  </div>
  )
}

export default Landing