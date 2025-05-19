import React from 'react';
import { Link } from '@inertiajs/react';
import { TbLayoutDashboard } from "react-icons/tb";
import { FaAngleRight, FaFileInvoice, FaFolder, FaUserPlus, FaUsers } from "react-icons/fa6";
import { FaCalendarAlt, FaFileAlt, FaClipboardList } from 'react-icons/fa';

const UserSidebarItems = [
    { to: "/user/dashboard", label: "Dashboard", icon: <TbLayoutDashboard /> },
    { to: route('user.forms.requested'), label: "Forms", icon: <FaFileAlt /> },
    // { to: "/user/additional-doc", label: "Additional Doc", icon: <FaFolder /> },
    { to: "/user/labs-result", label: "Labs Result", icon: <FaClipboardList /> },
    { to: "/user/family-members", label: "Family Members", icon: <FaUsers /> },
    { to: "/user/invoices", label: "Invoices", icon: <FaFileInvoice /> },
    { to: route('user.family-members.add'), label: "Add Member", icon: <FaUserPlus /> }, 
    { to: route('user.appointments.show'), label: "Appointment", icon: <FaCalendarAlt /> },
];

const SideBar = () => {
    // const location = useLocation();

    // Helper function to check if the current route matches or is a nested route
    // const isRouteActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

    return (
            <div className='bg-[#231E20] w-[220px] min-h-[90vh] sticky top-[82px] border-t-[1px] border-white text-white'>
                {/* User Sidebar */}
                <div className='flex flex-col'>
                    {UserSidebarItems.map((item, index) => (
                        <Link href={item.to} key={index}>
                            <div className='group h-[60px] border-b-[1px] border-[#f3f3f3] hover:cursor-pointer flex items-center text-white transition-all'>
                                {/* Red active indicator */}
                                {/* <div
                                    className={`${
                                        isRouteActive(item.to) ? "bg-[#EC4137]" : "bg-none"
                                    } transition-all w-[5px] h-[20px] rounded-r-xl`}
                                ></div> */}
                                <div className='w-[170px] h-[18px] mx-auto flex justify-between items-center'>
                                    <div className='flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='w-[140px] flex justify-between items-center'>
                                        <h2 className='text-[16px] font-[400] leading-[18px] overflow-hidden'>
                                            {item.label}
                                        </h2>
                                        <FaAngleRight className='w-3 h-3' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default SideBar;

