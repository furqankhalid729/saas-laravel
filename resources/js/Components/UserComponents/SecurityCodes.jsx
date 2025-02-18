import React from 'react'
import { Link } from '@inertiajs/react'

const SecurityCodes = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-6 w-[90%] /'>
                {/* Image */}
                <div className='w-[100px] h-[100px] rounded-full bg-[#EC4137] grid place-items-center'>
                    <img src="/storage/images/User/LockPic.png" alt="LockImg" className='w-[58px] h-[66px]' />
                </div>
                <h1 className='md:text-[28px] lg:text-[32px] text-center font-[700] leading-[38px]'>How do you want to get your security codes?</h1>
                <p className='text-[#808080] text-[18px] text-center font-[400] leading-[22px]'>We recommend sending security codes to your
                    phone </p>
                <div className='text-[#EC4137] text-[20px] font-[500] leading-[24px] flex flex-col justify-center items-center gap-2'>
                    <Link href="/user/enter-code">
                        <button className='text-[#EC4137] transition-all w-[170px] h-[55px] border hover:border-[#EC4137] rounded-lg'>Text Message</button>
                    </Link>
                    <Link href="/user/enter-code">
                        <button className='text-[#EC4137] transition-all w-[170px] h-[55px] border hover:border-[#EC4137] rounded-lg'>Phone Call</button>
                    </Link>
                    <Link href="/user/enter-code">
                        <button className='text-[#EC4137] transition-all w-[170px] h-[55px] border hover:border-[#EC4137] rounded-lg'>Email</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SecurityCodes
