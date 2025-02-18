import React from 'react'
import { BsCashStack } from "react-icons/bs";
import { Link } from '@inertiajs/react';

const PaymentMethod = () => {
    return (
        <div className='flex flex-col border lg:border-none border-black p-[10px] lg:p-0 w-full lg:w-[30%]'>
            <div className='w-[90%] mx-auto flex flex-col gap-4'>
                {/* upper side */}
                <div className='bg-white px-2 py-4 rounded-xl w-full flex flex-col gap-4'>
                    {/* 1st div */}
                    <div className='flex justify-between items-center'>
                        <p className='font-[600] text-[12px] leading-[14px] text-nowrap'>
                            Payment Method
                        </p>
                        <p className='text-[#EC4137] underline text-[8px] leading-[9px] font-[400]'>
                            Manage credit cards
                        </p>
                    </div>
                    {/* 2nd div cards and Pay Via Cash btn*/}
                    <div className='flex flex-col gap-2'>
                        {/* 1st card */}
                        <div className='h-[50px] flex items-center gap-3 border rounded-lg border-[#808080] px-2'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="card" />
                                <img src="/storage/images/User/Visa.jpeg" alt="visaImage" className='w-[30px] h-[20px] border border-[#808080]' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[#231E20] text-[12px] leading-[14px] font-[600]'>VISA *******8092</p>
                                <p className='text-[#808080] text-[8px] leading-[9px] font-[400]'>Expires on 12/27</p>
                            </div>
                            <p className=' bg-[#EC41374D] p-[2px] text-[#EC4137] text-[8px] leading-[9px] font-[400] text-nowrap'>Last used</p>
                        </div>
                        {/* 2nd card */}
                        <div className='h-[50px] flex items-center gap-3 border rounded-lg border-[#808080] px-2'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="card" />
                                <img src="/storage/images/User/Pay.png" alt="payImage" className='w-[30px] h-[20px] border border-[#808080]' />
                            </div>
                            <p className='text-[#231E20] text-[12px] leading-[14px] font-[600]'>Apple Pay</p>
                        </div>
                        {/* 3rd card */}
                        <div className='h-[50px] flex items-center gap-3 border rounded-lg border-[#808080] px-2'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="card" />
                                <img src="/storage/images/User/paypal.jpeg" alt="paypalImage" className='w-[30px] h-[20px] border border-[#808080]' />
                            </div>
                            <p className='text-[#231E20] text-[12px] leading-[14px] font-[600]'>PayPal</p>
                        </div>
                        {/* 4rd card */}
                        <div className='h-[50px] flex items-center gap-3 border rounded-lg border-[#808080] px-2'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" name="card" />
                                <BsCashStack className='w-[30px] h-[20px] border border-[#808080]' />
                            </div>
                            <p className='text-[#231E20] text-[12px] leading-[14px] font-[600]'>Pay via Cash</p>
                        </div>
                        {/* button Pay via Cash */}
                        {/* <Link href="/user/dashboard" className='flex justify-center items-center h-[30px] border border-black hover:bg-white hover:text-black transition-all bg-black text-white rounded-md py-2 font-[400] text-[10px] leading-[12px]'>Pay Via Cash</Link> */}
                    </div>
                    {/* 3rd div */}
                    <div className='flex flex-col gap-4 text-[12px] leading-[14px] font-[600] text-[#808080]'>
                        <h2 className='text-[#231E20]'>Summary</h2>
                        <div className='flex justify-between items-center leading-[10px] font-[400]'>
                            <p>Payment:</p>
                            <p>$900.00</p>
                        </div>
                        <div className='flex justify-between items-center leading-[10px] font-[400]'>
                            <p>Payment method fee:</p>
                            <p>$0.00</p>
                        </div>
                        <div className='border-t border-[#808080]'></div>
                        <div className='flex justify-between items-center leading-[10px] font-[400]'>
                            <p>Total Charge</p>
                            <p className='text-[#EC4137] font-[500]'>$900.00</p>
                        </div>
                        <Link href="/user/dashboard" className='flex justify-center items-center h-[30px] border border-black hover:bg-white hover:text-black transition-all bg-black text-white rounded-md py-2 font-[400] text-[10px] leading-[12px]'>Pay now</Link>
                    </div>
                </div>
                <p className='text-center text-[10px] leading-[12px] font-[400] text-[#808080]'>Payment securely processed by <span className='text-black'>paypal</span> </p>
                {/* Down side */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[15px] leading-[18px] font-[600]'>Timeline</h2>
                    <div className='flex flex-col gap-3 text-[10px] leading-[12px] font-[400] text-[#808080]'>
                        <div className='flex justify-between items-center'>
                            <p>
                                Invoice created
                            </p>
                            <span>20.11.2024 @ 11:42 AM</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>
                                Invoice sent via email
                            </p>
                            <span>20.11.2024 @ 11:42 AM</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>
                                Invoice sent via letter
                            </p>
                            <span>20.11.2024 @ 11:42 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
