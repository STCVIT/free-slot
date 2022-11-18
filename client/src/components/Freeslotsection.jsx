import React from 'react'
import Freeslotcard from './Freeslotcard'
import FreeslotCardData from "../data/FreeslotCardData"
const Freeslotsection = () => {
  return (
    <>
    <div className='mx-auto'>
        <h1 className='font-bold text-3xl py-7 text-center'>Freeslots</h1>
        <div className='px-7 grid grid-cols-4 gap-x-6 gap-y-7 mx-auto'>
            <Freeslotcard details={FreeslotCardData}/>
        </div>
    </div>
    </>
  )
}

export default Freeslotsection