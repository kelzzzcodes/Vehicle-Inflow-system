import React from 'react'

import {
  BsPencil,
  BsPatchQuestion,
  BsFileEarmarkArrowDown,
} from 'react-icons/bs'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { LiaCopy } from 'react-icons/lia'
import { AiOutlineExport } from 'react-icons/ai'
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { useAppContext } from '../AppProvider'

const Main = () => {

     const { selectedDepartment } = useAppContext();

  return (
    <div className="max-w-full flex bg-white mx-auto">
      <div className="flex flex-col flex-wrap gap-4 w-[750px]">
        <div className=" w-full h-[88px] ring-1 ring-[#BCC1CAFF] rounded-sm mt-4">
          <div className="flex flex-col gap-2 pl-8  py-4  ">
            <h2 className="text-[#171A1FFF] text-base font-bold  ">
              Introduce yourself to AIWorkSquad{' '}
            </h2>

            <p className="  text-[#6E7787FF] text-sm flex items-center gap-2">
              I'm Nithin. CEO of an IT startup company in India{' '}
              <span>
                <BsPencil size={14} className="text-[#171A1FFF] " />
              </span>
            </p>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <div className="w-[221px] h-[56px] flex  items-center bg-[#12A9BCFF] rounded-sm shadow-sm">
            <p className="flex gap-2 items-center mx-auto text-base text-white">
              What is Marketing?{' '}
              <span>
                <BsPatchQuestion size={18} />
              </span>
            </p>
          </div>
        </div>

        <div className="w-[684px] h-[178px] rounded-sm ring-1 ring-[#12A9BCFF]">
          <div className=" gap-2 pt-4 px-1 text-[#0095A9FF] relative">
            <HiOutlineChatAlt2 size={20} className="absolute left-2" />
            <p className="pl-8">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis vitae cum, veniam aut fuga temporibus dolorem saepe
              nam ratione labore asperiores harum cupiditate sit! Amet libero
              nemo voluptatibus dignissimos eos voluptatum expedita ad, pariatur
              quasi assumenda, cum facilis earum ab sint eligendi? Quaerat
              voluptatum est ex ratione nesciunt illum doloribus.
            </p>
          </div>

          <div className="flex gap-4 justify-end  pr-4 pt-1 text-lg">
            <LiaCopy />
            <AiOutlineExport />
            <BsFileEarmarkArrowDown />
            <HiOutlineEnvelope />
          </div>
        </div>

        <div className="flex w-full justify-end">
          <div className="w-[664px] h-[56px] flex  items-center bg-[#12A9BCFF]   rounded-sm shadow-sm">
            <div className="flex  items-center  text-base text-white px-4">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                expedita voluptatem beatae eos. Ad, commodi.{' '}
              </p>
              <BsPatchQuestion size={24} />
            </div>
          </div>
        </div>
        <div className="w-[684px] h-[56px] rounded-sm ring-1 ring-[#BCC1CAFF] bg-[#FFFFFFFC] flex items-center text-[#0095A9FF]">
          <div className=" px-6 flex w-full items-center">
            <div className="flex  flex-grow items-center">
              <BsPatchQuestion size={24} />
              <div className=" pl-5">
                <input
                  type="text"
                  placeholder={`Enter your ${selectedDepartment || 'Marketing'} Query here...`}
                  className=" outline-none"
                />
              </div>
            </div>

            <button className="">
              <HiOutlinePaperAirplane />
            </button>
          </div>
        </div>
        <p className=" pl-8 text-xs">
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default Main
