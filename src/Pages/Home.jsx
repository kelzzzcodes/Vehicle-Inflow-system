import React from 'react'
import { Navbar, Sidebar,Main } from '../Components'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='flex py-5  px-3 gap-4'>
        <Sidebar />
        <Main/>
      </div>
    </div>
  )
}

export default Home
