import React from 'react'
import { FaRegFilePdf, FaUpload } from 'react-icons/fa6'

let ReqDoc = [
    { Id: "01", FileName: "Steve.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
    { Id: "02", FileName: "Desktop 2.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
    { Id: "03", FileName: "Medical report.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
    { Id: "04", FileName: "Desktop 5.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
    { Id: "05", FileName: "Adim smith.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
]

const RequestedDocTable = ({ id }) => {
    const Doc = ReqDoc.find((doc) => doc.Id === id);
    if (!Doc) {
        return <div>Document not found for ID: {id}</div>;
    }
    console.log("ReqDoc:", ReqDoc);
    console.log("Doc:", Doc);
    console.log("id:", id);

    return (
        <div>
            {/* Requested Documents */}
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[60px] border-b-[0.7px] border-[#808080] flex items-center'>
                        <tr className='w-full h-full flex items-center'>
                            <td>
                                <h6 className='text-[20px] font-[600] leading-[24px]'>Requested Documents</h6>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col justify-center items-center'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='w-[30%]'>File name</td>
                            <td className='w-[30%] px-4 text-nowrap text-center'>Request Date</td>
                            <td className='w-[20%] px-4 text-nowrap text-center'>Status</td>
                            <td className='w-[20%] px-4 text-nowrap text-center'>Action</td>
                        </tr>
                        <tr key={Doc.Id} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-black font-[400] text-[12px] leading-[14px]'>
                            <td className='w-[30%] flex items-center gap-2'>
                                <FaRegFilePdf className='text-red-700 w-[10px] h-[10px]' />
                                {Doc.FileName}
                            </td>
                            <td className='w-[30%] px-4 text-nowrap text-center'>{Doc.RequestDate}</td>
                            <td className='w-[20%] px-4 text-nowrap text-center text-[#EA4232]'>{Doc.Status}</td>
                            <td className='w-[20%] px-4 text-nowrap flex items-center justify-center gap-2 text-[#EA4232]'>
                                <FaUpload />
                                Upload
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestedDocTable
