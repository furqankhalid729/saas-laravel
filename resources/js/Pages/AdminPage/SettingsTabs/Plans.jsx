import React from 'react'
import { RiBillLine } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Plans = ({ agency }) => {
    return (
        <div>
            <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Plan</h1>
            {/* Plan Details */}
            <div className='w-full p-5 bg-white rounded-lg border-[0.5px] border-[#808080]'>
                {/* Details */}
                <div className='mb-6 flex justify-between items-center'>
                    {/* heading and links */}
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-[600] text-[16px] leading-[19px]'>Plan detail</h4>
                        <p className='font-[400] teext-[14px] leading-[16px]'>View the <span className='underline text-[#006AFF]'>term of service</span> and <span className='underline text-[#006AFF]'>privacy policy.</span></p>
                    </div>
                    {/* button */}
                    <button className='px-4 py-2 border border-[#808080] rounded-lg'>Change Plan</button>
                </div>
                {/* Starter */}
                <div className='w-full p-5 border-[0.5px] border-[#808080] rounded-lg'>
                    <h4 className='font-[700] text-[20px] leading-[24px]'>Starter</h4>
                    <p className='mt-2 font-[400] text-[14px] leading-[16px] text-[#808080] pb-7 border-b-[0.5px] border-[#808080]'>
                        <span className='font-[700] text-[20px] leading-[24px] text-black'>$29 </span>
                        USD/month until November 20, 2024
                    </p>
                    <button className='mt-6 font-[600] text-[16px] leading-[19px] text-[#808080]'>View all features</button>
                </div>
            </div>
            {/* Billing */}
            <div className='mt-7 w-full p-5 bg-white rounded-lg border-[0.5px] border-[#808080]'>
                <h4 className='mb-5 font-[600] text-[16px] leading-[19px]'>Billing</h4>
                {/* billing cycle and payment method */}
                <div className='w-full p-5 border-[0.5px] border-[#808080] rounded-lg'>
                    {/* billing cycle */}
                    <div className='pb-6 border-b-[0.5px] border-[#808080] flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'>
                            <RiBillLine className='text-[20px]' />
                            <div className='flex flex-col gap-1 text-[#808080] font-[400] text-[16px] leading-[20px]'>
                                <p>Billing cycle</p>
                                <p>First month for $1.00 USD. $29.00 USD starting November 20, 2024</p>
                            </div>
                        </div>
                        <div className='bg-[#C4E2FF] px-4 py-2 flex items-center gap-2 rounded-lg'>
                            <AiOutlineExclamationCircle className='text-[20px]' />
                            <p>Pay yearly and save $72/year</p>
                        </div>
                    </div>
                    {/* Payment method */}
                    <div className='py-5 flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            {/* <img src={mastercard} alt="mastercard" className='w-[35px] h-[28px] border border-[#808080] p-1 rounded-md' /> */}
                            <div className='text-[#585858] flex flex-col gap-1'>
                                <h6 className='font-[600] text-[14px] leading-[16px]'>Payment method</h6>
                                <p className='font-[400] text-[12px] leading-[14px]'>Mastercard ending is 4556</p>
                            </div>
                        </div>
                        <button className='px-3 border border-[#808080] roundedfont-[400] text-[12px] leading-[14px]'>Update</button>
                    </div>
                </div>
            </div>

            {/* User Plans */}
            <div className='mt-7 w-full p-5 bg-white rounded-lg border-[0.5px] border-[#808080]'>
                <h4 className='mb-5 font-[600] text-[16px] leading-[19px]'>User Inital Plan</h4>
                <div className='w-full p-5 border-[0.5px] border-[#808080] rounded-lg'>
                    <div className='pb-6 border-b-[0.5px] border-[#808080] flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'>
                            <RiBillLine className='text-[20px]' />
                            <div className='flex flex-col gap-1 text-[#808080] font-[400] text-[16px] leading-[20px]'>
                                <p>User Plans</p>
                                <p>Inital Payment: ${agency.agency_settings.settings.userPlan.price }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* button */}
            <div className='w-full text-end'>
                <button className='my-7 bg-white border border-[#808080] rounded px-2 py-[0.5px] font-[400] text-[12px] leading-[14px] text-[#8A0000]'>Deactivate account</button>
            </div>
        </div>
    )
}

export default Plans
