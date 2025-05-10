import React, { useState } from 'react'
import PaymentMethod from '../../Components/UserComponents/PaymentMethod';
import InvoiceDetails from '../../Components/UserComponents/InvoiceDetails';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const InvoiceViewDetail = () => {
    const [isOpenContent1, setIsOpenContent1] = useState(false);
    const [isOpenContent2, setIsOpenContent2] = useState(false);

    return (
        <div className='w-full'>
            <div className='w-[93%] my-7 mx-auto'>
                <h6 className='text-[36px] mb-6 font-[600] leading-[44px]'>Invoices</h6>
                {/* For Mobile Screens */}
                <div className='w-full flex flex-col lg:hidden'>
                    {/* left content accordien */}
                    <div onClick={() => {setIsOpenContent1(!isOpenContent1); setIsOpenContent2(false)}} className={` ${isOpenContent1 ? "" : "bg-white"} lg:hidden flex items-center justify-between px-[20px] h-[50px] border  rounded-t-xl border-black`}>
                        <h3 className='font-[600]'>Invoice detail</h3>
                        {isOpenContent1 ? <FaCaretUp /> : <FaCaretDown />}
                    </div>

                    {/* Left Side */}
                    {isOpenContent1 &&
                        <InvoiceDetails />
                    }

                    {/* Right content accordien */}
                    <div onClick={() => {setIsOpenContent2(!isOpenContent2); setIsOpenContent1(false)}} className={` ${isOpenContent2 ? "" : "bg-white"} lg:hidden flex items-center justify-between px-[20px] h-[50px] border border-t-[0px] border-black`}>
                        <h3 className='font-[600]'>Payment method</h3>
                        {isOpenContent2 ? <FaCaretUp /> : <FaCaretDown />}
                    </div>

                    {/* Right side */}
                    {isOpenContent2 &&
                        <PaymentMethod />
                    }

                </div>
                {/* For Desktop Screens */}
                <div className='w-full lg:flex hidden'>
                    {/* left Side */}
                    <InvoiceDetails/>
                    {/* Right Side */}
                    <PaymentMethod/>
                </div>
            </div>
        </div>
    )
}

export default InvoiceViewDetail
