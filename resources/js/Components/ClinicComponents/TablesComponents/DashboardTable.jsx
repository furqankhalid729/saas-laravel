import React from 'react'
import { Link } from '@inertiajs/react'
let clainicDashTable = [
    { Id: "01", Client: "T Clinic", Email: 'Contact@tclinic@gmail.com', NoOfLogins: "568", NoOfUsers: "56", Revenue: "5.6k $" },
    { Id: "02", Client: "T Clinic", Email: 'Contact@tclinic@gmail.com', NoOfLogins: "568", NoOfUsers: "56", Revenue: "5.6k $" },
    { Id: "03", Client: "T Clinic", Email: 'Contact@tclinic@gmail.com', NoOfLogins: "568", NoOfUsers: "56", Revenue: "5.6k $" },
    { Id: "04", Client: "T Clinic", Email: 'Contact@tclinic@gmail.com', NoOfLogins: "568", NoOfUsers: "56", Revenue: "5.6k $" },
    { Id: "05", Client: "T Clinic", Email: 'Contact@tclinic@gmail.com', NoOfLogins: "568", NoOfUsers: "56", Revenue: "5.6k $" },
]
const DashboardTable = () => {
    return (
        <div className='w-full bg-white grid grid-cols-1'>
            <div className='overflow-x-scroll hide-scrollbar w-[97%] min-h-[600px] mx-auto'>
                <table className='w-full'>
                    <tbody>
                        <tr className='font-[400] capitalize  text-[16px] leading-[19px] h-[60px] border-b border-[#808080]'>
                            <td className='w-[5%] text-nowrap px-2'>ID</td>
                            <td className='w-[15%] text-nowrap px-2'>Clients</td>
                            <td className='w-[35%] text-nowrap px-2'>Email</td>
                            <td className='w-[15%] text-nowrap px-2'>No. of logins</td>
                            <td className='w-[10%] text-nowrap px-2'>No. of Users</td>
                            <td className='w-[15%] text-nowrap px-2'>Revenue</td>
                            <td className='w-[5%] text-nowrap px-3'></td>
                        </tr>
                        {clainicDashTable.map((data, index) => (
                            <tr key={index} className='font-[400] text-[16px] leading-[19px] h-[60px] '>
                                <td className='w-[5%] text-nowrap px-2'>{data.Id}</td>
                                <td className='w-[15%] text-nowrap px-2'>{data.Client}</td>
                                <td className='w-[35%] text-nowrap px-2'>{data.Email}</td>
                                <td className='w-[15%] text-nowrap px-2'>{data.NoOfLogins}</td>
                                <td className='w-[10%] text-nowrap px-2'>{data.NoOfUsers}</td>
                                <td className='w-[15%] text-nowrap px-2'>{data.Revenue}</td>
                                <td className='w-[5%] text-nowrap px-3 text-[#808080] underline'>
                                    <Link href="/clinic/clients/clients-view">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardTable
