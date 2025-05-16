import React from 'react';
import { Link } from '@inertiajs/react'
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const RequestedFormTable = ({ requestedForms }) => {
    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[60px] border-b-[0.7px] border-[#808080] flex items-center'>
                        <tr className='w-full h-full flex items-center'>
                            <td>
                                <h6 className='text-[36px] font-[600] leading-[43px]'>Requested Forms</h6>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col justify-center items-center'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-3 w-[20%]'>Form</td>
                            <td className='text-nowrap px-3 w-[30%] text-center'>Date</td>
                            <td className='text-nowrap px-3 w-[30%] text-center'>Status</td>
                            <td className='text-nowrap px-3 w-[15%] text-center'>Action</td>
                        </tr>
                        {requestedForms.map((data) => (
                            <tr key={data.Id} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-3 w-[20%]'>{data.agency_form.form_name}</td>
                                <td className='text-nowrap px-3 w-[30%] text-center'>{new Date(data.created_at).toDateString()}</td>
                                <td className={`${data.status == "pending" ? 'text-red-600' : 'text-green-600'} text-nowrap px-3 w-[30%] text-center`}>{data.status}</td>
                                <td className='text-nowrap px-3 w-[15%] flex items-center justify-center gap-2'>
                                    <Link href={route('user.forms.add.info', data.agency_form_id)}>
                                        <FaEdit className='text-[#FF2C2C]' />
                                    </Link>
                                    <Link href={route('user.forms.requested.show', data.agency_form_id)}>
                                        <IoEyeOutline className='text-black border-[0.5px] rounded-sm' />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestedFormTable
