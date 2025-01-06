import React from 'react'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
// import profileImg from "../../../assets/Admin/ProfileImage.jpeg"

let messagesData = [
    { name: "Michael", message: "You have a new message", Time: "1h" },
    { name: "Adam Iris", message: "Adam sent a photo", Time: "12h" },
    { name: "Oliver", message: "I will sent you your precaut....", Time: "24h" },
    { name: "Michael", message: "You have a new message", Time: "1h" },
    { name: "Adam Iris", message: "Adam sent a photo", Time: "12h" },
    { name: "Oliver", message: "I will sent you your precaut....", Time: "24h" },
    { name: "Michael", message: "You have a new message", Time: "1h" },
    { name: "Adam Iris", message: "Adam sent a photo", Time: "12h" },
    { name: "Oliver", message: "I will sent you your precaut....", Time: "24h" },
    { name: "Michael", message: "You have a new message", Time: "1h" },
    { name: "Adam Iris", message: "Adam sent a photo", Time: "12h" },
    { name: "Oliver", message: "I will sent you your precaut....", Time: "24h" },
]

const ChatMessages = () => {
    return (
        <div className='w-full bg-white rounded-md shadow-md h-[800px]'>
            {/* Heading and Search div */}
            <div className='py-7 px-5 flex flex-col gap-4 border-b border-[#808080]'>
                {/* Chat Heading */}
                <div className='flex items-center justify-between font-[700] text-[24px] leading-[28px]'>
                    <h4>Chats</h4>
                    <BiSolidMessageRoundedDetail className='text-[#808080]' />
                </div>
                {/* Search */}
                <div className='flex gap-2 px-4 py-2 border border-[#808080] rounded-full text-[#808080] font-[300] text-[12px] leading-[14px]'>
                    <BiSearch className='text-[16px]' />
                    <input type="text" placeholder='Search Chat' className='outline-none w-full text-black' />
                </div>
            </div>
            {/* Messages */}
            <div className='overflow-y-scroll h-[600px]'>
                {messagesData.map((data, index) => (
                    <div key={index} className='w-full flex justify-between items-end gap-3 px-5 py-3 border-b-[0.5px] border-[#808080]'>
                        {/* <img src={profileImg} alt="profileImg" className='w-[40px] h-[40px] rounded-full' /> */}
                        <div className='w-full'>
                            <h6 className='font-[500] text-[15px] leading-[18px]'>{data.name}</h6>
                            <p className='font-[300] text-[13px] leading-[15px] text-[#808080]'>{data.message}</p>
                        </div>
                        <p className='font-[300] text-[10px] leading-[12px] text-[#808080]'>{data.Time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatMessages
