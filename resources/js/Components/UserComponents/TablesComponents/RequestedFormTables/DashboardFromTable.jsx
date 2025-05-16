import React from 'react'
import { Link } from '@inertiajs/react';
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


const DashboardFromTable = ({requestedForms}) => {
    console.log(requestedForms)
    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[50px] rounded-t-lg pl-[20px] pr-[10px] border-[0.5px] border-[#808080] bg-white flex items-center'>
                        <tr className='w-full h-full flex justify-between items-center'>
                            <td>
                                <h6 className='text-[20px] font-[600] leading-[24px]'>Requested Form</h6>
                            </td>
                            <td>
                                <Link href='/user/appointment' className="text-[#808080] underline text-[12px] font-[400] leading-[15]">View all</Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full capitalize  flex flex-col justify-center items-center rounded-b-lg border-b-[0.5px] border-x-[0.5px] border-[#808080] bg-white'>
                        {/* Heading Row */}
                        <tr className='w-full px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-3 w-[20%]'>Form</td>
                            <td className='text-nowrap px-2 w-[30%] text-center'>Date</td>
                            <td className='text-nowrap px-2 w-[30%] text-center'>Status</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Action</td>
                        </tr>
                        {requestedForms.slice(0, 5).map((data) => (
                            <tr key={data.id} className='w-full px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-2 w-[20%]'>{data.agency_form.form_name}</td>
                                <td className='text-nowrap px-2 w-[30%] text-center'>{new Date(data.created_at).toDateString()}</td>
                                <td className={`${data.textColor} text-nowrap px-2 w-[30%] text-center`}>{data.status}</td>
                                <td className='text-nowrap px-2 w-[15%] flex items-center justify-center gap-2'>
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

export default DashboardFromTable
