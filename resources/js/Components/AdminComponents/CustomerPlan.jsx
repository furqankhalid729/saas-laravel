import React from 'react'


const CustomerPlan = () => {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='w-[95%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='h-[40px] border-b border-[#808080]'>
                    <h1 className='font-[700] text-[24px] leading-[28px]'>Customer Plan</h1>
                </div>
                {/* Dieses Medicine Name */}
                <div className='my-5 flex flex-col gap-4'>
                    <div className='w-full flex'>
                        <div className='w-[50%] flex flex-col'>
                            <p>Disease</p>
                            <p className='text-[#808080]'>Headache</p>
                        </div>
                        <div className='w-[50%] flex flex-col'>
                            <p>Medicine Name</p>
                            <p className='text-[#808080]'>Glasolin</p>
                        </div>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-[50%] flex flex-col'>
                            <p>Start Date</p>
                            <p className='text-[#808080]'>Oct 26, 2023</p>
                        </div>
                        <div className='w-[50%] flex flex-col'>
                            <p>End Date</p>
                            <p className='text-[#808080]'>Nov 26, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPlan
