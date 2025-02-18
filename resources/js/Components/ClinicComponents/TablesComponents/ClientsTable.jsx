import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from '@inertiajs/react'

let ClientData = [
    { Id: "01", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "02", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "03", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "04", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "05", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "06", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "07", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "08", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "09", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "10", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "11", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "12", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
    { Id: "13", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Approved" },
    { Id: "14", client: "T Clinic", Email: "Contact@tclinic@gmail.com", pendingPayment: "$300.00", TotalPayment: "$300.00", Status: "Pending" },
]
const ClientsTable = () => {
    return (
        <div className='w-full overflow-x-scroll hide-scrollbar border border-[#808080] rounded-md bg-white'>
            <div className='w-[97%] mx-auto my-5'>
                {/*  */}
                <div className='flex gap-3 items-center h-[60px]'>
                    <p className='font-[400] text-[12px] leading-[14px] px-3 py-1 border rounded-full border-black hover:bg-black hover:text-white'>All</p>
                    <p className='font-[400] text-[12px] leading-[14px] px-3 py-1 border rounded-full border-black hover:bg-black hover:text-white'>Approved</p>
                    <p className='font-[400] text-[12px] leading-[14px] px-3 py-1 border rounded-full border-black hover:bg-black hover:text-white'>Pending</p>
                </div>
                <table className='w-full'>
                    <tbody>
                        <tr className='h-[50px] capitalize  border-y border-[#808080]'>
                            <td className='w-[5%] text-nowrap px-1'>ID</td>
                            <td className='w-[5%] text-nowrap px-1'>Clients</td>
                            <td className='w-[30%] text-nowrap px-1'>Email</td>
                            <td className='w-[5%] text-nowrap px-1 text-center'>Pending payments</td>
                            <td className='w-[5%] text-nowrap px-1 text-center'>Total payments</td>
                            <td className='w-[5%] text-nowrap px-1 text-center'>Status</td>
                            <td className='w-[5%] text-nowrap px-1 text-center'>Action</td>
                        </tr>
                        {ClientData.map((data, index) => (
                            <tr key={index} className='h-[50px] border-b border-[#808080] text-[#808080] font-[400] text-[12px] leading-[14px] '>
                                <td className='w-[5%] text-nowrap px-1'>{data.Id}</td>
                                <td className='w-[5%] text-nowrap px-1'>{data.client}</td>
                                <td className='w-[30%] text-nowrap px-1'>{data.Email}</td>
                                <td className='w-[5%] text-nowrap px-1 text-center'>{data.pendingPayment}</td>
                                <td className='w-[5%] text-nowrap px-1 text-center'>{data.TotalPayment}</td>
                                <td className={` w-[5%] text-nowrap px-1 text-center rounded-full`}> 
                                    <p className={`${data.Status === "Pending" ? "bg-[#FF2C2C] text-white" : "bg-black text-white"} rounded-full py-1 px-1`}>{data.Status}</p>
                                    </td>
                                <td className='w-[5%] text-nowrap px-1 text-center'>
                                    <div className=' flex items-center justify-center gap-1'>
                                        <div className=' border border-[#808080] rounded'>
                                            <FaRegEdit className='text-[20px] text-[#FF2C2C] p-1' />
                                        </div>
                                        <Link href="/clinic/clients/clients-view" className=' border border-[#808080] rounded'>
                                            <IoEyeOutline className='text-[20px] text-black p-1' />
                                        </Link>
                                        <div className=' border border-[#808080] rounded'>
                                            <RiDeleteBinLine className='text-[20px] text-[#AF0000] p-1' />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientsTable
