import React from 'react'
import ChoosePlanComp from '../../components/AdminComponents/ChoosePlanComp'

const ChoosePlan = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='w-[80%] h-[90%] mx-auto mt-10'>
                {/* heading */}
                <div className='mb-7 flex flex-col justify-center items-center gap-4'>
                    <h1 className='font-[600] text-[50px] leading-[60px]'>Choose your plan</h1>
                    <p className='text-[#3C3C3C] font-[400] text-[20px] leading-[24px]'>14 days unlimited free trail. No contract or credit card required</p>
                </div>
                {/*  */}
                <ChoosePlanComp/>
            </div>
        </div>
    )
}

export default ChoosePlan
