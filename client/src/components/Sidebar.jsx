import React from 'react'
import DropDown from "./DropDownSidebar"

function Sidebar() {
  return (
    <>


      <div className="shadow p-3 ">

        <aside className="" aria-label="Sidebar">
          <div className="rounded bg-white ">
            <div className='item-center p-5 z-10'>
              <DropDown/>

            </div>

            <ul className="space-y-2">


              <li>
                <a href="/" target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl  font-logo font-semibold tracking-wider">Filters</span>

                </a>
              </li>
              <li>
                <a href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <span className="flex-1 ml-3 whitespace-nowrap">DATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                  <span className="flex-1 ml-3 whitespace-nowrap">DAY</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <span className="flex-1 ml-3 whitespace-nowrap">TIME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                  <span className="flex-1 ml-3 whitespace-nowrap">GROUPS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
