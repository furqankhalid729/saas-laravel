import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ClinicHeader from "../Components/ClinicComponents/ClinicHeader";
import ClinicSidebar from "../Components/ClinicComponents/ClinicSidebar"
export default function MainLayout({ title, children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const displaySideBar = () => {
        return setIsSidebarOpen(!isSidebarOpen)
    };

    return (
        <>
            <Head title={title} />
            <div className='bg-[#f3f3f3] w-full h-full'>
                <ClinicHeader onClickSideBar={displaySideBar} SidebarOpen={setIsSidebarOpen}/>
                <div className='flex min-h-screen'>
                    {/* Mobile Screen SideBAr */}
                    <div onClick={() => { setIsSidebarOpen(false)}} className={`${isSidebarOpen ? "translate-x-0 " : "translate-x-[-100vw]"}  fixed  min-h-screen  md:hidden transition-all duration-500 ease-in-out h-full z-40`}>
                        <ClinicSidebar />
                    </div>
                    {/* Desktop screen SideBar */}
                    <div className='hidden md:block min-h-full'>
                        <ClinicSidebar />
                    </div>
                    {/* <div onClick={() => setIsSidebarOpen(false)} className={`${showNotifications ? "translate-y-0" : "translate-y-[-200vh]"} absolute right-0 h-full transition-all duration-500 ease-in-out`}>
                        <Notifications />
                    </div> */}
                    <div onClick={() => { setIsSidebarOpen(false)}} className='w-full'>
                        {/* Dashboard pages */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}