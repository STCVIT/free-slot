import React from 'react'
import moment from 'moment'
import { FindFreeSlot } from '../../context/FreeSlotContext'
import { useNavigate } from 'react-router-dom'

const Freeslotcard = (props) => {
  const { chosenSlotTime, setChosenSlotTime, chosenDate, setChosenDate } = FindFreeSlot()
  const navigate = useNavigate()
    const clickHandler = (data)=>{
        console.log(data)
        setChosenSlotTime(data)
        navigate('/addEvent')
    }
  return (
    <>
      {props.data?.map((days, index)=>(
        days.map((value)=>(
          <div className='max-w-sm rounded-lg overflow-hidden shadow-lg font-body' key={index}>
            <div className='px-6 py-4 grid grid-rows-4 gap-2'>
            <div className='text-base'>{moment().add(1, 'weeks').isoWeekday(index+1).format("ddd")}, {moment().add(1, 'weeks').isoWeekday(index+1).format("D MMM, YYYY")}</div>
            <div className='text-xl font-bold'>{value.start_time} - {value.end_time}</div>
            <div className='text-sm'>Duration: {moment(value.end_time, 'hh:mm a').diff(moment(value.start_time, 'hh:mm a'), 'minutes')} minutes</div>
            <div className='bg-myBlue roundedß-lg text-center text-white px-6 py-2.5 max-w-fit'><button onClick={()=>clickHandler(value)}>Make Event</button></div>
            </div>
          </div>
        ))
      ))}
    </>
  )
}

export default Freeslotcard