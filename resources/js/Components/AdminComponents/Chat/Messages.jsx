import React from 'react'
import { TbBrandGooglePhotos } from "react-icons/tb";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
// import profileImg from "../../../assets/Admin/ProfileImage.jpeg"

const Messages = () => {
    return (
        <div className='w-full bg-white rounded-md shadow-md h-[800px] flex flex-col justify-between'>
            {/* section Header */}
            <div className='flex gap-2 items-center p-3 border-b border-[#808080]'>
                {/* <img src={profileImg} alt="profileImg" className='w-[40px] h-[40px] rounded-full' /> */}
                <h6 className='font-[500] text-[20px] leading-[24px]'>Michael</h6>
            </div>
            <div className='flex flex-col justify-between h-[90%]'>
                {/* name and img */}
                <div className='flex flex-col items-center gap-3 p-5'>
                    {/* <img src={profileImg} alt="profileImg" className='w-[90px] h-[90px] rounded-full' /> */}
                    <h1 className='font-[500] text-[32px] leading-[38px]'>Michael</h1>
                </div>
                <p className='font-[400] text-[10px] leading-[12px] text-[#808080] text-center p-5'>01:00</p>
                {/* hey message */}
                <div className='flex flex-col items-end p-5 gap-1'>
                    <p className='font-[400] text-[18px] leading-[21px] px-4 py-2 bg-black text-white rounded-t-2xl rounded-l-2xl '>Hey</p>
                    <span className='font-[400] text-[10px] leading-[12px] text-[#808080]'>Sent 1h ago</span>
                </div>
                {/*  */}
                <div className='border-t-[0.3px] border-[#C5C5C5] px-5'>
                    <p className='font-[400] text-[10px] leading-[12px] text-[#C5C5C5] text-center p-1'>Send instant message</p>
                    <div className='flex flex-col items-end gap-1'>
                        <p className='font-[400] text-[18px] leading-[21px] px-4 py-2 border border-[#808080] rounded-t-2xl rounded-l-2xl '>Hey</p>
                        <p className='font-[400] text-[18px] leading-[21px] px-4 py-2 border border-[#808080] rounded-t-2xl rounded-l-2xl '>How are you?</p>
                        <p className='font-[400] text-[18px] leading-[21px] px-4 py-2 border border-[#808080] rounded-t-2xl rounded-l-2xl '>How can i help you?</p>
                    </div>
                    {/* Type message */}
                    <div className='flex items-center gap-2 text-[21px] text-[#808080] py-5'>
                        <TbBrandGooglePhotos />
                        <HiOutlineDocumentPlus />
                        <input type="text" placeholder='Type your message' className='w-full font-[300] text-[12px] leading-[16px] px-4 py-1 outline-none border border-[808080] rounded-full' />
                        <BiLike />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
