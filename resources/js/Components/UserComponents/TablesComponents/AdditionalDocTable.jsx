import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import { FaUpload, FaDownload } from "react-icons/fa6";

let ReqDoc = [
  { FileName: "Steve smith.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
  { FileName: "Desktop 2.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
  { FileName: "Medical report.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
  { FileName: "Desktop 2.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
  { FileName: "Steve smith.pdf", RequestDate: "Augest 27, 2024", Status: "Pending" },
]

let SubDoc = [
  { FileName: "Steve smith.pdf", RequestDate: "Augest 27, 2024", Status: "Review", textColor: "text-[#FF6F00]" },
  { FileName: "Desktop 2.pdf", RequestDate: "Augest 27, 2024", Status: "Review", textColor: "text-[#FF6F00]" },
  { FileName: "Medical report.pdf", RequestDate: "Augest 27, 2024", Status: "Pending", textColor: "text-[#004A09]" },
  { FileName: "Desktop 2.pdf", RequestDate: "Augest 27, 2024", Status: "Review", textColor: "text-[#FF6F00]" },
  { FileName: "Steve smith.pdf", RequestDate: "Augest 27, 2024", Status: "Pending", textColor: "text-[#004A09]" },
]

const AdditionalDocTable = () => {

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
              <td className='w-[30%] text-nowrap px-3 text-center'>Request Date</td>
              <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
              <td className='w-[20%] text-nowrap px-3 text-center'>Action</td>
            </tr>
            {ReqDoc.map((data, index) => (
              <tr key={index} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-black font-[400] text-[12px] leading-[14px]'>
                <td className='w-[30%] flex items-center gap-2'>
                  <FaRegFilePdf className='text-red-700 w-[10px] h-[10px]' />
                  {data.FileName}
                </td>
                <td className='w-[30%] text-nowrap px-3 text-center'>{data.RequestDate}</td>
                <td className='w-[20%] text-nowrap px-3 text-center text-[#EA4232]'>{data.Status}</td>
                <td className='w-[20%] text-nowrap px-3 flex items-center justify-center gap-2 text-[#EA4232]'>
                  <FaUpload />
                  Upload
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Summitted Documents */}
      <div className='overflow-x-scroll hide-scrollbar w-full'>
        <table className='w-full'>
          <thead className='w-full h-[60px] border-b-[0.7px] border-[#808080] flex items-center'>
            <tr className='w-full h-full flex items-center'>
              <td>
                <h6 className='text-[20px] font-[600] leading-[24px]'>Summitted Documents</h6>
              </td>
            </tr>
          </thead>
          <tbody className='w-full flex flex-col justify-center items-center'>
            {/* Heading Row */}
            <tr className='w-full capitalize  border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
              <td className='w-[30%]'>File name</td>
              <td className='w-[30%] px-3 text-nowrap text-center'>Request Date</td>
              <td className='w-[20%] px-3 text-nowrap text-center'>Status</td>
              <td className='w-[20%] px-3 text-nowrap text-center'>Action</td>
            </tr>
            {SubDoc.map((data, index) => (
              <tr key={index} className='w-full border-b-[0.7px] border-[#808080] flex justify-between items-center h-[40px] text-black font-[400] text-[12px] leading-[14px]'>
                <td className='w-[30%] flex items-center gap-2'>
                  <FaRegFilePdf className='text-red-700 w-[10px] h-[10px]' />
                  {data.FileName}
                </td>
                <td className='w-[30%] px-3 text-nowrap text-center'>{data.RequestDate}</td>
                <td className={`${data.textColor} w-[20%] text-center`}>{data.Status}</td>
                <td className='w-[20%] px-3 text-nowrap flex items-center justify-center gap-2 text-[#EA4232]'>
                  <FaDownload />
                  Dawnload
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdditionalDocTable
