import React from 'react'
import SignUpForm from '../../Components/AdminComponents/SignUpForm'

const SignUp = () => {
    return (
        <div className='w-full min-h-[100vh] px-4'>
            <div className='w-full md:w-[70%] my-10 mx-auto flex flex-col justify-center gap-[50px]'>
                {/* Heading */}
                <div className='w-full md:w-[75%]'>
                    <h1 className=' mb-6 font-[600] text-[50px] leading-[60px]'>Let’s set up your work space</h1>
                    <p className='text-[#3C3C3C] font-[400] text-[20px] leading-[24px]'>Tell us more about your workspace so we can provide you a personalized information tailored to your needs and prefrences. </p>
                </div>
                {/* main section */}
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp
