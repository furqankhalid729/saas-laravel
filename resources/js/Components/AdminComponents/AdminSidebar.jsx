import React from 'react'
// import { useLocation } from 'react-router-dom';
import { Link } from '@inertiajs/react'
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineChat, MdOutlinePayments, MdOutlineDocumentScanner } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { SiGoogleforms } from "react-icons/si";
import { RiPassPendingFill } from "react-icons/ri";
import { TbLayoutDashboard } from 'react-icons/tb';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { TbReportSearch } from "react-icons/tb";

const AdminSidebarItems = [
    { to: route('agency.dashboard'), label: "Dashboard", icon: <TbLayoutDashboard /> },
    { to: route('agency.clients.list'), label: "Patients", icon: <IoPeopleOutline /> },
    { to: route('agency.appointments'), label: "Appointment", icon: <FaCalendarAlt /> },
    { to: route('agency.chat'), label: "Chat", icon: <MdOutlineChat /> },
    { to: route("agency.payments"), label: "Payments", icon: <MdOutlinePayments /> },
    { to: route("agency.reports"), label: "Reports", icon: <TbReportSearch /> },
    { to: route("agency.employee.list"), label: "Employee", icon: <GoPeople /> },
    { to: route("agency.documents.list"), label: "Documents", icon: <MdOutlineDocumentScanner /> },
    { to: route("agency.forms.list"), label: "Forms", icon: <SiGoogleforms /> },
    { to: route("agency.forms.pending"), label: "Pending form", icon: <RiPassPendingFill /> },
    { to: route("agency.settings"), label: "Settings", icon: <CiSettings    /> },
];

const AdminSidebar = () => {
    return (
        <div className='bg-[#231E20] w-[220px] min-h-[90vh] sticky top-[82px] border-t-[1px] border-white text-white'>
            {/* Admin Sidebar */}
            <div>
                <div className='flex flex-col'>
                    {AdminSidebarItems.map((item, index) => (
                        <Link href={item.to} key={index}>
                            <div className='group h-[60px] border-b-[1px] border-[#f3f3f3] hover:cursor-pointer flex items-center text-white transition-all'>
                                {/* empty design div */}
                                {/* <div className={`${isRouteActive(item.to) ? "bg-[#EC4137]" : "bg-none"}  transition-all w-[5px] h-[20px]  rounded-r-xl`}></div> */}
                                <div className='w-[170px] h-[18px] mx-auto flex justify-between items-center'>
                                    <div className=' flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='w-[140px] flex justify-between items-center'>
                                        <h2 className='text-[16px] font-[400] leading-[24px] overflow-hidden'>{item.label}</h2>
                                        <FaAngleRight className='w-3 h-3' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
