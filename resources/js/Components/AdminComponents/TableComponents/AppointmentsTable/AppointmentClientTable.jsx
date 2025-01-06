import React from 'react'

let ClientAppointData = [
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Pending", color: "text-[#EA4232]" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Lower", color: "text-[#1E5600]" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Hepatitis", color: "text-[#F7F608]" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Perfect", color: "text-[#4E32EA]" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Normal", color: "text-[#1E5600]" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Normal", color: "text-[#1E5600]" },
  ]
  
const ClientFormTable = () => {
    return (
        <div className='w-full'>
            <div className='w-full bg-white shadow-lg'>
                <div className='w-[98%] mx-auto p-2'>
                    {/* heading */}
                    <h4 className='mb-5 font-[700] text-[20px] leading-[24px]'>Appointments</h4>
                    <div className='overflow-x-scroll hide-scrollbar w-full '>
                        <table className='w-full'>
                            <tbody>
                                {/* Heading Row */}
                                <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>Doctor</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>Date</td>
                                    <td className='w-[20%] text-nowrap text-center px-3'>Time</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                                    <td className='w-[20%] text-nowrap px-3'>Action</td>
                                </tr>
                                {ClientAppointData.map((data, index) => (
                                    <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                        <td className='w-[20%] text-nowrap px-3'>{data.name}</td>
                                        <td className='w-[20%] text-nowrap px-3 text-center'>{data.Date}</td>
                                        <td className='w-[20%] text-nowrap text-center px-3'>{data.time}</td>
                                        <td className={`w-[20%] text-nowrap px-3 text-center ${data.color}`}>{data.Status}</td>
                                        <td className='w-[20%] text-nowrap px-3'>View detail</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientFormTable
