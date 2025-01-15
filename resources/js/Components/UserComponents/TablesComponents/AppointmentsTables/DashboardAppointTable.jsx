import React from 'react'
import { Link } from '@inertiajs/react'

let DashboardAppointData = [
    { Id: "01", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "10:00 AM", Status: "Pending", Payment: "$700.00", textColor: "text-[#EA4232]" },
    { Id: "02", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
]

const DashboardAppointTable = () => {
    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[50px] rounded-t-lg pl-[20px] pr-[10px] border-[0.5px] border-[#808080] bg-white flex items-center'>
                        <tr className='w-full h-full flex justify-between items-center'>
                            <td>
                                <h6 className='text-[20px] font-[600] leading-[24px]'>Appointment</h6>
                            </td>
                            <td>
                                <Link href='/user/appointment' className="text-[#808080] underline text-[12px] font-[400] leading-[15]">View all</Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col justify-center items-center rounded-b-lg border-b-[0.5px] border-x-[0.5px] border-[#808080] bg-white'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-2 w-[15%]'>Doctor</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Date</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Time</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Status</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Payment</td>
                            <td className='text-nowrap px-2 w-[15%] text-center'>Action</td>
                        </tr>
                        {DashboardAppointData.map((data) => (
                            <tr key={data.Id} className='w-full px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-2 w-[15%]'>{data.Doctor}</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>{data.Date}</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>{data.Time}</td>
                                <td className={`${data.textColor} text-nowrap px-2 w-[15%] text-center `}>{data.Status}</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>{data.Payment}</td>
                                <td className='text-nowrap px-2 w-[15%] text-center underline'>View detail</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardAppointTable
