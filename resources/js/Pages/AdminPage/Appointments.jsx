import React from 'react'
import AppointmentsTable from '../../Components/AdminComponents/TableComponents/AppointmentsTable/AppointmentsTable'
import AgencyLayout from '../../Layout/AgencyLayout';

const Appointments = () => {
  return (
    <div className='w-full'>
        <div className='w-[93%] mx-auto my-7'>
            <AppointmentsTable/>
        </div>
    </div>
  )
}
Appointments.layout = page => <AgencyLayout children={page} title="Appointments" />
export default Appointments
