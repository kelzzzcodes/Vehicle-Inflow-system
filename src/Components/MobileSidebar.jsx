import React, { useState } from 'react'
import { sidebarNav } from '../Constants'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileSidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div>
      <div>
        {toggleMenu ? (
          <div className=" ring-2 ring-white flex  p-1 rounded-sm">
            <AiOutlineClose
              onClick={() => setToggleMenu(!toggleMenu)}
              className=" text-stone-200 flex cursor-pointer"
              size={24}
            />
          </div>
        ) : (
          <div className=" md:hidden ring-2 ring-white flex  p-1 rounded-sm">
            <AiOutlineMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              className=" text-stone-200 cursor-pointer flex "
              size={24}
            />
          </div>
        )}
      </div>
      <div className={`${!toggleMenu ? 'hidden' : 'flex'}`}>
        <div className="p-6 absolute z-30 top-[6.7rem] left-0 my-2 w-[180px]  min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b] rounded-b-2xl shadow-red-500 shadow-inner">
          <ul className="text-base relative flex flex-col space-y-8 text-white align-center justify-center items-start align-center w-full   ">
            <a
              className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
              href="/"
            >
              <span>Home</span>
            </a>
            {sidebarNav.map((item) => (
              <Link
                key={item.label}
                className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar
