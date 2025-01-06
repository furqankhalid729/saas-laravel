import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { RiIdCardLine } from "react-icons/ri";
import { RxIdCard } from "react-icons/rx";
import { BsFillPassportFill } from "react-icons/bs";
import { SiRotaryinternational } from "react-icons/si";

const AdditionalDetails = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[93%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center sm:h-[40px] border-b border-[#808080]'>
                    <h1 className='font-[700] text-[24px] leading-[28px] text-nowrap'>Additional Details</h1>
                    <div className='flex items-center text-nowrap gap-3'>
                        <button className='flex px-2 py-1 text-black items-center gap-1 border border-black rounded-full font-[400] text-[12px] leading-[10px]'>
                            Request document
                            <span><FaAngleDown /></span>
                        </button>
                    </div>
                </div>
                {/* Requested Documents */}
                <div className='my-7 flex flex-col gap-4'>
                    <h6 className='font-[600] text-[16px] leading-[19px]'>Requested Documents</h6>
                    <div className='w-full flex items-center font-[400] text-[14px] leading-[16px]'>
                        <p className='w-[50%] '>ID Card</p>
                        <p className='w-[50%] '>Passport</p>
                    </div>
                    <div className='w-full flex items-center font-[400] text-[14px] leading-[16px]'>
                        <p className='w-[50%] '>Residence</p>
                        <p className='w-[50%] '>Nationality</p>
                    </div>
                </div>
                {/* Submited Documents */}
                <div className='mb-7 flex flex-col gap-4'>
                    <h6 className='font-[600] text-[16px] leading-[19px]'>Submited Documents</h6>
                    <div className='text-[#808080] flex gap-7 items-center'>
                        {/* Id card */}
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <RiIdCardLine className='w-[35px] h-[28px]'/>
                            <p>ID Card</p>
                        </div>
                        {/* License */}
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <RxIdCard className='w-[35px] h-[28px]'/>
                            <p>License</p>
                        </div>
                        {/* Passport */}
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <BsFillPassportFill className='w-[35px] h-[28px]'/>
                            <p>Passport</p>
                        </div>
                        {/* Nationality */}
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <SiRotaryinternational className='w-[35px] h-[28px]'/>
                            <p>Nationality</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalDetails
