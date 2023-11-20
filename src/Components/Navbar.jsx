import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'

import {  useAppContext } from '../AppProvider'


const Navbar = () => {


  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const { logout} = useAppContext()

  const getUser = JSON.parse(localStorage.getItem('user'))


  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const handleSignOutClick = () => {
    localStorage.removeItem('user')
    logout()
  }

  return (
    <div className="w-full h-16 bg-[#0095A9FF] rounded-b-md flex justify-between items-center  pl-4 pr-4">
     <Link to={'/'} className='text-white font-extrabold'>CONVENANT</Link>

      <div className="flex gap-4 items-center ">


        <div className="relative inline-block ">
          {getUser ? (
            <button
              className="flex items-center gap-[1px] text-white"
              onMouseEnter={handleDropdownToggle}
            >
              <RxAvatar className="w-5 h-5" />
              <p className=" text-xs">Convenant</p>
            </button>
          ) : (
            <p>hello</p>
          )}

          {isDropdownVisible && (
            <div className="absolute   w-24 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={handleSignOutClick}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
