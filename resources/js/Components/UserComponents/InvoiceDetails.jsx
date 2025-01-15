import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";


const InvoiceDetails = () => {
    return (
        <div className='flex flex-col p-[10px] border lg:border-none border-black lg:p-0 w-full lg:w-[70%] gap-[14px]'>
            {/* 1st div */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <span className='w-[50px] h-[50px] rounded-full bg-[#231E204D]'></span>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#231E20] text-[20px] font-[500] leading-[24px]'>Invoice #1112345</h1>
                        <p className='flex gap-2 items-center text-[#808080] text-[12px] font-[500] leading-[14px]'>
                            <CiCalendarDate className='text-[15px]' />
                            Issued date: 20.11.2024
                        </p>
                    </div>
                </div>
                <p className='flex gap-2 items-center text-[#808080] text-[12px] font-[500] leading-[14px]'>
                    <FaRegQuestionCircle />
                    Unpaid
                </p>
            </div>
            {/* 2nd div */}
            <div className='text-[#808080] flex justify-between items-center'>
                <div className='w-[313px]'>
                    <h4 className='text-[20px] leading-[24px] font-[600]'>Service Charges</h4>
                    <p className='text-[12px] leading-[14px] font-[400]'>
                        <span className='text-[14px] leading-[16px] font-[600]'>Appointment Info:</span>
                        $30 per patient is all that is needed for an appointment deposit. <br /> <span className='text-[14px] leading-[16px] font-[600]'>Return Policy:</span>
                        There is no return for any services that the Atello provides.
                    </p>
                </div>
                <p className='text-[14px] leading-[16px] font-[400]'>
                    October 23, 2024 <br />
                    8:00 AM - 9:00AM
                </p>
                <span className='text-[12px] leading-[14px] font-[600]'>
                    $700.00
                </span>
            </div>
            {/* 3rd div */}
            <div className='w-full border-[0.5px] border-[#808080] rounded-lg'>
                <div className='w-[90%] mx-auto my-7 flex flex-col gap-[20px] font-[600] leading-[14px] text-[12px] text-[#808080]'>
                    <div className='flex justify-between items-center'>
                        <p className=''>Account number:</p>
                        <span className='flex gap-4 items-center text-black'>
                            11 11 222 4444 8000 3333 6578
                            <TbCopy className='text-[15px]' />
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className=''>Reference number:</p>
                        <span className='flex gap-4 items-center text-black'>
                            11 11 222 4444 8000 3333 6578
                            <TbCopy className='text-[15px]' />
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className=''>Pay by:</p>
                        <div className='flex items-center gap-3'>
                            <span className=''>20.11.2024</span>
                            <span className='flex gap-2 items-center text-[#9B0000]'>
                                <AiOutlineExclamationCircle />
                                <p>2 days overdue</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th div */}
            <div className='w-full border-[0.5px] border-[#808080] rounded-lg bg-[#FFFFFF]'>
                <div className='w-[95%] mx-auto mt-3 mb-5 font-[600] leading-[14px] text-[12px]'>
                    <table className='w-full'>
                        <tbody>
                            <tr className='h-[40px] text-[#808080] bg-[#F7F7F7] rounded-lg flex justify-between items-center px-[15px]'>
                                <td className=' w-[50%]'>Item</td>
                                <td className=' w-[25%] text-center'>Price</td>
                                <td className=' w-[25%] text-center'>Total price </td>
                            </tr>
                            <tr className='h-[40px] text-[#231E20] border-b flex justify-between items-center px-[15px]'>
                                <td className=' w-[50%]'>Consultation</td>
                                <td className=' w-[25%] text-center'>$700.00</td>
                                <td className=' w-[25%] text-center'>$700.00</td>
                            </tr>
                            <tr className='h-[40px] text-[#231E20] border-b flex justify-between items-center px-[15px]'>
                                <td className=' w-[50%]'>Strategy</td>
                                <td className=' w-[25%] text-center'>$200.00</td>
                                <td className=' w-[25%] text-center'>$200.00</td>
                            </tr>
                            <tr className='h-[40px] text-[#231E20] flex justify-between items-center px-[15px]'>
                                <td className=' w-[50%]'>Total incl. VAT</td>
                                <td className=' w-[25%] text-center'></td>
                                <td className=' w-[25%] flex justify-center items-center gap-1'>
                                    $900.00
                                    <TbCopy />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 5th div */}
            <div className='flex justify-between items-center font-[600] leading-[14px] text-[12px] text-[#808080]'>
                <p>Bill sent by email and letter</p>
                <div className='flex gap-4'>
                    <span className='flex gap-2 items-center justify-center border-[1px] border-[#808080] bg-white py-1 px-2 rounded'>
                        <IoEyeOutline />
                        Preview invoice pdf
                    </span>
                    <span className='flex gap-2 items-center justify-center border-[1px] border-[#808080] bg-white py-1 px-2 rounded'>
                        <AiOutlineDownload />
                        Download invoice pdf
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails
