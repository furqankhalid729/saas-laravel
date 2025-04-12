import React from 'react'
import { Link } from '@inertiajs/react'

const ClientListTable = ({ clients }) => {
    return (
        <div className='grid grid-cols-1'>
            <table className='w-full'>
                <tbody>
                    {/* Table Headings */}
                    <tr className='text-[16px] capitalize leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                        <td className='w-[5%] text-nowrap px-3'>ID</td>
                        <td className='w-[10%] text-nowrap px-3'>Email</td>
                        <td className='w-[20%] text-nowrap px-3 text-center'>Phone no.</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Age</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Gender</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Address</td>
                        <td className='w-[10%] text-nowrap px-3'></td>
                    </tr>

                    {/* Table Rows */}
                    {clients.map((client, index) => (
                        <tr key={index} className='text-[14px] leading-[16px] font-[400] border-b text-[#808080] border-[#808080] h-[40px]'>
                            <td className='w-[10%] text-nowrap px-3'>{index + 1}</td>
                            <td className='w-[10%] text-nowrap px-3'>{client.email}</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>{client.phoneNo}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{client.age}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{client.gender}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{client.address}</td>
                            <td className='w-[10%] text-nowrap px-3 text-[#231E20] underline'>
                                {/* <Link href={`/admin/client-list/client-form/${client.client_id}`}>View Detail</Link> */}
                                <Link href={`/admin/clients/form/${client.client_id}`}>View Detail</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClientListTable
