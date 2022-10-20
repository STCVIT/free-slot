import axios from 'axios'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { UserAuth } from '../../context/UserAuthContext'

const CardSection = ({ token }) => {
  useEffect(()=>{
    if(token){
      fetchData(token)
    }
  }, [token])
  const fetchData = async (token)=>{
    const res = await axios.get('http://localhost:4000/',{
      headers: {
        Authorization: 'Bearer '+token,
      },
    })
    console.log(res.data)
  }
    const {user}=UserAuth()
    
  return (
    <div>CardSection</div>
  )
}

export default CardSection