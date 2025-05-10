import React, { useState } from 'react'
import UserLayout from "../../../Layout/UserLayout"
import AppointmentPayment from '../../Components/UserComponents/AppointmentPayment';
import InvoiceDetails from '../../Components/UserComponents/InvoiceDetails';
import PaymentMethod from '../../Components/UserComponents/PaymentMethod';
import { FaAngleRight } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const NewAppointment = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpenContent1, setIsOpenContent1] = useState(false);
    const [isOpenContent2, setIsOpenContent2] = useState(false);
    return (
        <div className='w-full gap-[20px]'>
            <div className='w-[93%] my-7 mx-auto'>
                {/*Heading */}
                <div className='w-full mb-7 flex items-center gap-2'>
                    <h6 className='text-[36px] font-[600] leading-[44px] sm:block hidden'>Appointment</h6>
                    <FaAngleRight className='text-[20px] sm:block hidden' />
                    <p className='text-[24px] font-[600] leading-[28px]'>Book new appointment</p>
                </div>

                {currentPage === 0 &&
                    <div>
                        {/* 1 Step Number div*/}
                        <div className='w-full mb-7 sm:w-[70%] mx-auto '>
                            <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className=' bg-black text-white grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080]  grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                                </div>
                            </div>
                        </div>
                        <div>Adding Calender Here</div>
                        {/* Button */}
                        <div className='w-full md:w-[80%] mt-4 mx-auto flex justify-end'>
                            <div className='w-[50%] md:w-[40%]'>
                                <button onClick={() => setCurrentPage(1)} className='bg-black w-full text-white rounded-lg h-[50px] text-center'>Continue</button>
                            </div>
                        </div>
                    </div>
                }

                {currentPage === 1 &&
                    <div>
                        {/* 2 Step Number div*/}
                        <div className='w-full mb-7 sm:w-[70%] mx-auto '>
                            <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className=' bg-black text-white  grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                                </div>
                            </div>
                        </div>
                        <AppointmentPayment />
                        {/* Button */}
                        <div className='w-full md:w-[80%] mt-4 mx-auto flex justify-end'>
                            <div className='w-[50%] md:w-[40%]'>
                                <button onClick={() => setCurrentPage(2)} className='bg-black w-full text-white rounded-lg h-[50px] text-center'>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                }
                {currentPage === 2 &&
                    <div>
                        {/* 3 Step Number div*/}
                        <div className='w-full mb-7 sm:w-[70%] mx-auto '>
                            <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='border border-[#808080]  grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                                </div>
                                <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='bg-black text-white   grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                    <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                                </div>
                            </div>
                        </div>
                        <h6 className='text-[20px] mb-6 font-[600] leading-[24px]'>Check Out</h6>
                        {/* For Mobile Screens */}
                        <div className='w-full flex flex-col lg:hidden'>
                            {/* left content accordien */}
                            <div onClick={() => { setIsOpenContent1(!isOpenContent1); setIsOpenContent2(false) }} className={` ${isOpenContent1 ? "" : "bg-white"} lg:hidden flex items-center justify-between px-[20px] h-[50px] border  rounded-t-xl border-black`}>
                                <h3 className='font-[600]'>Invoice detail</h3>
                                {isOpenContent1 ? <FaCaretUp /> : <FaCaretDown />}
                            </div>

                            {/* Left Side */}
                            {isOpenContent1 &&
                                <InvoiceDetails />
                            }

                            {/* Right content accordien */}
                            <div onClick={() => { setIsOpenContent2(!isOpenContent2); setIsOpenContent1(false) }} className={` ${isOpenContent2 ? "" : "bg-white"} lg:hidden flex items-center justify-between px-[20px] h-[50px] border border-t-[0px] border-black`}>
                                <h3 className='font-[600]'>Payment method</h3>
                                {isOpenContent2 ? <FaCaretUp /> : <FaCaretDown />}
                            </div>

                            {/* Right side */}
                            {isOpenContent2 &&
                                <PaymentMethod />
                            }

                        </div>
                        {/* For Desktop Screens */}
                        <div className='w-full lg:flex hidden'>
                            {/* left Side */}
                            <InvoiceDetails />
                            {/* Right Side */}
                            <PaymentMethod />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
NewAppointment.layout = page => <UserLayout children={page} title="NewAppointment" />

export default NewAppointment
