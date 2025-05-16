import React from 'react';
import { useForm, usePage } from '@inertiajs/react'
import UserLayout from "../../Layout/UserLayout";
import DashboardAppointTable from '../../Components/UserComponents/TablesComponents/AppointmentsTables/DashboardAppointTable'
import DashboardFromTable from '../../Components/UserComponents/TablesComponents/RequestedFormTables/DashboardFromTable'
import DashboardMemberTable from '../../Components/UserComponents/TablesComponents/MembersTables/DashboardMemberTable'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'

const UserDashboard = ({appointments,requestedForms}) => {
  const { auth } = usePage().props;
  console.log(requestedForms)
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto '>
        {/* ProgressBar */}
        <ProgressBar currentPage={1} />
        {/* Heading */}
        <div className='text-[40px] leading-[55px] font-[600] mb-8'>
          <h1>Welcome, {auth.user.name}</h1>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#282828] to-[#6a0500]'>How can I
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#EC4137] to-[#fac105]'> help you today?</span>
          </h1>
        </div>
        {/* Tables */}
        <div className='flex flex-col gap-[20px]'>
          <DashboardAppointTable 
            appointments={appointments}
          />
          <DashboardFromTable 
            requestedForms={requestedForms}
          />
          <DashboardMemberTable />
        </div>
      </div>
    </div>
  )
}
UserDashboard.layout = page => <UserLayout children={page} title="UserDashboard" />

export default UserDashboard
