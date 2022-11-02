import React from 'react'
import LandingPage2 from '../components/LandingPages/LandingPage2';
import LandingPage3 from '../components/LandingPages/LandingPage3';


const Landing = () => {
  
  
  return (
    <Route path="/landingPage2" element={<LandingPage2 />} />{" "}
    <Route path="/landingPage3" element={<LandingPage3 />} />{" "}
  )
}

export default Landing