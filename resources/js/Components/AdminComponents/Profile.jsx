import React, { useState } from 'react'

const Profile = ({ currentPage, setCurrentPage, client }) => {

    const [status, setStatus] = useState(client?.status || false);

    const handleToggle = () => {
        setStatus(!status);
    };

    return (
        <div className='w-full bg-white rounded-md shadow-md'>
            <div className='w-[80%] mx-auto py-[20px]'>
                <span className='bg-[#ded7d7] px-1 rounded-full'>{client?.client_id || 'N/A'}</span>
                {/* Profile pic and name */}
                <div className='mb-6 flex flex-col justify-center items-center gap-2'>
                    <img src={client?.profile_image || "/storage/Images/Admin/ProfileImage.jpeg"} alt="profileImage" className='w-[120px] h-[120px] rounded-full bg-cover' />
                    <h1 className='font-[600] text-[20px] leading-[24px]'>{client?.name || 'Loading...'}</h1>
                </div>
                {/* Details of profile */}
                <div className='flex flex-col gap-5 font-[400] text-[14px] leading-[16px]'>
                    <div className='flex flex-col gap-1'>
                        <h4>Email</h4>
                        <p className='text-[#808080]'>{client?.email || 'N/A'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4>Phone no</h4>
                        <p className='text-[#808080]'>{client?.phoneNo || 'N/A'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4>Age</h4>
                        <p className='text-[#808080]'>{client?.age || 'N/A'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4>Gender</h4>
                        <p className='text-[#808080]'>{client?.gender || 'N/A'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4>Address</h4>
                        <p className='text-[#808080]'>{client?.address || 'N/A'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4>Exam Status</h4>
                        <select
                            className="flex bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded-lg shadow-sm outline-none"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="1">Patient</option>
                            <option value="2">Appointment</option>
                            <option value="3">Physical In Progress</option>
                            <option value="4">Waiting for Completion</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Status</label>
                    <input
                        type="checkbox"
                        checked={status}
                        onChange={handleToggle}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
