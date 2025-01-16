import React from 'react'
import AtteloBrand from "../../assets/attelo-brand-name.jpeg"
import backPic from "../../assets/wellcomeScreen_pic.png"
import { GiBeveledStar } from "react-icons/gi";

const ClinicWellcomeScreen = () => {
    return (
        <div className='md:w-[50%] lg:w-[60%] bg-[#231E20] flex flex-col justify-end'>
            {/* BrandLogo */}
            <div className='hidden top-[50px] left-[50px] items-center justify-center p-2'>
                <img src={AtteloBrand} alt="AtteloBrand" className='w-[100px] h-[100px] rounded-full' />
            </div>
            {/* WellcomeScreen */}
            <div className='hidden md:flex flex-col justify-between items-center text-white my-auto w-full h-[90%]'>
                <div className='flex flex-col h-[650px] px-10'>
                    <GiBeveledStar className='w-[100px] h-[100px] rounded-full ' />
                    <div className='w-full h-[520px] flex flex-col items-center justify-center p-2 relative'>
                        <img src={backPic} alt="backPic" className='absolute w-full h-[80%]' />
                        <div className='flex flex-col justify-center gap-[10px] z-10 w-full h-full'>
                            <h1 className='md:text-[44px] lg:text-[54px] md:leading-[50px] lg:leading-[66px] font-[700]'>Hello SPOT <br />
                                to Welcome back!👋🏻</h1>
                            <p className='md:text-[16px] lg:text-[24px] leading-[28px] font-[400] text-left'>"Welcome to atello – Connecting Spots to Success!" We help make your dreams of working, studying, or living in another country come true! We're not just advisors; we're your friends guiding you through the process every step of the way.</p>
                        </div>
                    </div>
                </div>
                <footer className='text-[#B6B6B6] md:text-[22px] lg:text-[26px] font-[400] leading-[31px] p-2'>Immigration Spot Clinic</footer>
            </div>
        </div>
    )
}

export default ClinicWellcomeScreen
