import React from 'react'
// import { useLocation } from 'react-router-dom'

let DashAppointData = [
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "New" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "New" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "New" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "New" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "New" },
]

const DashboardTable = ({agencyData}) => {
    return (
        <div className='w-full'>
            {/* {location.pathname === "/admin/dashboard" && */}
            <div className='w-full bg-white shadow-lg'>
                <div className='w-[98%] mx-auto p-2'>
                    {/* heading */}
                    <h4 className='mb-5 font-[700] text-[20px] leading-[24px]'>Appointments</h4>
                    <div className='overflow-x-scroll hide-scrollbar w-full '>
                        <table className='w-full'>
                            <tbody>
                                {/* Heading Row */}
                                <tr className=' capitalize text-[16px] leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>Name</td>
                                    <td className='w-[20%] text-nowrap px-3'>Date</td>
                                    <td className='w-[20%] text-nowrap px-3'>Time</td>
                                    <td className='w-[20%] text-nowrap px-3'>Status</td>
                                    <td className='w-[20%] text-nowrap px-3'>Action</td>
                                </tr>
                                {agencyData.appointments.map((data, index) => (
                                    <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                        <td className='w-[20%] text-nowrap px-3'>{data.user.name}</td>
                                        <td className='w-[20%] text-nowrap px-3'>{new Date(data.appointment_date).toDateString()}</td>
                                        <td className='w-[20%] text-nowrap px-3'>{data.appointment_time}</td>
                                        <td className={`w-[20%] text-nowrap px-3 ${data.payment_status == "unpaid" ? 'text-red-500' : 'text-[#1E5600]' } `}>{data.payment_status}</td>
                                        <td className='w-[20%] text-nowrap px-3'>View detail</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* } */}
        </div>
    )
}

export default DashboardTable
