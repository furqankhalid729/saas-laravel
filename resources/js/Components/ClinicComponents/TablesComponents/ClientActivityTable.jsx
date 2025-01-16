import React from 'react'

let Activitydata = [
 {user: 'Tom Harry', Email: "tom@spot.com", Role: "Nurse", LastLogin: "Oct 20,2024 14:56 ", NoLogins: "55"},
 {user: 'Tom Harry', Email: "tom@spot.com", Role: "Nurse", LastLogin: "Oct 20,2024 14:56 ", NoLogins: "55"},
 {user: 'Tom Harry', Email: "tom@spot.com", Role: "Nurse", LastLogin: "Oct 20,2024 14:56 ", NoLogins: "55"},
 {user: 'Tom Harry', Email: "tom@spot.com", Role: "Nurse", LastLogin: "Oct 20,2024 14:56 ", NoLogins: "55"},
 {user: 'Tom Harry', Email: "tom@spot.com", Role: "Nurse", LastLogin: "Oct 20,2024 14:56 ", NoLogins: "55"},
]

const ClientActivityTable = () => {
    return (
        <div className='bg-[#FFFFFF] overflow-hidden border border-[#808080] rounded-lg min-h-[600px]'>
            <h1 className='font-[700] text-[16px] leading-[19px] h-[60px] flex items-center px-5'>Activity</h1>
            <div className='grid grid-cols-1 overflow-x-scroll hide-scrollbar w-full px-5'>
                <table className='w-full'>
                    <tbody>
                        <tr className='border-[#808080] capitalize  border-y h-[40px] font-[400] text-[16px] leading-[19px]'>
                            <td className='w-[5%] text-nowrap px-2'>User</td>
                            <td className='w-[10%] text-nowrap px-2'>Email</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>Role</td>
                            <td className='w-[10%] text-nowrap px-2 text-center'>Last Login</td>
                            <td className='w-[5%] text-nowrap px-2 text-center'>No. of Logins</td>
                        </tr>
                        {Activitydata.map((data, index) => (
                            <tr key={index} className='border-[#808080] border-b h-[40px] font-[400] text-[16px] leading-[19px] text-[#808080]'>
                                <td className='w-[5%] text-nowrap px-2'>{data.user}</td>
                                <td className='w-[10%] text-nowrap px-2'>{data.Email}</td>
                                <td className='w-[10%] text-nowrap px-2 text-center'>{data.Role}</td>
                                <td className='w-[10%] text-nowrap px-2 text-center'>{data.LastLogin}</td>
                                <td className='w-[5%] text-nowrap px-2 text-center'>{data.NoLogins}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientActivityTable
