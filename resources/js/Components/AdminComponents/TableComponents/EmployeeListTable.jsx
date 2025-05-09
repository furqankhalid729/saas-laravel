import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { Link } from '@inertiajs/react';

let EmpList = [
    { Id: "01", name: "Adam Smith", Emial: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", JobTitle: "Chief Editor", EmpType: "Employment" },
    { Id: "02", name: "Warner Smith", Emial: "info29@gmail.com", PhoneNo: "+1-923-466-543", JobTitle: "Director", EmpType: "Employment" },
    { Id: "03", name: "Adam Smith", Emial: "info29@gmail.com", PhoneNo: "+1-923-466-543", JobTitle: "Accountent", EmpType: "Employment" },
    { Id: "04", name: "Adam Smith", Emial: "info29@gmail.com", PhoneNo: "+1-923-466-543", JobTitle: "Manager", EmpType: "Contractor" },
    { Id: "05", name: "Warner Smith", Emial: "info29@gmail.com", PhoneNo: "+1-923-466-543", JobTitle: "Designer", EmpType: "Contractor" },
]


const EmployeeListTable = () => {
    return (
        <div className='w-full bg-white shadow-lg grid grid-cols-1'>
            <div className='w-[98%] h-[600px] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center h-[60px] text-nowrap'>
                    <h1 className='font-[700] text-[26px] sm:text-[36px] leading-[44px] px-2'>Employee List</h1>
                    <Link href={route('agency.employee.create')} className='flex items-center gap-1 text-white bg-black px-3 py-1 rounded-lg'>
                        <GoPlusCircle /> Add new Employee
                    </Link>
                </div>
                <div>
                    {/* table */}
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                <td className='w-[10%] text-nowrap px-3'>Id</td>
                                <td className='w-[10%] text-nowrap px-3'>Name</td>
                                <td className='w-[20%] text-nowrap px-3'>Email</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>Phone no.</td>
                                <td className='w-[10%] text-nowrap px-3 text-center'>Job title</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>Employment Type</td>
                                <td className='w-[10%] text-nowrap px-3 text-center'></td>
                            </tr>
                            {EmpList.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[10%] text-nowrap px-3'>{data.Id}</td>
                                    <td className='w-[10%] text-nowrap px-3'>{data.name}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.Emial}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.PhoneNo}</td>
                                    <td className='w-[10%] text-nowrap px-3 text-center'>{data.JobTitle}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.EmpType}</td>
                                    <td className='w-[10%] text-nowrap px-3 text-center underline text-black'>View details</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeListTable
