import React, { useState} from 'react'
import { Link } from '@inertiajs/react';



const ClientListTable = ({ agencyUsers: userData }) => {
    console.log(userData);
    const [agencyUsers, setAgencyUsers] = useState(userData);
    return (
        <div className='grid grid-cols-1'>
            <table className='w-full'>
                <tbody>
                    {/* Heading Row */}
                    <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                        <td className='w-[5%] text-nowrap px-3'>ID</td>
                        <td className='w-[10%] text-nowrap px-3'>Name</td>
                        <td className='w-[10%] text-nowrap px-3'>Email</td>
                        <td className='w-[20%] text-nowrap px-3 text-center'>Phone no.</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Country</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Status</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Exam Status</td>
                        <td className='w-[10%] text-nowrap px-3'></td>
                    </tr>
                    {agencyUsers.map((data, index) => (
                        <tr key={index} className='text-[14px] leading-[16px] font-[400] border-b text-[#808080] border-[#808080] h-[40px]'>
                            <td className='w-[10%] text-nowrap px-3'>{data.user.id}</td>
                            <td className='w-[10%] text-nowrap px-3'>{data.user.name}</td>
                            <td className='w-[10%] text-nowrap px-3'>{data.user.email}</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>{data.user.phone_number}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{data.user.country}</td>
                            <td className={`w-[10%] text-nowrap px-3 text-center ${data.Color}`}>Pending</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>Pending</td>
                            <td className='w-[10%] text-nowrap px-3 text-[#231E20] underline'>
                                <Link href={route('agency.clients.detail', { id: data.user.id })} >View Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClientListTable
