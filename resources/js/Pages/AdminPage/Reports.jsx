import React from 'react'
import SalesReportChart from '../../Components/AdminComponents/Charts/SalesReportChart'
import ReportChart from '../../Components/AdminComponents/Charts/ReportChart'
import CustomerChart from '../../Components/AdminComponents/Charts/CustomerChart'
import GrowthChart from '../../Components/AdminComponents/Charts/GrowthChart'
import AgencyLayout from '../../layout/AgencyLayout';

const Reports = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                {/* Heading */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-[600] text-[32px] leading-[36px]">Sales Report</h1>
                    <div className="bg-black text-white px-4 py-2 rounded cursor-pointer">
                        Last 1 year ▼
                    </div>
                </div>

                {/* charts */}
                {/* cards sales report */}
                <SalesReportChart />
                <div className='flex flex-col lg:flex-row lg:justify-between gap-4 mt-7'>
                    <div className='w-full lg:w-[68%]'>
                        <ReportChart />
                    </div>
                    <div className='w-full lg:w-[30%] flex flex-col gap-4'>
                        <CustomerChart />
                        <GrowthChart />
                    </div>
                </div>
            </div>
        </div>
    )
}
Reports.layout = page => <AgencyLayout children={page} title="Reports" />
export default Reports
