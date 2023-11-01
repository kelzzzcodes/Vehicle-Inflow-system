import React from 'react'
import { LiaHistorySolid } from 'react-icons/lia'
import { sidebarHero, sidebarFooter } from '../Constants'

const Sidebar = () => {
  return (
    <div className="w-[218px] h-[calc(100vh-104px)]  flex flex-col rounded-sm shadow-md ring-2 ring-[#F3F3F3]">
      <button className=" mt-4  mx-[4.5px] flex w-[206px] h-[38px] ring-1 ring-[#8191C9FF] rounded-sm items-center justify-center text-xs gap-2 text-[#8191C9FF] font-normal">
        <span>+</span>New Chat
      </button>
      <div className="flex items-center justify-center mt-4 gap-2">
        <LiaHistorySolid />
        <p className=" text-xs font-normal text-[#171A1FFF]">History</p>
      </div>

      <div className="w-[200px] flex flex-grow flex-col gap-4 mt-4 mx-[4.5px]">
        {sidebarHero.map((item) => (
          <div key={item.index} className="flex items-center justify-between  text-[#171A1FFF] text-xs font-normal px-2">
            <div className="flex gap-2 items-center">
              <p>{item.chatIcon}</p>
              <p>{item.text}</p>
            </div>
            <div className="flex gap-2">
              <p>{item.editIcon}</p>
              <p>{item.deleteIcon}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 py-4 w-[200px] ">
        {sidebarFooter.map((item) => (
          <div key={item.index} className="flex gap-2 items-center px-4 text-xs">
            <p className='text-[ #171A1FFF]'>{item.Icon}</p>
            <p className='text-[#565E6CFF]'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
