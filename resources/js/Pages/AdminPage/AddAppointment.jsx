import React from 'react'
import AddAppointmentForm from '../../Components/AdminComponents/AddAppointmentForm'
import AgencyLayout from '../../Layout/AgencyLayout';

const AddAppointment = ({agencyUsers}) => {
  console.log(agencyUsers)
  return (
    <div className='w-full'>
        <div className='w-[93%] mx-auto my-7'>
            <AddAppointmentForm
              agencyUsers={agencyUsers}
            />
        </div>
    </div>
  )
}
AddAppointment.layout = page => <AgencyLayout children={page} title="Add Appointment" />
export default AddAppointment
