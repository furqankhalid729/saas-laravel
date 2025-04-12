import React from 'react'
import AdminLayout from "../../Layout/AdminLayout"
import ClientListTable from '../../components/AdminComponents/TableComponents/ClientListTable'

const ClientList = ({ clients }) => {
    return (
        <div className='w-full'>
            <div className='w-[93%] my-7 mx-auto bg-white grid grid-cols-1'>
                <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                    
                    {/* Heading Section */}
                    <div className='flex flex-col gap-3 py-2 sm:flex-row w-full justify-between sm:items-center sm:h-[50px]'>
                        <h1 className='w-[20%] font-[700] text-[24px] leading-[28px] text-nowrap'>
                            Client List
                        </h1>

                        <div className='w-[30%] flex gap-2'>
                            {['All', 'Paid', 'Unpaid'].map((item, idx) => (
                                <p key={idx} className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>
                                    {item}
                                </p>
                            ))}
                        </div>

                        <div className='w-[45%] flex gap-2'>
                            {['New Patient', 'Appointment', 'In Progress', 'Waiting for Lab', 'Completed'].map((item, idx) => (
                                <button key={idx} className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table Section */}
                    <ClientListTable clients={clients} />
                </div>
            </div>
        </div>
    )
}

ClientList.layout = page => <AdminLayout children={page} title="Client List" />

export default ClientList
