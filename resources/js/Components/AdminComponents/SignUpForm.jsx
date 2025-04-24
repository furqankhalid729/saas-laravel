import React from 'react'
import { useForm, usePage } from '@inertiajs/react'

const SignUpForm = () => {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        name: '',
        companyname: '',
        email: '',
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('agency.signup.store'))
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
                <form
                    onSubmit={handleSubmit}
                    className="text-base leading-[19px] flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg outline-none"
                        />
                        {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="companyname">Company name</label>
                        <input
                            type="text"
                            id="companyname"
                            value={data.companyname}
                            onChange={(e) => setData('companyname', e.target.value)}
                            className="bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg outline-none"
                        />
                        {errors.companyname && (
                            <span className="text-red-600 text-sm">{errors.companyname}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Company Email</label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg outline-none"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg outline-none"
                        />
                        {errors.username && (
                            <span className="text-red-600 text-sm">{errors.username}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="bg-[#f3f3f3] h-[50px] px-3 border border-[#808080] rounded-lg outline-none"
                        />
                        {errors.password && (
                            <span className="text-red-600 text-sm">{errors.password}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="self-end bg-black text-white px-4 py-2 rounded-lg"
                    >
                        Sign-up now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm

