import React from 'react'
// import Logo from "../../assets/attelo-brand-name.jpeg"
// import profile from "../../assets/Admin/ProfileImage.jpeg"
import { BsEmojiNeutral } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { GoHash } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";

   
const TimeLine = ({timeLine}) => {
    console.log(timeLine);
    return (
        <div className='w-full'>
            {/* Timeline, comment div */}
            <div className='w-full shadow-lg rounded-lg overflow-hidden'>
                {/* Comment div */}
                <div className='w-full bg-white'>
                    <div className='w-[90%] mx-auto py-4 flex flex-col gap-6'>
                        <h1 className='font-[700] text-[24px] leading-[28px]'>Timeline</h1>
                        <div className='flex items-center gap-3'>
                            {/* <img src={Logo} alt="Logo" className='w-[40px] h-[40px] rounded-md' /> */}
                            <input type="text" placeholder='Leave a comment....' className='outline-none font-[400] text-[20px] leading-[24px]' />
                        </div>
                    </div>
                </div>
                {/* Post button div */}
                <div className='w-full bg-[#EFEFEF]'>
                    <div className='w-[90%] mx-auto py-4 flex justify-between items-center'>
                        <div className='flex items-center gap-4 text-[#808080]'>
                            <BsEmojiNeutral />
                            <FiAtSign />
                            <GoHash />
                            <GrAttachment />
                        </div>
                        <button className='bg-black text-white px-3 py-1 rounded-lg text-[16px] font-[400] leading-[19px]'>Post</button>
                    </div>
                </div>
            </div>
            <p className='text-[#808080] text-center lg:text-end'>Only you and other staff can see comments</p>
            <div className='w-[93%] ml-auto mt-10 flex gap-4 flex-col'>
                {timeLine.map((data, index) => (
                    <div key={index} className='flex justify-between items-center font-[400] text-[13px] leading-[10px]  text-[#808080]'>
                        <div className='flex items-center gap-2'>
                            <p>
                                <span className='text-black'>{data.name} </span>
                                {data.description}
                            </p>
                        </div>
                        <span>{new Date(data.created_at).toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TimeLine
