import React from 'react'

let SubFormTable = [
    { Id: "01",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
    { Id: "02",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
    { Id: "03",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
    { Id: "04",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
    { Id: "05",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
    { Id: "06",Form: "Steve Smith", Date: "November 27, 2024", Status: "Submited" },
]

const SubmittedFormTable = () => {
    return (
        <div className='overflow-x-scroll hide-scrollbar w-full '>
            <table className='w-full'>
                <thead className='w-full h-[60px] border-b-[0.7px] border-[#808080] flex items-center'>
                    <tr className='w-full h-full flex items-center'>
                        <td>
                            <h6 className='text-[36px] font-[600] leading-[43px]'>Submited Form</h6>
                        </td>
                    </tr>
                </thead>
                <tbody className='w-full flex flex-col justify-center items-center '>
                    {/* Heading Row */}
                    <tr className='w-full capitalize  border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                        <td className='w-[20%] text-nowrap px-3'>Form</td>
                        <td className='w-[30%] text-nowrap px-3 text-center'>Date</td>
                        <td className='w-[30%] text-nowrap px-3 text-center'>Status</td>
                        <td className='w-[15%] text-nowrap px-3 text-center'>Action</td>
                    </tr>
                    {SubFormTable.map((data) => (
                        <tr key={data.Id} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                            <td className='w-[20%] text-nowrap px-3'>{data.Form}</td>
                            <td className='w-[30%] text-nowrap px-3 text-center'>{data.Date}</td>
                            <td className='w-[30%] text-nowrap px-3 text-center text-[#004A09]'>{data.Status}</td>
                            <td className='w-[15%] text-nowrap px-3 text-center'>View</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SubmittedFormTable
