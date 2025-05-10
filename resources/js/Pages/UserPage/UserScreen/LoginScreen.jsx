import React from 'react'
import Login from '../../Components/UserComponents/Login'
import { usePage } from '@inertiajs/react'

const LoginScreen = () => {
  const { props } = usePage()
  const agency = props.agency

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[50%] lg:w-[60%] bg-[#231E20] flex flex-col justify-end">
        <div className="hidden top-[50px] left-[50px] items-center justify-center p-2">
          <img
            src="/storage/images/Clinic/SpotLogo.png"
            alt="AtteloBrand"
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>

        <div className="hidden md:flex flex-col justify-between items-center text-white my-auto w-full h-[90%]">
          <div className="flex flex-col h-[650px] px-10">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-[100px] h-[100px] rounded-full " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320.188 23.375l-69.25 103.063 3.687 54.062 24.563-36.375 15.156-22.47 1.906 27.032 2.97 42.282 29.436-43.814-8.47-123.78zM88.155 85.655l54.688 111.626 48.03 23.532-19.405-39.156-12.25-24.72 24.75 12.19 39.343 19.374-23.625-48.188L88.156 85.656zm191.375 91.376l-25.842 38.282-4.563 6.75-7.313-3.593-41.343-20.376 20.25 40.875 3.624 7.343-6.78 4.562-38.408 25.875 46.22 3.03 8.124.533.563 8.156 3.218 45.717 25.25-38.03 4.533-6.844 7.375 3.625L316 313.406l-20.344-41.594-3.594-7.343 6.813-4.533 37.938-25.25-45.344-2.906-8.158-.53-.562-8.156-3.22-46.063zm86.533 7.69l-45.032 30.25 44.564 2.874 27.625 1.78-23.033 15.314-35.812 23.843 52.688 3.595 102.968-69.22-123.967-8.436zm-237.407 63.593l-103 69.218 124 8.44 44-29.564-43.03-2.844-27.282-1.78L146.03 276.5l36.407-24.5-53.78-3.688zm197.03 42.375l19.127 39.093 12 24.564-24.532-12.063-39.217-19.342 23.562 48.125 111.5 54.625-54.688-111.625-47.75-23.375zm-108.217 28.28l-30.157 44.876 8.468 123.78 69.25-103.062-3.592-52.937-23.782 35.75L222.5 390.25l-1.938-27.375-3.093-43.906z"></path></svg>

            <div className="w-full h-[520px] flex flex-col items-center justify-center p-2 relative">
              <div className="flex flex-col justify-center gap-[10px] z-10 w-full h-full">
                <h1 className="md:text-[44px] lg:text-[54px] md:leading-[50px] lg:leading-[66px] font-[700]">
                  Hello SPOT <br /> to Welcome back!👋🏻
                </h1>
                <p className="md:text-[16px] lg:text-[24px] leading-[28px] font-[400] text-left">
                  "Welcome to atello – Connecting Spots to Success!" We help make your dreams of working,&nbsp;studying, or living in another country come true! We're not just advisors; we're your friends guiding you&nbsp;through the process every step of the way.
                </p>
              </div>
            </div>
          </div>
          <footer className="text-[#B6B6B6] md:text-[22px] lg:text-[26px] font-[400] leading-[31px] p-2">
            Immigration Spot Clinic
          </footer>
        </div>
      </div>
      <div className='w-full min-h-screen md:w-1/2 flex justify-center items-center '>
        <Login agency={agency} />
      </div>
    </div>
  )
}

export default LoginScreen
