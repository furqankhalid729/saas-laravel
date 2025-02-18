import React from 'react'
import PaymentCards from '../../components/AdminComponents/PaymentCards'
import RecentTransactionTable from '../../components/AdminComponents/TableComponents/RecentTransactionTable';
import AdminLayout from '../../layout/AdminLayout';

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
Payments.layout = page => <AdminLayout children={page} title="Payments" />
export default Payments
