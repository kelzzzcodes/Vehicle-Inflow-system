import React from 'react'
import { Navbar, Sidebar } from '../Components'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='flex py-5  px-3'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
