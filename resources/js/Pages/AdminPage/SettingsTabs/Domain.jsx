import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { LuChevronDown } from "react-icons/lu";
import { IoAlertCircleOutline } from "react-icons/io5";


let DomainData = [
    { Emial: "www.attelo.com", Description: "Primary for your account", Company: 'Online Company' },
    { Emial: "www.attelo.com", Description: "Primary for your account", Company: 'Online Company' },
]
const Domain = () => {
    const [tab, setTab] = useState(1);
    console.log("DomainTab :", tab);

    return (
        <div>
            {/* Domain main Tab 1 */}
            {tab === 1 &&
                <div>
                    {/* Heading */}
                    <div className='flex justify-between items-center'>
                        <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Domain</h1>
                        <button onClick={() => setTab(2)} className='bg-white border border-[#808080] rounded px-2 font-[400] text-[12px] leading-[14px]'>Connect Own Domain</button>
                    </div>
                    {/* Main */}
                    <div className='w-full bg-white border border-[#808080] rounded-xl py-5'>
                        {/* Search div */}
                        <div className='mb-5 mx-5 px-4 py-2 flex items-center gap-2 border-[0.5px] border-[#808080] rounded-xl'>
                            <IoSearch className='text-[#808080]' />
                            <input type="text" placeholder='Search domains' className='outline-none w-full font-[400] text-[14px] leading-[16px]' />
                        </div>
                        {/* Domain And Target */}
                        <div className='px-5 py-2 w-full border-b border-[#808080] flex justify-between items-center font-[400] text-[14px] leading-[16px]'>
                            <p className='w-[50%]'>Domain</p>
                            <p className='w-[40%]'>Target</p>
                        </div>
                        {DomainData.map((data, index) => (
                            <div key={index} className='px-5 py-3 w-full border-b border-[#808080] flex justify-between items-center font-[400] text-[14px] leading-[16px]'>
                                <div className='w-[50%] flex items-center gap-2'>
                                    <div className='p-2 bg-[#D7E5FF] rounded-lg'>
                                        <TbWorldWww className='text-[13px]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-black font-[400] text-[12px] leading-[14px]'>{data.Emial}</p>
                                        <p className='font-[400] text-[10px] leading-[12px] text-[#808080]'>{data.Description}</p>
                                    </div>
                                </div>
                                <p className='w-[40%]'>{data.Company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {/* Domain tab 2 */}
            {tab === 2 &&
                <div>
                    {/* Heading */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center '>
                            <MdOutlineKeyboardBackspace onClick={() => setTab(tab - 1)} className='text-[30px] pt-1' />
                            <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Connect Own Domain</h1>
                        </div>
                        <button className='bg-white border border-[#808080] rounded px-2 font-[400] text-[12px] leading-[14px] flex items-end gap-1'>
                            Action
                            <LuChevronDown />
                        </button>
                    </div>
                    {/* Main */}
                    <div className='w-full bg-white border border-[#808080] rounded-xl p-5'>
                        <h4 className='mb-3 font-[400] text-[14px] leading-[16px]'>Domain</h4>
                        <div>
                            <input type="text" placeholder='Example: example.com' className='outline-none w-full px-4 py-2 rounded-xl border border-[#808080] bg-[#E4E4E4]' />
                            <p className='font-[400] text-[10px] leading-[12px] text-[#808080] mt-2'>Enter the domain you want to connect.</p>
                        </div>
                        <div className='mt-3 text-end'>
                            <button onClick={() => setTab(3)} className='bg-[#E4E4E4] px-4 py-[2px] border border-[#808080] rounded-lg'>Next</button>
                        </div>
                    </div>
                </div>
            }
            {tab === 3 &&
                <div>
                    {/* Heading */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center '>
                            <MdOutlineKeyboardBackspace onClick={() => setTab(tab - 1)} className='text-[30px] pt-1' />
                            <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Connect Own Domain</h1>
                        </div>
                        <button className='bg-white border border-[#808080] rounded px-2 font-[400] text-[12px] leading-[14px] flex items-end gap-1'>
                            Action
                            <LuChevronDown />
                        </button>
                    </div>
                    {/* Main */}
                    <div className='w-full bg-white border border-[#808080] rounded-xl p-5  font-[400] text-[14px] leading-[16px]'>
                        <h4 className='mb-3'>Domain</h4>
                        <span className='text-[#808080]'>www.atello.com</span>
                    </div>
                    <div className='mt-4 w-full bg-white border border-[#808080] rounded-xl p-5 font-[400] text-[14px] leading-[16px]'>
                        <div>
                            <h4 className='mb-3'>Connecting your domain</h4>
                            <span className='text-[#808080]'>Verify the connection to make sure your domain is setup correctly.</span>
                        </div>
                        <div className='mt-4 text-end'>
                            <button onClick={() => setTab(4)} className='bg-white border border-[#808080] rounded px-2 font-[400] text-[12px] leading-[14px]'>Verify connection</button>
                        </div>
                    </div>
                </div>
            }
            {tab === 4 &&
                <div>
                    {/* Heading */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center '>
                            <MdOutlineKeyboardBackspace onClick={() => setTab(tab - 1)} className='text-[30px] pt-1' />
                            <h1 className='font-[700] text-[24px] leading-[28px] py-4'>Connect Own Domain</h1>
                        </div>
                        <button className='bg-white border border-[#808080] rounded px-2 font-[400] text-[12px] leading-[14px] flex items-end gap-1'>
                            Action
                            <LuChevronDown />
                        </button>
                    </div>
                    {/* Main */}
                    <div className='w-full bg-white border border-[#808080] rounded-xl p-5  font-[400] text-[14px] leading-[16px]'>
                        <h4 className='mb-3'>Domain</h4>
                        <span className='text-[#808080]'>www.atello.com</span>
                    </div>
                    <div className='mt-4 w-full bg-white border border-[#808080] rounded-xl p-5 font-[400] text-[12px] leading-[14px]'>
                        <div className='flex flex-col gap-3'>
                            <h4>Connecting your domain</h4>
                            <span className='font-[400] text-[14px] leading-[16px]'>A and CNAME entered incorrectly</span>
                            <span className='text-[#808080]'>Check that you’ve entered the correct values, and verify your connection again.</span>
                        </div>
                        {/* A Record title icon*/}
                        <div className='my-6 flex gap-1 items-center'>
                            <h6>
                                A Record
                            </h6>
                            <IoAlertCircleOutline className='text-[#FF0000]' />
                        </div>
                        {/* A Record Details */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-1'>
                                <h6 className='text-[#808080]'>Name :</h6>
                                <span> @ </span>
                                <span className='text-[#4492FF]'>Copy</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h6 className='text-[#808080]'>Current IP address:</h6>
                                <span className='text-[#7F0000]'> 172.16.100.00</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h6 className='text-[#808080]'>Required values: 23.334.45.56</h6>
                                <span className='text-[#4492FF]'>Copy</span>
                            </div>
                        </div>
                        {/* Cname title icon*/}
                        <div className='my-6 flex gap-1 items-center'>
                            <h6>
                                CNAME
                            </h6>
                            <IoAlertCircleOutline className='text-[#FF0000]' />
                        </div>
                        {/* CNAME details */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1 font-[400] text-[12px] leading-[14px]'>
                                <div className='flex items-center gap-1'>
                                    <h6 className='text-[#808080]'>Name :</h6>
                                    <span> www </span>
                                    <span className='text-[#4492FF]'>Copy</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <h6 className='text-[#808080]'>Current value:</h6>
                                    <span className='text-[#7F0000]'> [Empty]</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <h6 className='text-[#808080]'>Required values: shops.myisc.com</h6>
                                    <span className='text-[#4492FF]'>Copy</span>
                                </div>
                            </div>
                        </div>
                        {/* Step by Step instruction Text div */}
                        <h6 className='my-6'>
                            Follow the
                            <span className='text-[#4492FF]'> step-by-step instructions </span>
                            and verify your connection again.
                        </h6>
                        {/* btn  */}
                        <div className='mt-4 text-end'>
                            <button onClick={() => setTab(1)} className='bg-white border border-[#808080] rounded px-2 py-1 font-[400] text-[12px] leading-[14px]'>Verify connection</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Domain
