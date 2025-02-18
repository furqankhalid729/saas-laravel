import React from 'react'
let Invoice = [
    { Id: "01", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "Unpaid", textColor: "text-[#FF0000]" },
    { Id: "02", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "Unpaid", textColor: "text-[#FF0000]" },
    { Id: "03", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "Pending", textColor: "text-[#FF7700]" },
    { Id: "04", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "paid", textColor: "text-[#005D00]" },
    { Id: "05", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "paid", textColor: "text-[#005D00]" },
    { Id: "06", Invoice: "1122334455", Amount: "$700.00", DueDate: "30/10/2024", ClosedDate: "30/11/2024", Status: "paid", textColor: "text-[#005D00]" },
]
const InvoicesTable = () => {
    return (
        <div className='overflow-x-scroll  hide-scrollbar w-full'>
            <table className='w-full'>
                <tbody className='w-full flex flex-col justify-center items-center border-t-[0.5px] border-[#808080]'>
                    {/* Heading Row */}
                    <tr className='w-full capitalize  border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                        <td className='w-[17%] px-3 text-nowrap'>Invoice</td>
                        <td className='w-[15%] px-3 text-nowrap text-center'>Amount</td>
                        <td className='w-[20%] px-3 text-nowrap text-center'>Due Date</td>
                        <td className='w-[25%] px-3 text-nowrap text-center'>Closed Date</td>
                        <td className='w-[13%] px-3 text-nowrap text-center'>Status</td>
                        <td className='w-[17%] px-3 text-nowrap text-center'>Action</td>
                    </tr>
                    {Invoice.map((data) => (
                        <tr key={data.Id} className='w-full border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                            <td className='w-[17%] px-3 text-nowrap'>{data.Invoice}</td>
                            <td className='w-[15%] px-3 text-nowrap text-center'>{data.Amount}</td>
                            <td className='w-[20%] px-3 text-nowrap text-center'>{data.DueDate}</td>
                            <td className='w-[25%] px-3 text-nowrap text-center'>{data.ClosedDate}</td>
                            <td className={`${data.textColor} w-[13%] px-3 text-nowrap text-center `}>{data.Status}</td>
                            <td className='w-[17%] px-3 text-nowrap text-center underline'>View Detail</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InvoicesTable
