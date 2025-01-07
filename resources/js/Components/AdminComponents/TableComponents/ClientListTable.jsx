import React from 'react'
import { Link } from '@inertiajs/react';


let ClientListData = [
    { Id: "01", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "02", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "03", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "04", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "05", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "06", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "07", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "08", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "09", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "10", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "11", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "Canada", Status: "Paid", ExamStatus: "InProgress", Color: "text-[#1E5600]" },
    { Id: "12", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
    { Id: "13", name: "Warner Steave", Email: "war@warnersmith.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Unpaid", ExamStatus: "Waiting for result", Color: "text-[#EA4232]" },
]

const ClientListTable = () => {
    return (
        <div className='grid grid-cols-1'>
            <table className='w-full'>
                <tbody>
                    {/* Heading Row */}
                    <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                        <td className='w-[5%] text-nowrap px-3'>ID</td>
                        <td className='w-[10%] text-nowrap px-3'>Name</td>
                        <td className='w-[10%] text-nowrap px-3'>Email</td>
                        <td className='w-[20%] text-nowrap px-3 text-center'>Phone no.</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Country</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Status</td>
                        <td className='w-[10%] text-nowrap px-3 text-center'>Exam Status</td>
                        <td className='w-[10%] text-nowrap px-3'></td>
                    </tr>
                    {ClientListData.map((data, index) => (
                        <tr key={index} className='text-[14px] leading-[16px] font-[400] border-b text-[#808080] border-[#808080] h-[40px]'>
                            <td className='w-[10%] text-nowrap px-3'>{data.Id}</td>
                            <td className='w-[10%] text-nowrap px-3'>{data.name}</td>
                            <td className='w-[10%] text-nowrap px-3'>{data.Email}</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>{data.PhoneNo}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{data.Country}</td>
                            <td className={`w-[10%] text-nowrap px-3 text-center ${data.Color}`}>{data.Status}</td>
                            <td className='w-[10%] text-nowrap px-3 text-center'>{data.ExamStatus}</td>
                            <td className='w-[10%] text-nowrap px-3 text-[#231E20] underline'>
                                <Link href="/admin/client-list/client-form" >View Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClientListTable
