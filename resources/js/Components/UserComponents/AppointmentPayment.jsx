import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { LuFolderCheck } from "react-icons/lu";

const AppointmentPayment = () => {
    return (
        <div className='w-full'>
            <p className='font-400 mb-6 text-[20px] leading-[24px]'>Payment</p>
            <div className='w-full md:w-[80%] mx-auto flex flex-col gap-[30px]'>
                {/* Payment */}
                <div className='w-full px-2 overflow-x-scroll'>
                    <div className='flex gap-2 justify-center items-center font-[400] text-[12px] leading-[14px] my-2'>
                        <div className='w-[20%]'></div>
                        <div className='w-[40%]'>Service</div>
                        <div className='w-[20%]'>Date/Time</div>
                        <div className='w-[15%]'>Price</div>
                    </div>
                    <div className='flex gap-1 sm:gap-2 justify-center items-center bg-[#E5E5E5] rounded-xl min-h-[150px] py-5 px-1'>
                        <div className='w-[20%] flex gap-3 justify-center items-center'>
                            <RxCross2 className='text-[30px]' />
                            <LuFolderCheck className='text-[70px] font-sm' />
                        </div>
                        <div className='w-[40%]'>
                            <p className='text-[20px] font-[600] leading-[24px]'>Service Charges</p>
                            <p className='text-[12px] font-[400] leading-[14px]'>
                                <span className='font-[600]'>Appointment Info: </span>
                                $30 per patient is all that is needed for an appointment deposit. <br />
                                <span className='font-[600]'>Return Policy: </span>
                                There is no return for any services that the Atello provides.
                            </p>
                        </div>
                        <div className='w-[20%] font-[400] text-[14px] leading-[16px]'>October 23, 2024 <br />
                            8:00 AM - 9:00AM</div>
                        <div className='w-[15%] font-[400] text-[12px] leading-[14px]'>$700.00</div>
                    </div>
                </div>
                {/* cart tools */}
                <div className='w-full md:w-[40%] self-end flex flex-col text-[16px] font-[400] leading-[20px] text-[#231E20]'>
                    <p className=' mb-4 text-[20px] font-[600] leading-[24px]'>Cart Tools</p>
                    <div className='flex items-center h-[50px] bg-[#E4E4E4]'>
                        <div className='w-[50%] px-[20px]'>Price</div>
                        <div className='w-[50%] px-[20px]'>$700.00</div>
                    </div>
                    <div className='flex items-center h-[50px] bg-[#D9D9D9]'>
                        <div className='w-[50%] px-[20px]'>Price</div>
                        <div className='w-[50%] px-[20px]'>$700.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentPayment
