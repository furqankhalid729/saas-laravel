import React from 'react'
import Profile from '../../../components/AdminComponents/Profile'
import ChatMessages from '../../../components/AdminComponents/Chat/ChatMessages'
import Messages from '../../../components/AdminComponents/Chat/Messages'

const Chat = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7 flex flex-col xl:flex-row gap-4'>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    {/* Chats messages */}
                    <div className='w-full lg:w-[35%]'>
                        <ChatMessages />
                    </div>
                    {/* live chat messages */}
                    <div className='w-full lg:w-[65%]'>
                        <Messages />
                    </div>
                </div>
                {/* profile */}
                <div className='w-full lg:w-[35%]'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Chat
