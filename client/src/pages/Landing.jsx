import React from 'react'
import { useNavigate } from 'react-router-dom';
import LandingPage2 from '../components/LandingPages/LandingPage2';
import LandingPage3 from '../components/LandingPages/LandingPage3';
import LandingPage4 from '../components/LandingPages/LandingPage4';


const Landing = () => {
  const navigate = useNavigate()
  const navigateSignup = ()=>{
    navigate('/signup')
  }
  const navigateLogin = ()=>{
    navigate('/login')
  }
  return (
    <>
    <nav className='flex px-12 py-6'>
    <header className="text-4xl font-bold font-['logo']">Freeslot</header>
      <div className='flex ml-auto'>
        <button className='mx-2' onClick={navigateLogin}> Login</button>
        <button className='mx-2' onClick={navigateSignup}> Signup</button>
      </div>
    </nav>
    <LandingPage2 />
    <LandingPage3 />
    <LandingPage4 />
    </>
  )
}

export default Landing