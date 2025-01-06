import React from 'react'
import { FaFolder } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

let DocTable = [
    { name: "Adam Smith - 1002", Owner: "me", LastModified: "August 23, 2023 me" },
    { name: "Brian Lara - 1004", Owner: "me", LastModified: "August 23, 2023 me" },
    { name: "Gold Smith - 1010", Owner: "me", LastModified: "August 23, 2023 me" },
    { name: "Enny Warner - 1134", Owner: "me", LastModified: "August 23, 2023 me" },
    { name: "Adam Smith - 1002", Owner: "me", LastModified: "August 23, 2023 me" },
]

const DocumentsTable = () => {
    return (
        <div className='w-full overflow-x-scroll hide-scrollbar'>
            <table className='w-full'>
                <tbody>
                    <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                        <td className='w-[40%] text-nowrap px-2'>Name</td>
                        <td className='w-[10%] text-nowrap px-2 text-center'>Owner</td>
                        <td className='w-[10%] text-nowrap px-2 text-center'>Last Modified</td>
                        <td className='w-[10%] text-nowrap px-2 text-center'>File size</td>
                        <td className='w-[10%] text-nowrap px-2 text-center'>Action</td>
                    </tr>
                    {DocTable.map((data, index) => (
                        <tr key={index} className='text-[16px] leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                            <td className='w-[40%] text-nowrap px-2'>
                                <div className='flex items-center gap-2'>
                                    <FaFolder className='text-[#F2D069]' />
                                    {data.name}
                                </div>
                            </td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>{data.Owner}</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>{data.LastModified}</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>...</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>
                                <div className='flex gap-2 items-center justify-center'>
                                    <FaDownload />
                                    <FiEdit />
                                    <CiStar />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DocumentsTable
