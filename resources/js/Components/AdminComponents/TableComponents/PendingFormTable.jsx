import React from 'react'

let PendingForm = [
    { Id: "01", bgColor: "bg-[#B8B8B8]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#A4ABFF]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#F44336]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#304FFE]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#F57F17]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#1B5E21]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#FFB64C]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#43A048]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#983301]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
    { Id: "01", bgColor: "bg-[#0009CA]", Name: "Adam Smith", email: "adamsmith9@gmail.com", PhoneNo: "+1-923-466-543", Country: "USA", Status: "Pending" },
]

const PendingFormTable = () => {
    return (
        <div className='bg-white shadow-2xl rounded-lg'>
            <div className='w-[95%] mx-auto py-5 grid grid-cols-1'>
                <h1 className='font-[700] text-[24px] h-[60px] leading-[28px] flex items-center'>Pending patients form</h1>
                <div className='overflow-x-scroll hide-scrollbar w-full bg-[#f3f3f3]'>
                    <table className='w-full'>
                        <tbody>
                            {/* heading row */}
                            <tr className='font-[700] capitalize  text-[16px] leading-[19px] border-y border-[#808080] h-[40px]'>
                                <td className='w-[2%] text-nowrap px-3'></td>
                                <td className='w-[5%] text-nowrap px-3'>ID</td>
                                <td className='w-[5%] text-nowrap px-3'>Name</td>
                                <td className='w-[30%] text-nowrap px-3'>Email</td>
                                <td className='w-[25%] text-nowrap px-3'>Phone no.</td>
                                <td className='w-[20%] text-nowrap px-3'>Country</td>
                                <td className='w-[10%] text-nowrap px-3'>Status</td>
                            </tr>
                            {PendingForm.map((data, index) => (
                                <tr key={index} className='font-[500] text-[12px] leading-[14px] text-[#808080] border-b border-[#808080] h-[40px]'>
                                    <td className='w-[2%] text-nowrap px-3'>
                                        <div className={`${data.bgColor} w-[12px] h-[12px] rounded-full`}></div>
                                    </td>
                                    <td className='w-[5%] text-nowrap px-3'>{data.Id}</td>
                                    <td className='w-[5%] text-nowrap px-3'>{data.Name}</td>
                                    <td className='w-[30%] text-nowrap px-3'>{data.email}</td>
                                    <td className='w-[25%] text-nowrap px-3'>{data.PhoneNo}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.Country}</td>
                                    <td className='w-[10%] text-nowrap px-3 text-[#F44336]'>{data.Status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PendingFormTable
