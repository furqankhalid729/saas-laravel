import React from 'react'

let LabsResult = [
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Positive" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Positive" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Positive" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Positive" },
    { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Positive" },
]

const LabsResultTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto py-4'>
                 {/* heading */}
                 <div className='mb-5 flex justify-between items-center'>
                    <h4 className='font-[700] text-[20px] leading-[24px] px-2'>Lab Result</h4>
                    <button className='border border-black text-white rounded-lg bg-black px-3 py-1 mr-2 font-[500]'>Add Lab Result</button>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center items-start py-3 gap-2 border-t border-[#808080] sm:h-[60px]'>
                    <p className='px-2 py-1 hover:bg-white hover:shadow-lg bg-[#cfcccc] rounded'>Quantiferon</p>
                    <p className='px-2 py-1 hover:bg-white hover:shadow-lg bg-[#cfcccc] rounded'>Syphilis</p>
                    <p className='px-2 py-1 hover:bg-white hover:shadow-lg bg-[#cfcccc] rounded'>Gonorrhea</p>
                </div>
                <div className='overflow-x-scroll hide-scrollbar w-full '>
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>Name</td>
                                <td className='w-[20%] text-nowrap px-3'>Date</td>
                                <td className='w-[20%] text-nowrap px-3'>Time</td>
                                <td className='w-[20%] text-nowrap px-3'>Status</td>
                                <td className='w-[20%] text-nowrap px-3'>Action</td>
                            </tr>
                            {LabsResult.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>{data.name}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.Date}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.time}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-[#1E5600]'>{data.Status}</td>
                                    <td className='w-[20%] text-nowrap px-3'>View detail</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LabsResultTable
