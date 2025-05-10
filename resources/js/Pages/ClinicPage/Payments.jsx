import React from 'react'
import ClinicLayout from "../../Layout/ClinicLayout";
import PaymentCards from '../../Components/ClinicComponents/PaymentCards'
import RecentTransactionTable from '../../Components/ClinicComponents/TablesComponents/RecentTransactionTable'
import UpcomingTransaction from '../../Components/ClinicComponents/TablesComponents/UpcomingTransaction'
import ReportChart from '../../Components/ClinicComponents/Charts/ReportChart'
import CustomerChart from '../../Components/ClinicComponents/Charts/CustomerChart'
import GrowthChart from '../../Components/ClinicComponents/Charts/GrowthChart'

const Payments = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                <div className='w-full flex flex-col gap-5'>
                    <PaymentCards />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <RecentTransactionTable />
                        <UpcomingTransaction />
                    </div>
                    <div className='w-full flex flex-col lg:flex-row justify-between gap-3'>
                        <div className='w-full lg:w-[63%]'>
                            <ReportChart />
                        </div>
                        <div className='w-full lg:w-[35%] flex flex-col gap-5'>
                            <CustomerChart />
                            <GrowthChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Payments.layout = page => <ClinicLayout children={page} title={"Payments"}/>

export default Payments
