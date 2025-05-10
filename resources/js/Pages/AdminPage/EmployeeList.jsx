import React from 'react'
import EmployeeListTable from '../../Components/AdminComponents/TableComponents/EmployeeListTable';
import AgencyLayout from '../../Layout/AgencyLayout';

const EmployeeList = () => {
  return (
    <div className='w-full'>
        <div className='w-[93%] mx-auto my-7'>
            <EmployeeListTable/>
        </div>
    </div>
  )
}
EmployeeList.layout = page => <AgencyLayout children={page} title="Employee List" />
export default EmployeeList
