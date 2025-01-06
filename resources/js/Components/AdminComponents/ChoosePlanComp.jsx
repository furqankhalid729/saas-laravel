import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";

const ChoosePlanComp = () => {
    const [monthlyPlan, setMonthlyPlan] = useState(false);

    return (
        <div className='w-full h-full flex flex-col gap-[50px]'>
            {/* Monthly Yearly plan div */}
            <div className='font-[400] text-[15px] leading-[18px] flex items-center justify-center gap-2'>
                <p className='font-[500]'>Monthly</p>
                {/* toggle button */}
                <div onClick={() => setMonthlyPlan(!monthlyPlan)} className={`${monthlyPlan ? "justify-end bg-[#EF3D35]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] flex w-[45px] h-[20px] border-[2px] border-black rounded-xl hover:cursor-pointer`}>
                    <div className={`${monthlyPlan ? "bg-black" : "bg-[#EF3D35] "} transition-transform duration-300 ease-in-out w-[50%] h-full rounded-full`}>

                    </div>
                </div>
                <p className='text-[#808080]'>Yearly</p>
                <p className='text-[8px] leading-[9px] p-1 rounded-xl border border-[#EF3D35] text-[#EF3D35]'>20% off</p>
            </div>
            {/* Started plans */}
            <div className='flex flex-col items-center lg:flex-row  lg:items-end justify-center gap-4'>
                {/* 1st starter plan */}
                <div className='w-full sm:w-[300px] sm:h-[550px] border border-black rounded-lg'>
                    <div className='w-[90%] sm:w-[70%] mx-auto my-10 flex flex-col gap-5 items-center '>
                        <h6 className='font-[600] text-[24px] leading-[28px]'>Starter</h6>
                        <h1 className='font-[600] text-[40px] leading-[48px]'>
                            $29
                            <span className='text-[12px] leading-[14px] text-[#808080]'>/MO</span>
                        </h1>
                        <div className='self-start font-[400] text-[16px] leading-[19px]'>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>10,000 visitors</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Create Unlimited Widgets</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>All Widget Types</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>3rd Party Integrations</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Advance Targeting</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Widget A/B Testing</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Priority Support</p>
                            </div>
                        </div>
                        <button className='bg-[#EF3D35] text-white font-[400] text-[20px] leading-[24px] px-3 py-2 rounded-full'>Get Started</button>
                    </div>
                </div>
                {/* 2nt Pro plan */}
                <div className='w-full sm:w-[300px] sm:h-[600px] bg-black text-white rounded-lg overflow-hidden'>
                    <h4 className='bg-[#EF3D35] py-3 text-center text-[#F3F3F3]'>Most Popular</h4>
                    <div className='w-[90%] sm:w-[70%] mx-auto my-10 flex flex-col gap-5 items-center '>
                        <h6 className='font-[600] text-[24px] leading-[28px]'>Pro</h6>
                        <h1 className='font-[600] text-[40px] leading-[48px]'>
                            $29
                            <span className='text-[12px] leading-[14px] text-[#808080]'>/MO</span>
                        </h1>
                        <div className='self-start font-[400] text-[16px] leading-[19px] text-[#F3F3F3]'>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>10,000 visitors</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Create Unlimited Widgets</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>All Widget Types</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>3rd Party Integrations</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Advance Targeting</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Widget A/B Testing</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Priority Support</p>
                            </div>
                        </div>
                        <button className='bg-[#EF3D35] text-white font-[400] text-[20px] leading-[24px] px-3 py-2 rounded-full'>Get Started</button>
                    </div>
                </div>
                {/* 3rd starter plan */}
                <div className='w-full sm:w-[300px] sm:h-[550px] border border-black rounded-lg'>
                    <div className='w-[90%] sm:w-[70%] mx-auto my-10 flex flex-col gap-5 items-center '>
                        <h6 className='font-[600] text-[24px] leading-[28px]'>Starter</h6>
                        <h1 className='font-[600] text-[40px] leading-[48px]'>
                            $29
                            <span className='text-[12px] leading-[14px] text-[#808080]'>/MO</span>
                        </h1>
                        <div className='self-start font-[400] text-[16px] leading-[19px]'>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>10,000 visitors</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Create Unlimited Widgets</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>All Widget Types</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>3rd Party Integrations</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Advance Targeting</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Widget A/B Testing</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <TiTick className='text-[#EF3D35]' />
                                <p>Priority Support</p>
                            </div>
                        </div>
                        <button className='bg-[#EF3D35] text-white font-[400] text-[20px] leading-[24px] px-3 py-2 rounded-full'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosePlanComp
