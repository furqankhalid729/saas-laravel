import React from 'react'
 
let RelTable = [ 
    {name: "Alexa Smith", Email: "alexasmith@gmail.com", Relation: "Wife"},
    {name: "Cook Smith", Email: "alexasmith@gmail.com", Relation: "Brother"},
    {name: "Olivia Smith", Email: "alexasmith@gmail.com", Relation: "Son"},
    {name: "Alexa Smith", Email: "alexasmith@gmail.com", Relation: "Wife"},
    {name: "Cook Smith", Email: "alexasmith@gmail.com", Relation: "Brother"},
    {name: "Cook Smith", Email: "alexasmith@gmail.com", Relation: "Brother"},
    {name: "Olivia Smith", Email: "alexasmith@gmail.com", Relation: "Son"},

]
const RelativesTable = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center h-[60px]'>
                    <h1 className='font-[700] text-[24px] leading-[28px] px-2'>Relatives</h1>
                </div>
                {/* table */}
                <table className='w-full'>
                    <tbody>
                        {/* Heading Row */}
                        <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                            <td className='w-[20%] text-nowrap px-3'>Name</td>
                            <td className='w-[20%] text-nowrap px-3'>Email</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Relation</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'>Action</td>
                            <td className='w-[20%] text-nowrap px-3 text-center'></td>
                        </tr>
                        {RelTable.map((data, index) => (
                            <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>{data.name}</td>
                                <td className='w-[20%] text-nowrap px-3'>{data.Email}</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>{data.Relation}</td>
                                <td className='w-[20%] text-nowrap px-3 text-[#808080] underline text-center'>View profile</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>...</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RelativesTable
