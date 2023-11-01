import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-white">
      <div className="flex flex-col gap-2 pt-8 items-center">
        <h2 className=' font-bold text-2xl'>Welcome Back</h2>
        <p className=' text-base font-normal'>Sign in to continue to Aiworksquad</p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder='Email'
            className="w-[279px] h-[42px] pl-8 pr-4 font-normal text-lg bg-[#171A1FFF] outline-none rounded-md border-[#FFFFFFFF] border-[1px] border-solid  text-[#9095A0FF]"
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <AiOutlineMail className="text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder='Password'
            className="w-[279px] h-[42px] pl-8 pr-4 font-normal text-lg bg-[#171A1FFF] outline-none rounded-md border-[#FFFFFFFF] border-[1px] border-solid  text-[#9095A0FF]"
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <BiLockAlt className="text-gray-400" />
          </div>
        </div>

        <div className='flex justify-between items-center text-sm'>
          <div className='flex items-center gap-2'>
            <input type="checkbox"  className='opacity-1'/>
            <label>Remember me</label>
          </div>
          <p>Forgot password?</p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
