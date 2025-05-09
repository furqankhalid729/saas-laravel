import React, { useState } from 'react'

const Profile = ({ currentPage, setCurrentPage, agencyUser }) => {
    console.log(agencyUser);

    const [status, setStatus] = useState(false);

    const handleToggle = (key) => {
        setStatus(!status);
    };

    return (
        <div className='w-full bg-white rounded-md shadow-md'>
            <div className='w-[80%] mx-auto py-[20px]'>
                <span className='bg-[#ded7d7] px-1 rounded-full'>#{agencyUser.user.id}</span>
                {/* Profile pic and name */}
                <div className='mb-6 flex flex-col justify-center items-center gap-2'>
                    <img src="/storage/Images/Admin/ProfileImage.jpeg" alt="profileImage" className='w-[120px] h-[120px] rounded-full bg-cover' />
                    <h1 className='font-[600] text-[20px] leading-[24px]'>{agencyUser.user.name}</h1>
                </div>
                {/* Details of profile */}
                <div className='flex flex-col gap-5 font-[400] text-[14px] leading-[16px]'>
                    {/* Email */}
                    <div className='flex flex-col gap-1 '>
                        <h4>Email</h4>
                        <p className='text-[#808080]'>{agencyUser.user.email}</p>
                    </div>
                    {/* Phone no */}
                    <div className='flex flex-col gap-1'>
                        <h4>Phone no</h4>
                        <p className='text-[#808080]'>{agencyUser.user.phone_number}</p>
                    </div>
                    {/* Age */}
                    <div className='flex flex-col gap-1'>
                        <h4>Age</h4>
                        <p className='text-[#808080]'>{agencyUser.user.age}</p>
                    </div>
                    {/* Gender */}
                    <div className='flex flex-col gap-1'>
                        <h4>Gender</h4>
                        <p className='text-[#808080]'>{agencyUser.user.gender}</p>
                    </div>
                    {/* Date of Birth */}
                    <div className='flex flex-col gap-1'>
                        <h4>Date of Birth</h4>
                        <p className='text-[#808080]'>16 January 1974</p>
                    </div>
                    {/* City/Country or Birth */}
                    <div className='flex flex-col gap-1'>
                        <h4>City/Country or Birth</h4>
                        <p className='text-[#808080]'>California, USA</p>
                    </div>
                    {/* Address */}
                    <div className='flex flex-col gap-1'>
                        <h4>Address</h4>
                        <p className='text-[#808080]'>{agencyUser.user.address}</p>
                    </div>
                    {/* Preferred date */}
                    <div className='flex flex-col gap-1'>
                        <h4>Preferred date</h4>
                        <p className='text-[#808080]'>Tuesday, May 2021</p>
                    </div>
                    {/* Preferred day */}
                    <div className='flex flex-col gap-1'>
                        <h4>Preferred day</h4>
                        <p className='text-[#808080]'>Monday</p>
                    </div>
                    {/* Exam Status */}
                    <div className='flex flex-col items-start gap-1'>
                        <h4>Exam Status</h4>
                        <select className="flex bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded-lg shadow-sm outline-none" value={currentPage}
                            onChange={(e) => setCurrentPage(parseInt(e.target.value))}>
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="1" >Patient</option>
                            <option value="2" >Appointment</option>
                            <option value="3" >Physical In Progress</option>
                            <option value="4" >Waiting for Completion</option>
                            <option value="5" >Complete</option>
                        </select>
                    </div>
                    {/* Activate Account and toggle btn */}
                    <div className='flex justify-between'>
                        <h4>Activate Account</h4>
                        {/* toggle button */}
                        <div onClick={() => handleToggle()} className={`${status ? "justify-end bg-[#EF40364D]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] py-[0.5px] flex w-[45px] h-[20px] border border-[#808080] rounded-xl hover:cursor-pointer`}>
                            <div className={`${status ? " bg-[#EF4036] " : "bg-black"} transition-transform duration-300 ease-in-out min-w-[50%] h-full rounded-full`}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
