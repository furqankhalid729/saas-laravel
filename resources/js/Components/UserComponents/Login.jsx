import React from 'react';
import { useForm, Link } from '@inertiajs/react';

const Login = ({ agency }) => {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(agency ? `/u/${agency.slug}/login` : '/u/login'); 
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-[50px] h-[620px] px-1 w-full'>
                {/* Heading part */}
                <div className='md:self-start flex flex-col gap-3 w-full sm:w-[360px] m-auto text-center'>
                    <h2 className='text-[50px] leading-[60px] font-[600]'>
                        {agency ? `Log In for ${agency.name}` : 'Log In'} 
                    </h2>
                    <p className='text-[#808080] text-[16px] leading-[20px] font-[400]'>
                        Don’t have an account? <Link href='/u/sign-up' className='text-black border-b border-gray-600'>Create a new account now,</Link> <br />
                        it’s FREE! Takes less than a minute.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-[50px] w-full sm:w-[360px]'>
                    <div className='flex flex-col gap-[50px] text-[16px] font-[500] leading-[20px]'>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className='w-full outline-none px-[5px] pt-[14px] pb-[7px] border-b-[2px] border-[#A4A4A4] hover:border-[#444444] hover:bg-[#EBE8E8] focus:bg-[#EBE8E8]'
                        />
                        {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className='w-full outline-none px-[5px] pt-[14px] pb-[7px] border-b-[2px] border-[#A4A4A4] hover:border-[#444444] hover:bg-[#EBE8E8] focus:bg-[#EBE8E8]'
                        />
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>

                    {/* buttons */}
                    <div className='flex flex-col gap-[18px] text-[16px] leading-[20px]'>
                        <button
                            type="submit"
                            disabled={processing}
                            className='font-[500] bg-black text-white hover:bg-gray-800 transition-all text-center w-full py-[18px] rounded-lg'
                        >
                            {processing ? 'Logging in...' : 'Login Now'}
                        </button>

                        <button
                            type="button"
                            className='flex justify-center items-center gap-4 text-center w-full py-[18px] rounded-lg border-[2px] border-[#A4A4A4] font-[700]'
                        >
                            <img src="/storage/images/User/GoogleLogo.png" alt="GoogleLogo" className='w-[25px] h-[25px]' />
                            Login with Google
                        </button>

                        <p className='text-[#A4A4A4] text-center text-[16px] font-[700] leading-[20px]'>
                            Forget Password? <Link href="/u/login" className='text-[#EC4137]'>Click here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
