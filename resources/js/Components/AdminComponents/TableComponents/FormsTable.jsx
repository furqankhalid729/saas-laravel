import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from '@inertiajs/react';

let FormData = [
    { Form: "Chest X-ray", Describe: "This is chest x-ray form", Status: "Fulfilled" },
    { Form: "General Lab", Describe: "This is chest x-ray form", Status: "Unfulfilled" },
    { Form: "Chest X-ray", Describe: "This is chest x-ray form", Status: "Fulfilled" },
    { Form: "Chest X-ray", Describe: "This is chest x-ray form", Status: "Unfulfilled" },
    { Form: "General Lab", Describe: "This is chest x-ray form", Status: "Fulfilled" },
    { Form: "Chest X-ray", Describe: "This is chest x-ray form", Status: "Unfulfilled" },
]
const FormsTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center h-[60px]'>
                    <h1 className='font-[700] text-[24px] leading-[28px]'>Forms</h1>
                    <div className='flex items-center text-nowrap gap-3'>
                        <p className='flex px-2 py-1 text-black items-center gap-1 border border-black rounded-full font-[400] text-[12px] leading-[10px]'>
                            All
                            <span><FaAngleDown /></span>
                        </p>
                        <Link href="/admin/client-list/client-form/new-forms" className='flex items-center gap-1 text-white bg-black px-3 py-1 rounded-lg'>
                            <GoPlusCircle /> Request new forms
                        </Link>
                    </div>
                </div>
                {/* table */}
                <table className='w-full'>
                    <tbody>
                        {/* Heading Row */}
                        <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                            <td className='w-[20%] text-nowrap px-3'>Form</td>
                            <td className='w-[20%] text-nowrap px-3'>Describe</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Action</td>
                            <td className='w-[20%] text-nowrap px-3'></td>
                        </tr>
                        {FormData.map((data, index) => (
                            <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>{data.Form}</td>
                                <td className='w-[20%] text-nowrap px-3'>{data.Describe}</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>{data.Status}</td>
                                <td className='w-[20%] text-nowrap px-3'>
                                    <div className=' flex items-center justify-center gap-1'>
                                        <div className=' border border-[#808080] rounded'>
                                            <FaRegEdit className='text-[20px] text-[#FF2C2C] p-1' />
                                        </div>
                                        <div className=' border border-[#808080] rounded'>
                                            <IoEyeOutline className='text-[20px] text-black p-1' />
                                        </div>
                                        <div className=' border border-[#808080] rounded'>
                                            <RiDeleteBinLine className='text-[20px] text-[#AF0000] p-1' />
                                        </div>
                                    </div>
                                </td>
                                <td className='w-[20%] text-nowrap px-3 text-[#EA4232]'>Print</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormsTable
