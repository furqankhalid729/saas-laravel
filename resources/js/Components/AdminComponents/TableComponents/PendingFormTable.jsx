import React from 'react'
const PendingFormTable = ({pending_forms}) => {
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
                            {pending_forms.map((data, index) => (
                                <tr key={index} className='font-[500] text-[12px] leading-[14px] text-[#808080] border-b border-[#808080] h-[40px]'>
                                    <td className='w-[2%] text-nowrap px-3'>
                                        <div className={`${data.bgColor} w-[12px] h-[12px] rounded-full`}></div>
                                    </td>
                                    <td className='w-[5%] text-nowrap px-3'>{data.id}</td>
                                    <td className='w-[5%] text-nowrap px-3'>{data.user.name}</td>
                                    <td className='w-[30%] text-nowrap px-3'>{data.user.email}</td>
                                    <td className='w-[25%] text-nowrap px-3'>{data.user.phone_number}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.user.country}</td>
                                    <td className='w-[10%] text-nowrap px-3 text-[#F44336]'>{data.status}</td>
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
