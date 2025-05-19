import React from 'react'
const MembersTable = ({members}) => {

    return (
        <div>
            <div className='overflow-x-scroll hide-scrollbar w-full '>
                <table className='w-full'>
                    <tbody className='w-full flex flex-col justify-center items-center'>
                        {/* Heading Row */}
                        <tr className='w-full capitalize  border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] font-[500] text-[16px] leading-[25px]'>
                            <td className='text-nowrap px-2 w-[5%]'>ID</td>
                            <td className='text-nowrap px-2 w-[20%] '>Name</td>
                            <td className='text-nowrap px-2 w-[30%]'>Email</td>
                            <td className='text-nowrap px-2 w-[20%] text-center'>Phone no.</td>
                            <td className='text-nowrap px-2 w-[13%] text-center'>Relation</td>
                            <td className='text-nowrap px-2 w-[12%] text-center'>Action</td>
                        </tr>
                        {members.map((data) => (
                            <tr key={data.ID} className='w-full border-b-[0.5px] border-[#808080] flex justify-between items-center h-[40px] text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <td className='text-nowrap px-2 w-[5%]'>{data.member.id}</td>
                                <td className='text-nowrap px-2 w-[20%] '>{data.member.name}</td>
                                <td className='text-nowrap px-2 w-[30%] '>{data.member.email}</td>
                                <td className='text-nowrap px-2 w-[20%] text-center'>{data.member.phone_number}</td>
                                <td className='text-nowrap px-2 w-[13%] text-center'>{data.member.relation}</td>
                                <td className='text-nowrap px-2 w-[12%] text-center underline text-black'>View Profile</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MembersTable
