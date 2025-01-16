import React from 'react'
import { Link } from '@inertiajs/react'


const EnterCode = () => {
    return (
        <div className='w-full h-full flex flex-col gap-[50px]  items-center justify-center'>
            {/* spotLogo */}
            <div className='w-[90%]'>
                <img src="/storage/images/Clinic/SpotLogo.png" alt="spotLogo" className='w-[100px] h-[100px] ' />
            </div>
            <div className='flex flex-col items-center justify-center gap-7 w-[90%] /'>
                {/* Image */}
                <div className='w-[100px] h-[100px] rounded-full bg-[#EC4137] grid place-items-center'>
                    <img src="/storage/images/User/LockPic.png" alt="LockImg" className='w-[58px] h-[66px]' />
                </div>
                <div className='flex flex-col place-items-center gap-4'>
                    <h1 className='text-[32px] text-center font-[700] leading-[38px]'>Enter Your Code</h1>
                    <p className='text-[#808080] w-full text-[18px] text-center font-[400] leading-[22px]'>We send a code to (+92) ***-***-695</p>
                </div>
                {/* enter code Input part */}
                <form className='flex flex-col md:gap-[10px]'>
                    <div className='flex gap-1 sm:gap-[8px] lg:gap-3'>
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                        <input type='text' className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] shadow-xl border rounded-md text-center' />
                    </div>
                    {/*  */}
                    <div className='flex flex-col place-items-center gap-[40px]'>
                        <p className='text-[#EC4137] text-[20px] font-[500] leading-[24px] text-nowrap mt-3'>Didn’t get it?</p>
                        <Link href="/user/upload-photo">
                            <button type='submit' className='bg-[#231E20] text-white rounded-md py-2 px-5 font-[600] text-[18px] leading-[17px]' >Submit</button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EnterCode
