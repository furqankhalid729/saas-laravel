import React from 'react'
import { Link } from '@inertiajs/react'

let OtherMemTable = [
    { ID: "01", Name: "Adam smith", Email: "SmithAdam@gmail.com", PhoneNo: "+1-923-466543", Relation: "Brother" },
    { ID: "02", Name: "warner smith", Email: "SmithAdam@gmail.com", PhoneNo: "+1-923-466543", Relation: "Wife" },
    { ID: "03", Name: "Adam smith", Email: "SmithAdam@gmail.com", PhoneNo: "+1-923-466543", Relation: "Son" },
    { ID: "04", Name: "Adam smith", Email: "SmithAdam@gmail.com", PhoneNo: "+1-923-466543", Relation: "Brother" },
    { ID: "05", Name: "smith", Email: "SmithAdam@gmail.com", PhoneNo: "+1-923-466543", Relation: "Sister" },
]
const DashboardMemberTable = () => {

    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full'>
                <table className='w-full'>
                    <thead className='w-full h-[50px] rounded-t-lg pl-[20px] pr-[10px] border-[0.5px] border-[#808080] bg-white flex items-center'>
                        <tr className='w-full h-full flex justify-between items-center'>
                            <td>
                                <h6 className='text-[20px] font-[600] leading-[24px]'>Members</h6>
                            </td>
                            <td>
                                <Link href='/user/appointment' className="text-[#808080] underline text-[12px] font-[400] leading-[15]">View all</Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody className='w-full flex flex-col justify-center items-center rounded-b-lg border-b-[0.5px] border-x-[0.5px] border-[#808080] bg-white'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-2 w-[5%]'>ID</td>
                            <td className='text-nowrap px-2 w-[20%] '>Name</td>
                            <td className='text-nowrap px-2 w-[30%]'>Email</td>
                            <td className='text-nowrap px-2 w-[20%] text-center'>Phone no.</td>
                            <td className='text-nowrap px-2 w-[13%] text-center'>Relation</td>
                            <td className='text-nowrap px-2 w-[12%] text-center'>Action</td>
                        </tr>
                        {OtherMemTable.map((data) => (
                            <tr key={data.ID} className='w-full px-[20px] border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-2 w-[5%]'>{data.ID}</td>
                                <td className='text-nowrap px-2 w-[20%] '>{data.Name}</td>
                                <td className='text-nowrap px-2 w-[30%] '>{data.Email}</td>
                                <td className='text-nowrap px-2 w-[20%] text-center'>{data.PhoneNo}</td>
                                <td className='text-nowrap px-2 w-[13%] text-center'>{data.Relation}</td>
                                <td className='text-nowrap px-2 w-[12%] text-center underline text-black'>View Profile</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardMemberTable
