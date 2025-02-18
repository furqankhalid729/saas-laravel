import React from 'react'
import { FiEdit } from "react-icons/fi";

let formCards = [
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
    { title: "Chest X-Ray", Details: "This is Chest X-Ray" },
]

const FormsCard = () => {
    return (
        <div className='w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {formCards.map((data, index) => (
                <div key={index} className='h-[250px] sm:h-[300px] w-full border-4 border-[#FF2C2C] rounded-xl'>
                    <div className='w-[90%] sm:w-[80%] mx-auto my-4 sm:my-7 flex flex-col justify-between gap-[90px]'>
                        {/* form title and details */}
                        <div className='w-full flex flex-col justify-between'>
                            <div className='flex flex-col gap-3'>
                                <FiEdit className='p-1 bg-[#FF2C2C] w-[30px] h-[30px] text-white rounded-md ' />
                                <h6 className='font-[500] text-[12px] sm:text-[20px] leading-[14px] sm:leading-[24px]'>{data.title}</h6>
                            </div>
                            <p className='text-[#808080] font-[400] text-[14px] leading-[16px]'>
                                {data.Details} <br />  Form
                            </p>
                        </div>
                        {/* buttons */}
                        <div className='flex justify-between items-center text-[10px] sm:text-[16px]'>
                            <button className='px-3 sm:px-5 py-1 rounded-full bg-black text-white' >View</button>
                            <button className='px-3 sm:px-5 py-1 rounded-full bg-[#FF2C2C] text-white' >Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FormsCard
