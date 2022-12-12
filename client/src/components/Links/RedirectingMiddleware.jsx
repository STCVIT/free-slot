import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const RedirectingMiddleware = () => {
  const navigate = useNavigate()
  const id = window.location.pathname
  console.log(id)
  useEffect(()=>{
    setTimeout(()=>{
      if(localStorage.getItem("user")){
        navigate('/addtoteam' + window.location.pathname, {replace: true})
      } else {
        navigate('/login'+window.location.pathname, {replace: true})
      }
    }, 1000)
  }, [])
  return (
    <div>Redirecting...</div>
  )
}

export default RedirectingMiddleware