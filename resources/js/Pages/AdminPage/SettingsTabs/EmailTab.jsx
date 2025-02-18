import React, { useState } from 'react'

const EmailTab = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Email</h1>
            <div className='w-full p-5 bg-white rounded-lg border-[0.5px] border-[#808080]'>
                <h4 className='font-[400] text-[16px] leading-[19px]'>Other SMPT</h4>
                <form action="">
                    {/* SMPT HOST,PORT div */}
                    <div className='my-5 flex flex-col xl:flex-row gap-5 w-full'>
                        {/* Smpt host */}
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="smptHost" className='font-[400] text-[12px] leading-[16px] text-[#808080]'>
                                SMPT Host <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input type="text" id='smptHost' placeholder='smpt.titan.email' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F]' />
                        </div>
                        {/* Smpt Port */}
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="smptPort" className='font-[400] text-[12px] leading-[16px] text-[#808080]'>
                                SMPT Port <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input type="text" id='smptPort' placeholder='465' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F]' />
                        </div>
                    </div>
                    {/* Encryption and Authentication */}
                    <div>
                        <div className='flex justify-between items-center text-[#808080] font-[400] text-[14px] leading-[16px]'>
                            <p className='w-[50%]'>Encryption</p>
                            <p className='w-[40%]'>Authentication</p>
                        </div>
                        {/* Radios btn */}
                        <div className='py-3 flex justify-between'>
                            <div className='w-[50%] flex gap-5 text-[#808080] font-[400] text-[12px] leading-[14px]'>
                                <div className='flex gap-1 items-center'>
                                    <input type="radio" id='none' name='none' className='ring-[#808080] cursor-pointer' />
                                    <label htmlFor="none">None</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type="radio" id='ssl' name='none' className='ring-[#808080] cursor-pointer' />
                                    <label htmlFor="ssl">SSL</label>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <input type="radio" id='tls' name='none' className='ring-[#808080] cursor-pointer' />
                                    <label htmlFor="tls">TLS</label>
                                </div>
                            </div>
                            <div className='w-[40%]'>
                                {/* toggle button */}
                                <div onClick={() => setToggle(!toggle)} className={`${toggle ? "justify-end bg-[#EF40364D]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] py-[0.5px] flex w-[45px] h-[20px] border border-[#808080] rounded-xl hover:cursor-pointer`}>
                                    <div className={`${toggle ? " bg-[#EF4036] " : "bg-black"} transition-transform duration-300 ease-in-out min-w-[50%] h-full rounded-full`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* UserName, password div */}
                    <div className='my-5 flex flex-col xl:flex-row gap-5 w-full'>
                        {/* username */}
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="username" className='font-[400] text-[12px] leading-[16px] text-[#808080]'>
                                Username <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input type="text" id='username' placeholder='Support@atelln9.com' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F]' />
                        </div>
                        {/*  Password */}
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="password" className='font-[400] text-[12px] leading-[16px] text-[#808080]'>
                                Password <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input type="text" id='password' placeholder='Password' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F]' />
                        </div>
                    </div>
                    {/* active btn */}
                    <div className='w-full text-end'>
                        <button className='px-4 py-[1px] bg-[#F7F7F7] border border-[#808080] rounded-lg'>Active</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailTab
