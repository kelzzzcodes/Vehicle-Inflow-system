import React from 'react'
import LogoLogin from '../../Assets/LogoLogin.png'
import LoginForm from '../../Components/LoginForm';

const Login = ({isLoggedIn}) => {
  return (
    <div className="bg-[#323842] w-full h-screen flex flex-col">
      <div className="flex p-8">
        <img src={LogoLogin} alt="LogoLogin" className=" w-[222px] h-[49px]" />
      </div>

      <div className="flex flex-col mx-auto my-16  bg-[#171A1FFF] w-[626px] h-[599px] rounded-r-lg ">
        <LoginForm  isLoggedIn={isLoggedIn}/>
      </div>

      <div className="flex justify-center">
        <p className=" text-base py-2 text-white font-normal">
          2023 AiworkSquad.
        </p>
      </div>
    </div>
  )
}

export default Login
