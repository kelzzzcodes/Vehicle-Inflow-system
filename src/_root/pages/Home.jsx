import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Analytics, Navbar, Sidebar } from '../../Components'

const Home = () => {
  return (
    // <div>
    //   <Navbar />
    //   <div className="w-full flex  py-4  px-3 gap-4 ">
    //     <Sidebar />
        <div className="pt-2 flex flex-col flex-1">
         <div className='flex items-center p-4  shadow-xl w-full'>
           <div className='flex gap-4 w-full'>
            <div className="  w-56 h-24 bg-stone-300 ring-1 rounded-md flex flex-col gap-2 items-center justify-center">
              <h3>Inflow</h3>
              <p className="flex gap-2">
               Currently: <span>32</span>Vehicles
              </p>
            </div>
              <div className="  w-56 h-24 bg-stone-300 ring-1 rounded-md flex flex-col gap-2 items-center justify-center">
              <h3>Outflow</h3>
              <p className="flex gap-2">
               Currently: <span>32</span>Vehicles
              </p>
            </div>
          </div>
          <div>
            <input type='search' placeholder='Enter The Random Number...' className='p-2 ring-1 rounded-md border-none outline-none'/>
          </div>
         </div>
        </div>
    //   </div>
    // </div>
  )
}

export default Home
