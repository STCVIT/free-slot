import React from 'react'

const Freeslotcard = (props) => {
  return (
    // <div className='max-w-sm rounded overflow-hidden shadow-lg font-body'>
    //     <div className='px-6 py-4'>
    //         <div className='text-base'>Tue, 12th July</div>
    //         <div className='text-2xl font-bold'>4:00 p.m. - 5:30p.m.</div>
    //         <div className='text-sm'>Duration: 90 minutes</div>
    //         <div><button>Make Event</button></div>
    //     </div>
    // </div>
    <>
      {props.details.map((value,index)=>(
        <div className='max-w-sm rounded-lg overflow-hidden shadow-lg font-body' key={index}>
          <div className='px-6 py-4 grid grid-rows-4 gap-2'>
            <div className='text-base'>{value.day}, {value.date}</div>
            <div className='text-2xl font-bold'>{value.start_time} - {value.end_time}</div>
            <div className='text-sm'>Duration: {value.duration}</div>
            <div className='bg-myBlue rounded-lg text-center text-white px-6 py-2.5 max-w-fit'><button>Make Event</button></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Freeslotcard