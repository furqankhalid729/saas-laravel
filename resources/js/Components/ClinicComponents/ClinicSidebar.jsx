import React from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from '@inertiajs/react'
import { TbLayoutDashboard } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { IoPeopleOutline } from 'react-icons/io5';
import { SiGoogleforms } from 'react-icons/si';
import { MdOutlinePayments } from 'react-icons/md';


const UserSidebarItems = [
    { to: "/clinic/dashboard", label: "Dashboard", icon: <TbLayoutDashboard /> },
    { to: "/clinic/clients", label: "Clients", icon: <IoPeopleOutline /> },
    { to: "/clinic/forms", label: "Forms", icon: <SiGoogleforms /> },
    { to: "/clinic/payments", label: "Payments", icon: <MdOutlinePayments /> },
];

const ClinicSidebar = () => {
    // const location = useLocation();

    // Helper function to check if the current route matches or is a nested route
    // const isRouteActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

    return (
        <div className='bg-[#231E20] min-h-[90vh] sticky top-[82px] w-[220px] border-t-[1px] border-white text-white'>
            {/* User Sidebar */}
            <div className='flex flex-col '>
                {UserSidebarItems.map((item, index) => (
                    <Link href={item.to} key={index}>
                        <div className='group h-[60px] border-b-[1px] border-[#f3f3f3] hover:cursor-pointer flex items-center text-white transition-all'>
                            {/* empty design div */}
                            {/* <div className={`${isRouteActive(item.to) ? "bg-[#EC4137]" : "bg-none"}  transition-all w-[5px] h-[20px]  rounded-r-xl`}></div> */}
                            <div className='w-[170px] h-[18px] mx-auto flex justify-between items-center'>
                                <div className=' flex items-center justify-center'>
                                    {item.icon}
                                </div>
                                <div className='w-[140px] flex justify-between items-center'>
                                    <h2 className='text-[16px] font-[400] leading-[18px] overflow-hidden'>{item.label}</h2>
                                    <FaAngleRight className='w-3 h-3' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ClinicSidebar
