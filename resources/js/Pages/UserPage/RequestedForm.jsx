import React from 'react'
import UserLayout from '../../Layout/UserLayout';
import RequestedFormTable from '../../Components/UserComponents/TablesComponents/RequestedFormTables/RequestedFormTable';
import SubmittedFormTable from '../../Components/UserComponents/TablesComponents/SubmittedFormTable';

const RequestedForm = ({requestedForms}) => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto flex flex-col gap-10'>
        <RequestedFormTable 
          requestedForms={requestedForms}
        />
        {/* <SubmittedFormTable/> */}
      </div>
    </div>
  )
}
RequestedForm.layout = page => <UserLayout children={page} title="Requested Form" />
export default RequestedForm
