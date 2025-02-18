import React from 'react'

let AppointTable = [
    { Id: "01", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "10:00 AM", Status: "Pending", Payment: "$700.00", textColor: "text-[#EA4232]" },
    { Id: "02", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "03", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "04", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "05", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
    { Id: "06", Doctor: "Steve Smith", Date: "Oct 26, 2024", Time: "12:00 AM", Status: "Approved", Payment: "$1000.00", textColor: "text-black" },
]

const AppointmentTable = () => {

    return (
        <div>
            <div>
                <div className='overflow-x-scroll hide-scrollbar w-full'>
                    <table className='w-full'>
                        <tbody className='w-full flex flex-col justify-center items-center'>
                            {/* Heading Row */}
                            <tr className='w-full capitalize  border-b-[0.5px] border-[#808080] flex justify-between items-center h-[50px] font-[500] text-[16px] leading-[25px]'>
                                <td className='text-nowrap px-2 w-[15%]'>Doctor</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Date</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Time</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Status</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Payment</td>
                                <td className='text-nowrap px-2 w-[15%] text-center'>Action</td>
                            </tr>
                            {AppointTable.map((data) => (
                                <tr key={data.Id} className='w-full border-b-[0.5px] border-[#808080] flex justify-between items-center h-[50px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                    <td className='text-nowrap px-2 w-[15%]'>{data.Doctor}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{data.Date}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{data.Time}</td>
                                    <td className={`${data.textColor} text-nowrap px-2 w-[15%] text-center`}>{data.Status}</td>
                                    <td className='text-nowrap px-2 w-[15%] text-center'>{data.Payment}</td>
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
