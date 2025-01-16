import React from 'react';
import { Link } from '@inertiajs/react'

const Login = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-[50px] h-[620px] px-1 w-full my-10'>
                {/* Spot Logo */}
                <div className='w-[85%]'>
                    <img src="/storage/images/Clinic/SpotLogo.png" alt="spotLogo" className='w-[100px] h-[100px]' />
                </div>
                {/* Heading part */}
                <div className='md:self-start flex flex-col gap-3 w-[85%] m-auto text-center'>
                    <h2 className='text-[50px] leading-[60px] font-[600]'>Welcome Back!</h2>
                    <p className='text-[#808080] text-[16px] leading-[20px] font-[400]'>
                        Don’t have an account? <Link href='/user/sign-up' className='text-black text-[16px] leading-[20px] font-[400] border-b border-gray-600'>Create a new account now,</Link> <br />
                        it’s FREE! Takes less than a minute.
                    </p>
                </div>
                <form className='flex flex-col gap-[50px] w-[85%]'>
                    {/* Inputs data */}
                    <div className='flex flex-col gap-[50px] text-[16px] font-[500] leading-[20px]'>
                        <input type="text" placeholder='Username' className=' w-full outline-none px-[5px] pt-[14px] pb-[7px] border-b-[2px] border-[#A4A4A4] hover:border-[#444444] hover:bg-[#EBE8E8] focus:bg-[#EBE8E8] ' />
                        <input type="Password" placeholder='Password' className=' w-full outline-none px-[5px] pt-[14px] pb-[7px] border-b-[2px] border-[#A4A4A4] hover:border-[#444444] hover:bg-[#EBE8E8] focus:bg-[#EBE8E8] ' />
                    </div>
                    {/* buttons */}
                    <div className='flex flex-col gap-[18px] text-[16px] leading-[20px]'>
                        <Link href="/clinic/text-code" className='font-[500] bg-black text-white hover:bg-gray-800 transition-all text-center w-full py-[18px] rounded-lg'>Login Now</Link>
                        <button className='flex justify-center items-center gap-4 text-center w-full py-[18px] rounded-lg border-[2px] border-[#A4A4A4] font-[700]'>
                            <img src="/storage/images/User/GoogleLogo.png" alt="GoogleLogo" className='w-[25px] h-[25px]' />
                            Login with Google
                        </button>
                        {/* link */}
                        <p className='text-[#A4A4A4] text-center text-[16px] font-[700] leading-[20px]'>
                            Forget Password <Link href="/user/login" className='text-[#EC4137]'>Click here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
