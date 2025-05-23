import React from 'react'
import { Link } from '@inertiajs/react';
const InvoicesTable = ({invoices}) => {
    return (
        <div className='overflow-x-scroll  hide-scrollbar w-full'>
            <table className='w-full'>
                <tbody className='w-full flex flex-col justify-center items-center border-t-[0.5px] border-[#808080]'>
                    {/* Heading Row */}
                    <tr className='w-full capitalize  border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                        <td className='w-[17%] px-3 text-nowrap'>Invoice</td>
                        <td className='w-[15%] px-3 text-nowrap text-center'>Amount</td>
                        <td className='w-[20%] px-3 text-nowrap text-center'>Issue Date</td>
                        <td className='w-[25%] px-3 text-nowrap text-center'>Due Date</td>
                        <td className='w-[13%] px-3 text-nowrap text-center'>Status</td>
                        <td className='w-[17%] px-3 text-nowrap text-center'>Action</td>
                    </tr>
                    {invoices.map((data) => (
                        <tr key={data.id} className='w-full border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                            <td className='w-[17%] px-3 text-nowrap'>{data.invoice_number}</td>
                            <td className='w-[15%] px-3 text-nowrap text-center'>{data.total}</td>
                            <td className='w-[20%] px-3 text-nowrap text-center'>{data.issued_date}</td>
                            <td className='w-[25%] px-3 text-nowrap text-center'>{data.due_date}</td>
                            <td className={`${data.status == 'unpaid' ? 'text-red-600' : 'text-green-600'} w-[13%] px-3 text-nowrap text-center `}>{data.status}</td>
                            <td className='w-[17%] px-3 text-nowrap text-center underline'>
                                <Link href={route('user.invoice.show', data.id)} className='text-[#007bff] hover:text-[#0056b3]'>
                                    View Detail
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InvoicesTable
