import React from 'react'
import { useForm } from '@inertiajs/react'

const SignUpForm = () => {
    const { data, setData, post, processing } = useForm({
        name: '',
        companyname: '',
        companyemail: '',
        username: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // post(route('signup_agency'))
        post('/sign-up')
 
    }

    return (
        <div>
            <div>
                <p className='mb-5 font-[500] text-[20px] leading-[24px]'>Workspace logo</p>
                <div className='mb-10 flex gap-3 items-center'>
                    <img src="/storage/images/Admin/ProfilePic.png" alt="ProfilePic" className='w-[80px] h-[80px] rounded-xl' />
                    <div className='flex flex-col items-start gap-2'>
                        <button className='border border-[#808080] rounded-xl px-3 py-1'>Upload image</button>
                        <p className='text-[#797979] font-[400] text-[14px] leading-[16px]'>.png, .jpeg, .gif files up to 8MB. Recommended size is 256 x 256px. </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='font-[400] text-[16px] leading-[19px] flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' value={data.name} onChange={(e) => setData('name', e.target.value)} className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="companyname">Company name</label>
                        <input type="text" id='companyname' value={data.companyname} onChange={(e) => setData('companyname', e.target.value)} className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="companyemail">Company Email</label>
                        <input type="text" id='companyemail' value={data.companyemail} onChange={(e) => setData('companyemail', e.target.value)} className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' value={data.username} onChange={(e) => setData('username', e.target.value)} className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={data.password} onChange={(e) => setData('password', e.target.value)} className='outline-none bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg' />
                    </div>
                    <button type="submit" disabled={processing} className='self-end bg-black text-white px-4 py-2 rounded-lg'>
                        Sign-up now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm

