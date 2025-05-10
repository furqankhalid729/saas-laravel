import React from 'react'
import AgencyLayout from "../Layout/AgencyLayout";
import ClientListTable from '../../Components/AdminComponents/TableComponents/ClientListTable'

const ClientList = ({agencyUsers}) => {
    return (
        <div className='w-full'>
            <div className='w-[93%] my-7 mx-auto bg-white grid grid-cols-1'>
                <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                    {/* Heading */}
                    <div className='flex flex-col gap-3 py-2 sm:flex-row w-full justify-between sm:items-center sm:h-[50px]'>
                        <h1 className='w-[20%] font-[700] text-[24px] leading-[28px] text-nowrap'>Client List</h1>
                        <div className='w-[30%] flex gap-2'>
                            <p className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>All</p>
                            <p className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>Paid</p>
                            <p className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>Unpaid</p>
                        </div>
                        <div className='w-[45%] flex gap-2'>
                            <button className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>New Patient</button>
                            <button className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>Appointment</button>
                            <button className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>In Progress</button>
                            <button className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>Waiting for Lab</button>
                            <button className='font-[400] text-[12px] leading-[14px] py-1 px-3 text-nowrap hover:bg-black hover:text-white hover:cursor-pointer rounded-full border border-black'>Completed</button>
                        </div>
                    </div>
                    <ClientListTable 
                        agencyUsers={agencyUsers}
                    />
                </div>
            </div>
        </div>
    )
}
ClientList.layout = page => <AgencyLayout children={page} title="Client List" />

export default ClientList
