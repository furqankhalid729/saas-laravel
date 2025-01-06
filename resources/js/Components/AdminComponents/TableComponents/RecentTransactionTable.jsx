import React from 'react'

let RecentTable = [
    { incoiceId: "262455", name: "Adam Smith", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "In progress", color: "text-[#FFCC00]" },
    { incoiceId: "262455", name: "Warner Steave", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "In progress", color: "text-[#FFCC00]" },
    { incoiceId: "262455", name: "Adam Smith", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Warner Steave", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Adam Smith", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Warner Steave", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Adam Smith", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Warner Steave", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Adam Smith", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
    { incoiceId: "262455", name: "Warner Steave", email: "adamsmith9@gmail.com", amount: "$200.00", sendDate: "21/09/24", duedate: "10/10/24", Status: "Completed", color: "text-[#1A7100]" },
]
const RecentTransactionTable = () => {
    return (
        <div className='w-full bg-white rounded-xl shadow-2xl'>
            <div className='w-[98%] grid grid-cols-1 mx-auto'>
                {/* Heading */}
                <div className='h-[50px] flex items-center'>
                    <h1 className='font-[700] text-[24px] leading-[28px] px-2'>Recent Transactions</h1>
                </div>
                <div className='overflow-x-scroll hide-scrollbar w-full'>
                    {/* table */}
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                <td className='w-[15%] text-nowrap px-1'>Invoice Id</td>
                                <td className='w-[10%] text-nowrap px-1'>Name</td>
                                <td className='w-[20%] text-nowrap px-1'>Email</td>
                                <td className='w-[5%] text-nowrap px-1 text-center'>Amount</td>
                                <td className='w-[20%] text-nowrap px-1 text-center'>Send Date</td>
                                <td className='w-[20%] text-nowrap px-1 text-center'>Due Date</td>
                                <td className='w-[10%] text-nowrap px-1 text-center'>Status</td>
                            </tr>
                            {RecentTable.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[15%] text-nowrap px-1'>{data.incoiceId}</td>
                                    <td className='w-[10%] text-nowrap px-1'>{data.name}</td>
                                    <td className='w-[20%] text-nowrap px-1'>{data.email}</td>
                                    <td className='w-[5%] text-nowrap px-1 text-center'>{data.amount}</td>
                                    <td className='w-[20%] text-nowrap px-1 text-center'>{data.sendDate}</td>
                                    <td className='w-[20%] text-nowrap px-1 text-center'>{data.duedate}</td>
                                    <td className={`${data.color} w-[10%] text-nowrap px-1 text-center`}>{data.Status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RecentTransactionTable
