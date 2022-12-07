import React from 'react'
import Navbar from "../components/Menus/MainNavbar"
import Sidebar from "../components/Sidebar/Sidebar"
import Freeslotsection from '../components/Freeslotsection/Freeslotsection';
const Freeslot = () => {
  return (
    <>
    <Navbar/>
    <div className='flex bg-myBg '>
        <Sidebar/>
        <Freeslotsection/>
    </div>
    </>
  )
}

export default Freeslot