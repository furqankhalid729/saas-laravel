import React from 'react'
import UserLayout from "../../Layout/UserLayout";
import AppointmentTable from "../../Components/UserComponents/TablesComponents/AppointmentsTables/AppointmentTable"
import { Link } from '@inertiajs/react'

const Appointment = ({appointments}) => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto'>
        {/*Heading */}
        <div className='w-full mb-7 flex flex-col gap-2 sm:flex-row justify-between sm:items-center'>
          <h6 className='text-[36px] font-[600] leading-[44px]'>Appointment</h6>
          
        </div>
        <AppointmentTable 
          appointments={appointments}
        />
      </div>
    </div>
  )
}
Appointment.layout = page => <UserLayout children={page} title="Appointment" />

export default Appointment
