import React from 'react'
import { FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const ClinicHeader = ({ onClickSideBar, SidebarOpen}) => {
    return (
        <nav className='sticky top-0 z-50 flex justify-center items-center bg-[#231E20]  px-3 sm:px-10 py-2 w-[100%]'>
            <div className='w-full flex justify-between items-center sm:px-2 py-2'>
                {/* left side logo */}
                <div className='flex gap-3 text-white items-center'>
                    <GiHamburgerMenu onClick={onClickSideBar} className='text-[25px] md:hidden' />
                    <img src="/storage/images/Clinic/SpotLogo.png" alt="SpotLogo" className='w-[50px] h-[50px] rounded-full' />
                </div>
                {/* Right side */}
                <div onClick={() => SidebarOpen(false)} className='flex items-center justify-between gap-4 text-white'>
                    <FiBell className='h-[20px] w-[20px]' />
                    <img src="/storage/images/ProfilePic.jpeg" alt="ProfilePic" className='w-[40px] h-[40px] rounded-full' />
                    <div className='flex items-center justify-between min-w-[73px] h-[17px] py-[1px] '>
                        <p className='font-[700] text-[13px]'>Luana</p>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ClinicHeader
