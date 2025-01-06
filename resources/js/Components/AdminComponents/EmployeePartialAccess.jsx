import React, { useState } from 'react'

let partialData = [
    { key: 'client', label: 'Client', description: 'Access to our client accounts' },
    { key: 'appointment', label: 'Appointment', description: 'Access to our client appointments' },
    { key: 'payment', label: 'Payment', description: 'Access to our payment account' },
    { key: 'chat', label: 'Chat', description: 'Access to our client chats' },
]
const EmployeePartialAccess = () => {

    const [access, setAccess] = useState({
        client: false,
        appointment: false,
        payment: false,
        chat: false,
        manageDashboard: false,
    });

    const handleToggle = (key) => {
        setAccess((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };


    return (
        <div className='w-full bg-white rounded-xl shadow-2xl '>
            <div className='w-[85%] h-[400px] mx-auto'>
                {/* upper side */}
                <div className=' border-b border-[#808080] py-5'>
                    <h1 className='mb-4 font-[700] text-[24px] leading-[28px]'>Partial access</h1>
                    <div className='flex flex-col gap-4'>
                        {partialData.map(({ key, label, description }) => (
                            <div key={key} className='flex gap-2 items-center'>
                                {/* toggle button */}
                                <div onClick={() => handleToggle(key)} className={`${access[key] ? "justify-end bg-[#EF40364D]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] py-[0.5px] flex w-[45px] h-[20px] border border-[#808080] rounded-xl hover:cursor-pointer`}>
                                    <div className={`${access[key] ? " bg-[#EF4036] " : "bg-black"} transition-transform duration-300 ease-in-out min-w-[50%] h-full rounded-full`}>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <h6 className='font-[400] text-[12px] leading-[14px] text-black'>{label}</h6>
                                        <p className='font-[300] text-[10px] leading-[12px] text-[#808080]'>{description}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Lower Side */}
                <div className='py-5'>
                    <h1 className='mb-4 font-[700] text-[24px] leading-[28px]'>Full control</h1>
                    <div className='flex flex-col gap-4'>
                        {/* client */}
                        <div className='flex gap-2 items-center'>
                            {/* toggle button */}
                            <div onClick={() => handleToggle('manageDashboard')}  className={`${access.manageDashboard ? "justify-end bg-[#EF40364D]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] py-[0.5px] flex w-[45px] h-[20px] border border-[#808080] rounded-xl hover:cursor-pointer`}>
                                <div className={`${access.manageDashboard ? " bg-[#EF4036] " : "bg-black"} transition-transform duration-300 ease-in-out min-w-[50%] h-full rounded-full`}>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <h6 className='font-[400] text-[12px] leading-[14px] text-black'>Manage Dashboard</h6>
                                    <p className='font-[300] text-[10px] leading-[12px] text-[#808080]'>Access to our full control on dashboard</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeePartialAccess
