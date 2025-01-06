import React from 'react'
// import NewEmpImage from "../../assets/Admin/ProfileImage.jpeg"

const AddEmployee = () => {
    return (
        <div className='w-full bg-white rounded-xl shadow-2xl '>
            <div className='w-[93%] h-[300px] mx-auto py-5 flex flex-col gap-6'>
                <div className='flex gap-2 items-center'>
                    {/* <img src={NewEmpImage} alt="NewEmpImage"  className='w-[70px] h-[70px] rounded-full'/> */}
                    <span className='font-[400]'>
                        <h6 className='text-[20px] leading-[24px]'>Adam Smith</h6>
                        <p className='text-[14px] leading-[16px] text-[#808080]'>Manager Director</p>
                        <p className='text-[14px] leading-[16px] text-[#808080]'>638143</p>
                    </span>
                </div>
                <form className='text-[#808080] grid grid-cols-2 gap-4'>
                    {/* Phone No */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="phoneNo">Phone no.</label>
                        <input type="number" id='phoneNo' placeholder='+1-923-466-543' className='outline-none text-black border border-[#808080] rounded px-3 py-1'/>
                    </div>
                    {/*Email */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="Email" id='email' placeholder='example123@gmail.com' className='outline-none text-black border border-[#808080] rounded px-3 py-1'/>
                    </div>
                    {/* Location */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Location">Location</label>
                        <input type="text" id='Location' placeholder='e.g California, United State' className='outline-none text-black border border-[#808080] rounded px-3 py-1'/>
                    </div>
                    {/* Last activity */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="LastActivity">Last activity</label>
                        <input type="Email" id='LastActivity' placeholder='Active : 02 days ago' className='outline-none text-black border border-[#808080] rounded px-3 py-1'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee
