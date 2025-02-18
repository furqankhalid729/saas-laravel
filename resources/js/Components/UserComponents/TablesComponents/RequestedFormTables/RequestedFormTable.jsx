import React from 'react'
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


let ReqFormTable = [
    { Id: "01", Form: "Chest X-ray", Date: "November 27, 2024", Status: "Need attestation", textColor: "text-[#EA4232]" },
    { Id: "02", Form: "Chest X-ray", Date: "November 27, 2024", Status: "Need attestation", textColor: "text-[#EA4232]" },
    { Id: "03", Form: "Chest X-ray", Date: "November 27, 2024", Status: "submited", textColor: "text-[#004D11]" },
    { Id: "04", Form: "Chest X-ray", Date: "November 27, 2024", Status: "submited", textColor: "text-[#004D11]" },
    { Id: "05", Form: "Chest X-ray", Date: "November 27, 2024", Status: "Need attestation", textColor: "text-[#EA4232]" },
    { Id: "06", Form: "Chest X-ray", Date: "November 27, 2024", Status: "submited", textColor: "text-[#004D11]" },
]

const RequestedFormTable = () => {

    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[60px] border-b-[0.7px] border-[#808080] flex items-center'>
                        <tr className='w-full h-full flex items-center'>
                            <td>
                                <h6 className='text-[36px] font-[600] leading-[43px]'>Requested Form</h6>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col justify-center items-center'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-3 w-[20%]'>Form</td>
                            <td className='text-nowrap px-3 w-[30%] text-center'>Date</td>
                            <td className='text-nowrap px-3 w-[30%] text-center'>Status</td>
                            <td className='text-nowrap px-3 w-[15%] text-center'>Action</td>
                        </tr>
                        {ReqFormTable.map((data) => (
                            <tr key={data.Id} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-3 w-[20%]'>{data.Form}</td>
                                <td className='text-nowrap px-3 w-[30%] text-center'>{data.Date}</td>
                                <td className={`${data.textColor} text-nowrap px-3 w-[30%] text-center`}>{data.Status}</td>
                                <td className='text-nowrap px-3 w-[15%] flex items-center justify-center gap-2'>
                                    <FaEdit className='text-[#FF2C2C]' />
                                    <IoEyeOutline className='text-black border-[0.7px] rounded-sm' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestedFormTable
