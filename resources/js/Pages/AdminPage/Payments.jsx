import React from 'react'
import PaymentCards from '../../Components/AdminComponents/PaymentCards'
import RecentTransactionTable from '../../Components/AdminComponents/TableComponents/RecentTransactionTable';
import AgencyLayout from '../../layout/AgencyLayout';

const Payments = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                <div className='w-full flex flex-col gap-5'>
                    <PaymentCards />
                    <RecentTransactionTable />
                </div>
            </div>
        </div>
    )
}
Payments.layout = page => <AgencyLayout children={page} title="Payments" />
export default Payments
