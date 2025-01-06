import { Head } from '@inertiajs/react';
import AdminHeader from "../Components/AdminComponents/AdminHeader";
import AdminSidebar from "../Components/AdminComponents/AdminSidebar";
import { useState } from 'react';

export default function UserLayout({ title, children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const displaySideBar = () => {
        return setIsSidebarOpen(!isSidebarOpen)
    };

    return (
        <>
            <Head title={title} />
            <div className="flex flex-col">
                <div className="flex flex-col h-screen">
                    <div className="flex flex-grow overflow-hidden">
                        <div
                            className="w-full  overflow-hidden overflow-y-auto"
                            scroll-region="true"
                        >
                            <div className='bg-[#f3f3f3] w-full min-h-screen'>
                                <AdminHeader onClickSideBar={displaySideBar} SidebarOpen={setIsSidebarOpen} />
                                <div className='flex min-h-full'>
                                    {/* Mobile Screen SideBAr */}
                                    <div onClick={() => setIsSidebarOpen(false)} className={`${isSidebarOpen ? "translate-x-0 " : "translate-x-[-100vw]"} fixed min-h-screen md:hidden transition-all duration-500 ease-in-out z-40`}>
                                        <AdminSidebar />
                                    </div>
                                    {/* Desktop screen SideBar */}
                                    <div className='hidden md:block min-h-full'>
                                        <AdminSidebar />
                                    </div>
                                    <div onClick={() => setIsSidebarOpen(false)} className={`w-full min-h-full `}>
                                        {/* Dashboard pages */}
                                        {children}
                                    </div>
                                </div>
                            </div>
                            {/* <AdminHeader />
                            {children}
                            <AdminSidebar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}