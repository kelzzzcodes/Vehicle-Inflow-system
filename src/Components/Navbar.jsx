import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'

import LogoHome from '../Assets/LogoHome.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
   const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
    const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="w-full h-16 bg-[#0095A9FF] rounded-b-md flex justify-between items-center  pl-4 pr-4">
      <img src={LogoHome} alt="LogoHome" className="w-[220px] h-[42px]" />

      <div className="flex gap-4 items-center ">
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-[237px] h-[36px]  bg-white rounded-md border-2 border-[#171A1FFF]"
          >
            {selectedItem ? selectedItem : 'Department:Marketing'}

            <svg
              className={`-mr-1 ml-2 h-5 w-5 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-[237px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleItemClick('Department: Sales')}
                >

                  Department: Sales
                </button>
                   <button
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleItemClick('Department: Marketing')}
                >

                  Department: Marketing
                </button>

              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 ">
          <RxAvatar className="text-white w-5 h-5" />
          <p className=" text-xs">Nithin</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
