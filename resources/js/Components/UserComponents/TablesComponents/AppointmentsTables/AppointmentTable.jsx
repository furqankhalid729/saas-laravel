import React from 'react'

let AppointTable = [
    { Id: "01", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "10:00 AM", Status: "Pending", Payment: "$700.00", textColor: "text-[#EA4232]" },
    { Id: "02", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "03", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "04", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "05", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "06", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
]

const AppointmentTable = ({ appointments }) => {
    console.log(appointments)
    return (
        <div>
            <div>
                <div className='overflow-x-scroll hide-scrollbar w-full'>
                    <table className='w-full'>
                        <tbody className='w-full flex flex-col justify-center items-center'>
                            {/* Heading Row */}
                            <tr className='w-full capitalize  px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>

                                <td className='text-nowrap px-2 w-[15%] text-center'>Date</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Time</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Appointment Status</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Payment</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Note</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Action</td>
                            </tr>
                            {appointments.slice(0, 5).map((data) => (
                                <tr key={data.id} className='w-full px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{new Date(data.appointment_date).toDateString()}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{data.appointment_time}</td>
                                    <td className={`${data.status == 'pending' ? 'text-red-600' : 'text-green-600'} text-nowrap px-2 w-[15%] text-center `}>{data.status}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{data.amount}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>
                                        {data.notes?.split(' ').slice(0, 5).join(' ') + (data.notes?.split(' ').length > 5 ? '...' : '')}
                                    </td>
                                    <td className='text-nowrap px-2 w-[15%] text-center underline'>View detail</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AppointmentTable
