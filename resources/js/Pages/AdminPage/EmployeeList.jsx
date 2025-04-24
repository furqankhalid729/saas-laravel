import React from 'react'
import EmployeeListTable from '../../components/AdminComponents/TableComponents/EmployeeListTable';
import AgencyLayout from '../../layout/AgencyLayout';

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
