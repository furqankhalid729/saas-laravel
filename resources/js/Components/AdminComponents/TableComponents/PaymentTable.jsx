import React from 'react'
import { GoPlusCircle } from "react-icons/go";

let PaymentData = [
    { Id: "01", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Pending",color: "bg-[#EF403659]",textColor: "text-[#EF4036]"},
    { Id: "02", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Pending",color: "bg-[#EF403659]",textColor: "text-[#EF4036]"},
    { Id: "03", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Pending",color: "bg-[#EF403659]",textColor: "text-[#EF4036]"},
    { Id: "04", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Approved",color: "bg-[#808080]",textColor: "text-black"},
    { Id: "05", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Approved",color: "bg-[#808080]",textColor: "text-black"},
    { Id: "06", TransactionId: "0027553231", Amount: "$300.00", Date: "31/11/24", Status: "Approved",color: "bg-[#808080]",textColor: "text-black"},

]

const PaymentTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center h-[60px]'>
                    <h1 className='font-[700] text-[24px] leading-[28px] px-2'>Payments</h1>
                    <button className='flex items-center gap-1 text-white bg-black px-3 py-1 rounded-lg text-nowrap'>
                        <GoPlusCircle /> Request a payment
                    </button>
                </div>
                {/* table */}
                <table className='w-full'>
                    <tbody>
                        {/* Heading Row */}
                        <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                            <td className='w-[20%] text-nowrap px-3'>Id</td>
                            <td className='w-[20%] text-nowrap px-3'>Transaction ID</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Amount</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Date</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                        </tr>
                        {PaymentData.map((data, index) => (
                            <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>{data.Id}</td>
                                <td className='w-[20%] text-nowrap px-3'>{data.TransactionId}</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>{data.Amount}</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>{data.Date}</td>
                                <td className={`${data.textColor} w-[20%] text-nowrap px-3 text-center`}>{data.Status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentTable
