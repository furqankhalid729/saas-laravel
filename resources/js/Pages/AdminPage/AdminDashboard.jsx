import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, subWeeks, subMonths, startOfWeek, endOfWeek } from "date-fns";
import DashboardCards from '../../components/AdminComponents/DashboardCards'
import ChartDoughnut from '../../components/AdminComponents/ChartDoughnut'
import RecentUpdatesTable from '../../components/AdminComponents/TableComponents/RecentUpdatesTable'
import AdminLayout from "../../Layout/AdminLayout";
import DashboardTable from "../../Components/AdminComponents/TableComponents/AppointmentsTable/DashboardTable";

const AdminDashboard = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const presets = [
        { label: "Today", range: [new Date(), new Date()] },
        { label: "Yesterday", range: [subDays(new Date(), 1), subDays(new Date(), 1)] },
        { label: "This Week", range: [startOfWeek(new Date()), endOfWeek(new Date())] },
        { label: "Last Week", range: [subWeeks(startOfWeek(new Date()), 1), subWeeks(endOfWeek(new Date()), 1)] },
        { label: "Last 7 Days", range: [subDays(new Date(), 7), new Date()] },
        { label: "Last 28 Days", range: [subDays(new Date(), 28), new Date()] },
        { label: "Last 30 Days", range: [subDays(new Date(), 30), new Date()] },
        { label: "Last 90 Days", range: [subDays(new Date(), 90), new Date()] },
        { label: "Last 12 Months", range: [subMonths(new Date(), 12), new Date()] },
    ];

    const handlePresetClick = (range) => {
        setStartDate(range[0]);
        setIsDropdownOpen(false); // Close the dropdown
    };

    return (
        <div className='w-full'>
            <div className='w-[93%] my-7 mx-auto flex flex-col gap-[30px]'>
                {/* Page Logo and Headings */}
                <div className='flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center'>
                    {/* Title logo */}
                    <div className='flex items-center gap-2'>
                        <img src="/storage/Images/attelo-brand-name.jpeg" alt="brandLogo" className='w-[75px] h-[75px] rounded-xl' />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-[700] text-[32px] leading-[38px]'>ATELLO</h1>
                            <p className='text-[#808080] font-[400] text-[13px] leading-[16px]'>Developers Company</p>
                        </div>
                    </div>
                    {/* Date */}
                    <div className="flex gap-2  justify-center">
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Select Date
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-300 rounded shadow">
                                    {presets.map((preset, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handlePresetClick(preset.range)}
                                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="p-2 border border-gray-300 rounded shadow"
                        />
                    </div>
                </div>
                <DashboardCards />
                <div className='flex flex-col-reverse lg:flex-row gap-4 '>
                    <DashboardTable />
                    <ChartDoughnut />
                </div>
                <RecentUpdatesTable />
            </div>
        </div>
    )
}

AdminDashboard.layout = page => <AdminLayout children={page} title="Admin Dashboard" />

export default AdminDashboard
