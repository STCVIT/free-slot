import React from 'react'
import { UserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async ()=>{
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <><div>home</div>
    <button onClick = {handleLogout} className='border px-6 py-2 my-4'>Logout</button>
    
    
    </>
  )
}

export default Home