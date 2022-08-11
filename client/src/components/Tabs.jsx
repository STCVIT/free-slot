import React from 'react'

function Tabs() {
  return (
    <>
      <div className="tabs col-span-5">
        <p className="tab tab-bordered" >Tab 1</p>
        <p className="tab tab-bordered tab-active" href='/'>Tab 2</p>
        <p className="tab tab-bordered" href='/' >Tab 3</p>
      </div>
    </>
  )
}

export default Tabs