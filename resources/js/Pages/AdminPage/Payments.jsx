import React from 'react'
import PaymentCards from '../../components/AdminComponents/PaymentCards'
import RecentTransactionTable from '../../components/AdminComponents/TableComponents/RecentTransactionTable'

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

export default Payments
