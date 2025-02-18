import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const ClientProfile = () => {
    return (
        <div className='w-full bg-white'>
            {/* Profile */}
            <div className='w-[93%] mx-auto py-3 flex flex-col lg:flex-row justify-between gap-3'>
                {/* left div */}
                <div className='flex  justify-center items-end gap-3'>
                    <IoIosArrowBack className='text-[40px]' />
                    <img src="/storage/images/Clinic/ClientProfile.jpeg" alt="ClientPic" className='w-[120px] h-[120px] rounded-lg' />
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-[700] text-[32px] leading-[38px] text-[#FF2C2C]'>Devin Haley</h1>
                        <p className='flex flex-col gap-2 text-[#808080]'>
                            info@devinhaley@gmail.com | +1 99 87 65 667
                            <span>www.devinhaley.com</span>
                        </p>
                    </div>
                </div>
                {/* Right div */}
                <div className='flex flex-col justify-between items-end'>
                    <p className='flex gap-2 w-[300px] text-[#808080]'>
                        <MdOutlineLocationOn className='text-[40px]' />
                        3293 Eagle Ridge Dr, Woodbridge, Virginia 22191
                    </p>
                    <span className='text-[#007AFF] bg-[#7878801F] rounded-md py-1 px-4' >
                        Jun 10, 2024
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ClientProfile
