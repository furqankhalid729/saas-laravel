import React from 'react'

let paymentdata = [
    { Id: "01", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Schedule" },
    { Id: "02", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Schedule" },
    { Id: "03", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Pending" },
    { Id: "04", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Approved" },
    { Id: "05", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Approved" },
    { Id: "06", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Approved" },
    { Id: "07", TransactionId: "0027553231", amount: "$300.00", Date: "31/11/24", Status: "Approved" },
]

const ClientPaymentTable = () => {
    return (
        <div className='bg-[#FFFFFF] overflow-hidden border border-[#808080] rounded-lg min-h-[600px]'>
            <h1 className='font-[700] text-[16px] leading-[19px] h-[60px] flex items-center px-5'>Payment</h1>
            <div className='grid grid-cols-1 overflow-x-scroll hide-scrollbar w-full px-5'>
                <table className='w-full'>
                    <tbody>
                        <tr className='border-[#808080] capitalize  border-y h-[50px] font-[400] text-[16px] leading-[19px]'>
                            <td className='w-[5%] text-nowrap px-2'>ID</td>
                            <td className='w-[10%] text-nowrap px-2'>Transaction ID</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>Amount</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>Date</td>
                            <td className='w-[5%] text-nowrap px-2 text-center'>Status</td>
                            <td className='w-[5%] text-nowrap px-2 text-center'></td>
                        </tr>
                        {paymentdata.map((data, index) => (
                            <tr key={index} className='border-[#808080] border-b h-[50px] font-[400] text-[16px] leading-[19px] text-[#808080]'>
                                <td className='w-[5%] text-nowrap px-2'>{data.Id}</td>
                                <td className='w-[10%] text-nowrap px-2'>{data.TransactionId}</td>
                                <td className='w-[10%] text-nowrap px-2 text-center'>{data.amount}</td>
                                <td className='w-[10%] text-nowrap px-2 text-center'>{data.Date}</td>
                                <td className='w-[5%] text-nowrap px-2 text-center'>
                                    <p className={`${data.Status === 'Schedule' ? "bg-[#918F8F] text-white" : ""} ${data.Status === 'Pending' ? "bg-[#87030559] text-[#870305]" : ""} ${data.Status === 'Approved' ? "bg-[#00550059] text-[#005500]" : ""} py-1 px-2 rounded-full `}>
                                        {data.Status}
                                    </p>
                                </td>
                                <td className='w-[5%] text-nowrap px-2 text-center'>...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientPaymentTable
