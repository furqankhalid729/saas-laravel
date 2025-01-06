import React from 'react'
import { BiLink } from "react-icons/bi";
import { RiLinkM } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePlusSm } from "react-icons/hi";
import { CiWarning } from "react-icons/ci";

const ApiGenerate = () => {
    return (
        <div className='w-full bg-white p-6 border rounded-xl border-[#808080]'>
            {/* Heading */}
            <div>
                <h1 className='mb-2 font-[700] text-[24px] leading-[28px]'>API Keys</h1>
                <p className='font-[400] text-[12px] leading-[14px] text-[#808080]'>Manage API keys for this instance</p>
            </div>
            {/*  */}
            <div className='flex flex-col-reverse xl:flex-row xl:gap-4'>
                {/* left side */}
                <div className='w-full xl:w-[75%] xl:my-6'>
                    {/* Publishable key div */}
                    <div className='bg-[#f2f2f2] rounded-xl'>
                        {/* punlication title and description */}
                        <div className='p-6'>
                            <h4 className='mb-2 font-[600] text-[12px] leading-[14px]'>Publishable key</h4>
                            <p className='font-[400] text-[10px] leading-[12px] text-[#808080]'>This key should be used in your fronted code. It can be safely shared, and does not need
                                to be kept secret. </p>
                        </div>
                        {/* public key */}
                        <div className='w-full p-5 bg-white rounded-xl border border-[#808080] flex flex-col gap-2 sm:flex-row justify-between items-start sm:items-center'>
                            <p className='font-[600] text-[12px] leading-[14px]'>
                                Public Key
                            </p>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 '>
                                <span className='text-[#808080] px-3 py-[0.5px] font-[400] text-[10px] leading-[12px] border-[0.5px] border-[#808080] rounded'>US_live_Y2x1cmsub2VyZnFkYS5jYSQ</span>
                                <span className='font-[400] text-[10px] leading-[12px] flex gap-1 items-center border border-[#808080] rounded px-2 py-[1px]'>
                                    <BiLink />
                                    <p>Copy</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Secret keys div */}
                    <div className='mt-6 bg-[#f2f2f2] rounded-xl'>
                        {/* Secret key title and description */}
                        <div className='p-6'>
                            <h4 className='mb-2 font-[600] text-[12px] leading-[14px]'>Secret keys</h4>
                            <p className='font-[400] text-[10px] leading-[12px] text-[#808080]'>Securely manage these sensitive keys. Do not share them with anyone. If you suspect that one of your
                                secret keys has been compromised. you should create a new key, update your code, then delete the
                                compromised key.</p>
                        </div>
                        {/* keys */}
                        <div className='w-full p-5 bg-white rounded-xl border border-[#808080]'>
                            {/* Default Secret key */}
                            <div className='py-5 border-b-[0.5px] border-[#808080] flex flex-col gap-2 sm:flex-row justify-between items-start sm:items-center'>
                                <p className='font-[600] text-[12px] leading-[14px]'>
                                    Default secret key
                                </p>
                                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 '>
                                    <span className='text-[#808080] px-3 py-[0.5px] font-[400] text-[10px] leading-[12px] border-[0.5px] border-[#808080] rounded'>US_live_Y2x1cmsub2VyZnFkYS5jYSQ</span>
                                    <span className='font-[400] text-[10px] leading-[12px] flex gap-1 items-center border border-[#808080] rounded px-2 py-[1px]'>
                                        <BiLink />
                                        <p>Copy</p>
                                    </span>
                                </div>
                            </div>
                            {/* Test key */}
                            <div className='py-5 border-b-[0.5px] border-[#808080] flex flex-col gap-2 sm:flex-row justify-between items-start sm:items-center'>
                                <p className='font-[600] text-[12px] leading-[14px]'>
                                    Test
                                </p>
                                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 '>
                                    <span className='text-[#808080] px-3 py-[0.5px] font-[400] text-[10px] leading-[12px] border-[0.5px] border-[#808080] rounded'>US_live_Y2x1cmsub2VyZnFkYS5jYSQ</span>
                                    <span className='font-[400] text-[10px] leading-[12px] flex gap-1 items-center border border-[#808080] rounded px-2 py-[1px]'>
                                        <BiLink />
                                        <p>Copy</p>
                                    </span>
                                </div>
                            </div>
                            {/* Testing token key */}
                            <div className='py-5 flex flex-col gap-2 sm:flex-row justify-between items-start sm:items-center'>
                                <p className='font-[600] text-[12px] leading-[14px]'>
                                    Testing token
                                </p>
                                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 '>
                                    <span className='text-[#808080] px-3 py-[0.5px] font-[400] text-[10px] leading-[12px] border-[0.5px] border-[#808080] rounded'>US_live_Y2x1cmsub2VyZnFkYS5jYSQ</span>
                                    <span className='font-[400] text-[10px] leading-[12px] flex gap-1 items-center border border-[#808080] rounded px-2 py-[1px]'>
                                        <BiLink />
                                        <p>Copy</p>
                                    </span>
                                    <RiDeleteBin6Line className='text-[#FF0000]' />
                                </div>
                            </div>
                            {/* Add new key */}
                            <div className='py-5 font-[400] text-[10px] leading-[12px]'>
                                <button className='flex gap-1 items-center px-2 py-1 border border-[#808080] rounded'>
                                    <HiOutlinePlusSm className='text-[14px]' />
                                    Add New Key
                                </button>
                            </div>
                        </div>
                        <div className='font-[400] text-[10px] leading-[12px] flex gap-1 items-center text-[#FF0000] px-5 py-4'>
                            <CiWarning />
                            <p>Clerk support will never ask you to share your secret key.</p>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-full xl:w-[25%]  my-6'>
                    <div className='flex flex-col gap-4 pb-5 border-b border-[#808080]'>
                        <span className='flex items-center gap-2 font-[400] text-[12px] leading-[14px]'>
                            <RiLinkM className='text-[#808080]' />
                            <p>Show API URLs</p>
                        </span>
                        <span className='flex items-center gap-2 font-[400] text-[12px] leading-[14px]'>
                            <IoKeyOutline className='text-[#808080]' />
                            <p>Show JWT Public key</p>
                        </span>
                        <span className='flex items-center gap-2 font-[400] text-[12px] leading-[14px]'>
                            <CiSettings className='text-[#808080]' />
                            <p>Configure API Version</p>
                        </span>
                    </div>
                    <div className='my-5 text-[10px] leading-[12px] font-[400] text-[#808080]'>
                        <p>Configured API version 2022-10-23</p>
                        <p className='mt-3'>Latest API version 2023-12-09</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiGenerate
