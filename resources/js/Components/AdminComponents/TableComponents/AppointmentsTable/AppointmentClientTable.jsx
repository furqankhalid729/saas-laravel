import React from 'react'

const ClientFormTable = ({ appointments }) => {
    return (
        <div className='w-full'>
            <div className='w-full bg-white shadow-lg'>
                <div className='w-[98%] mx-auto p-2'>
                    {/* heading */}
                    <h4 className='mb-5 font-[700] text-[20px] leading-[24px]'>Appointments</h4>
                    <div className='overflow-x-scroll hide-scrollbar w-full'>
                        {appointments && appointments.length > 0 ? (
                            <table className='w-full'>
                                <tbody>
                                    {/* Heading Row */}
                                    <tr className='text-[16px] capitalize leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                        <td className='w-[20%] text-nowrap px-3'>Name</td>
                                        <td className='w-[20%] text-nowrap px-3 text-center'>Date</td>
                                        <td className='w-[20%] text-nowrap text-center px-3'>Time</td>
                                        <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                                        <td className='w-[20%] text-nowrap px-3'>Action</td>
                                    </tr>
                                    {appointments.map((data, index) => (
                                        <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                            <td className='w-[20%] text-nowrap px-3'>{data.user.name}</td>
                                            <td className='w-[20%] text-nowrap px-3 text-center'>{new Date(data.appointment_date).toDateString()}</td>
                                            <td className='w-[20%] text-nowrap text-center px-3'>{data.appointment_time}</td>
                                            <td className={`w-[20%] text-nowrap px-3 text-center ${data.payment_status === "unpaid" ? 'text-red-500' : 'text-green-500'}`}>
                                                {data.payment_status}
                                            </td>
                                            <td className='w-[20%] text-nowrap px-3'>View detail</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center text-gray-500 py-10">
                                No Appointment Found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientFormTable
