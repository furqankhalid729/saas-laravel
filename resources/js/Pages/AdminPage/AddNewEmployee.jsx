import React from 'react'
import AddEmployee from '../../Components/AdminComponents/AddEmployee'
import EmployeePartialAccess from '../../Components/AdminComponents/EmployeePartialAccess'
import AgencyLayout from '../../layout/AgencyLayout';

const AddNewEmployee = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* left side */}
                    <div className='w-full lg:w-[70%]'>
                        <AddEmployee />
                    </div>
                    {/* right side */}
                    <div className='w-full lg:w-[30%]'>
                        <EmployeePartialAccess />
                    </div>
                </div>
            </div>
        </div>
    )
}
AddNewEmployee.layout = page => <AgencyLayout children={page} title="Add New Employee" />
export default AddNewEmployee
