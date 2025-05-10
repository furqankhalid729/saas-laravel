import React from 'react'
import UserLayout from "../../Layout/UserLayout";
import InvoicesTable from '../../Components/UserComponents/TablesComponents/InvoicesTable'

const Invoices = () => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto'>
        <h6 className='text-[36px] mb-6 font-[600] leading-[44px]'>Invoices</h6>
        <InvoicesTable />
      </div>
    </div>
  )
}
Invoices.layout = page => <UserLayout children={page} title="Invoices" />

export default Invoices
