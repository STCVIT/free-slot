import React from 'react'
import { UserAuth } from '../context/UserAuthContext'
const { user } = UserAuth()

const Schedule = () => {
  const token = user.getIdToken()
  
  return (
    <div>{response}</div>
  )
}

export default Schedule