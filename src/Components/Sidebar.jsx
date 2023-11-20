import React from 'react'
import { Link } from 'react-router-dom'
import { sidebarNav } from '../Constants'

const Sidebar = () => {
  return (
    <div className="w-[218px] h-[calc(100vh-104px)]  flex flex-col items-center   rounded-sm shadow-md ring-2 ring-[#F3F3F3]">
      <div className="flex  flex-1 flex-col gap-4 mt-8">
        {sidebarNav.map((item) => (
          <Link
            to={item.path}
            id={item.label}
            key={item.index}
            className="py-2 px-10  text-sm  font-semibold ring-1 ring-black rounded-sm hover:ring-0 hover:text-black/50"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex ">
        <p className="flex text-sm text-gray-700 mb-4">
          <span className=" text-red-500">Love</span>@ kelzzzcodes
        </p>
      </div>
    </div>
  )
}

export default Sidebar
