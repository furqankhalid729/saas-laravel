import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Header from '../Components/UserComponents/Header';
import SideBar from '../Components/UserComponents/SideBar';

export default function MainLayout({ title, children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const displaySideBar = () => {
        return setIsSidebarOpen(!isSidebarOpen)
    };

    return (
        <>
            <Head title={title} />
            <div className='bg-[#f3f3f3] w-full min-h-screen'>
                <Header onClickSideBar={displaySideBar} SidebarOpen={setIsSidebarOpen} />
                <div className='flex min-h-full'>
                    {/* Mobile Screen SideBAr */}
                    <div onClick={() => { setIsSidebarOpen(false) }} className={`${isSidebarOpen ? "translate-x-0 " : "translate-x-[-100vw]"}  fixed  min-h-screen  md:hidden transition-all duration-500 ease-in-out z-40`}>
                        <SideBar />
                    </div>
                    {/* Desktop screen SideBar */}
                    <div className='hidden md:block min-h-full'>
                        <SideBar />
                    </div>
                    {/* <div onClick={() => setIsSidebarOpen(false)} className={`${showNotifications ? "translate-y-0" : "translate-y-[-200vh]"} absolute right-0 h-full transition-all duration-500 ease-in-out`}>
                                        <Notifications />
                                    </div> */}
                    <div onClick={() => { setIsSidebarOpen(false) }} className={`w-full min-h-full`}>
                        {/* Dashboard pages */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}