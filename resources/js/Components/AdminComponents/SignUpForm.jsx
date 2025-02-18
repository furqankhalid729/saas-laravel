import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <div>
                <p className='mb-5 font-[500] text-[20px] leading-[24px]'>Workspace logo</p>
                <div className='mb-10 flex gap-3 items-center'>
                    <img src="/storage/images/Admin/ProfilePic.png" alt="ProfilePic" className='w-[80px] h-[80px] rounded-xl' />
                    {/* upload img button */}
                    <div className='flex flex-col items-start gap-2'>
                        <button className='border border-[#808080] rounded-xl px-3 py-1'>Upload image</button>
                        <p className='text-[#797979] font-[400] text-[14px] leading-[16px]'>.png, .jpeg, .gif files up to 8MB. Recommended size is 256 x 256px. </p>
                    </div>
                </div>
                <form className='font-[400] text-[16px] leading-[19px] flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="companyname">Company name</label>
                        <input type="text" id='companyname' className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="companyemail">Company Email</label>
                        <input type="text" id='companyemail' className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg'/>
                    </div>
                    <button className='self-end bg-black text-white px-4 py-2 rounded-lg'>Sign-up now</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
