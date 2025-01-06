import React from 'react'
// import logoImg from "../../../assets/attelo-brand-name.jpeg"
import { MdVerifiedUser } from "react-icons/md";

const GeneralDetails = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between'>
            <h3 className='font-[500] text-[16px] leading-[20px] p-3'>Details</h3>
            <div className='w-full sm:w-[75%] bg-white rounded-xl border-[0.5px] border-[#808080]'>
                {/* logo and Upload photo */}
                <div className='p-5 flex gap-4 items-center border-b border-[#808080]'>
                    {/* <img src={logoImg} alt="logoImg" className='w-[34px] h-[34px] rounded-lg' /> */}
                    <button className='border border-[#808080] rounded-lg px-2 py-1 font-[400] text-[10px] leading-[12px]'>Upload Photo</button>
                </div>
                {/* First name, last name, Agency Address */}
                <form className='p-5 pb-7 border-b border-[#808080]'>
                    <div>
                        {/* First and last name div */}
                        <div className='flex flex-col xl:flex-row gap-5 w-full'>
                            {/* First name */}
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="firstName" className='font-[400] text-[12px] leading-[16px] text-black'>
                                    First Name
                                </label>
                                <input type="text" id='firstName' placeholder='Attelo' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F] placeholder:text-[#2F2F2F]' />
                            </div>
                            {/* Last name */}
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="lastName" className='font-[400] text-[12px] leading-[16px] text-black'>
                                    Last Name
                                </label>
                                <input type="text" id='lastName' placeholder='Company' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F] placeholder:text-[#2F2F2F]' />
                            </div>
                        </div>
                        <p className='mt-1 font-[300] text-[12px] leading-[16px] text-[#808080]'>Use your first and last name as they appear on your government-issued ID.</p>
                        {/* Agency Address */}
                        <div className='mt-4 flex flex-col gap-1 w-full'>
                            <label htmlFor="agencyAddress" className='font-[400] text-[12px] leading-[16px] text-black'>
                                Agency Address
                            </label>
                            <input type="text" id='agencyAddress' placeholder=' Attelo Headquarter California USA ' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F] placeholder:text-[#2F2F2F]' />
                        </div>
                    </div>
                </form>
                {/* Email */}
                <div className='p-5 pb-7 border-b border-[#808080] font-[400] text-[12px] leading-[16px]'>
                    <h4 className='font-[300]'>Email</h4>
                    <div className='mt-3 flex justify-between'>
                        <p>attelocompany12@gmail.com</p>
                        <span className='text-[#047600] flex gap-1 items-center '>
                            <MdVerifiedUser className='text-[14px]' />
                            Verified
                        </span>
                        <button className='text-[#006AFF]'>Update</button>
                    </div>
                </div>
                {/* Phone No */}
                <div className='p-5 pb-7 font-[400] text-[12px] leading-[16px]'>
                    <h4 className='font-[300]'>Phone number (optional)</h4>
                    <div className='mt-3 flex justify-between'>
                        <p>No phone number</p>
                        <button className='text-[#006AFF]'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails
