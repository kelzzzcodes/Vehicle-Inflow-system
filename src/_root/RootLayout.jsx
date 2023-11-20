import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../Components';


const RootLayout = () => {
  return (
     <>
    <Navbar/>
      <div className="w-full flex  py-4  px-2 gap-4 ">
     <Sidebar/>

    <Outlet/>
   </div>
   </>
  )
}

export default RootLayout