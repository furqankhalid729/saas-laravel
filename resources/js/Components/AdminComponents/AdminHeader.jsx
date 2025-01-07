import React from 'react'
import { FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";


const AdminHeader = ({ onClickSideBar, SidebarOpen }) => {

    return (
        <nav className='sticky top-0 z-50 flex justify-center items-center bg-[#231E20]  px-3 md:px-10 py-2 w-[100%]'>
            <div className='w-full flex justify-between items-center sm:px-2 py-2'>
                {/* left side logo */}
                <div className='flex gap-3 text-white items-center'>
                    <GiHamburgerMenu onClick={onClickSideBar} className='text-[25px] md:hidden' />
                    <img src="/storage/Images/attelo-brand-name.jpeg" alt="AtteloBrand" className='w-[50px] h-[50px] rounded-full' />
                </div>
                {/* Search part */}
                <div className='hidden sm:flex h-[50px] lg:w-[440px] items-center justify-center gap-4 text-white bg-[#3A3A3A] px-2 py-1 rounded-md'>
                    <FiSearch className='text-white text-[24px]' />
                    <input type="text" placeholder='Search...' className='bg-[#3A3A3A] font-[400] text-[12px] leading-[15px] w-full' />
                    <div className='w-[44px] h-[36px] flex items-center justify-center bg-[#B8B8B826] rounded-md'>
                        <LuCalendarDays className='text-[20px] text-white' />
                    </div>
                </div>
                <FiSearch className='block sm:hidden text-white text-[24px]' />
                {/* Right side */}
                <div onClick={() => SidebarOpen(false)} className='flex items-center justify-between gap-4 text-white'>
                    <FiBell className='h-[20px] w-[20px]' />
                    <img src="/storage/Images/ProfilePic.jpeg" alt="ProfilePic" className='w-[40px] h-[40px] rounded-full' />
                    <div className='flex items-center justify-between min-w-[73px] h-[17px] py-[1px] '>
                        <p className='font-[700] text-[13px]'>Luana</p>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminHeader
