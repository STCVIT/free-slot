import React from 'react'
import { FindFreeSlot } from '../../context/FreeSlotContext'

const AddMeToTeam = () => {
  const { linkCreator, linkTeam} = FindFreeSlot()
  const acceptHandler=()=>{

  }
  const rejectHandler=()=>{

  }
  return (
    <>
    <div>{linkCreator} wants to add you to team {linkTeam}</div>
    <div>
      <button onClick={acceptHandler}>
        Accept
      </button>
      <button onClick={rejectHandler}>
        Reject
      </button>
    </div>
    </>
  )
}

export default AddMeToTeam