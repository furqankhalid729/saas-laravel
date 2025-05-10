import React from 'react'
import PendingFormTable from '../../Components/AdminComponents/TableComponents/PendingFormTable';
import AgencyLayout from '../../Layout/AgencyLayout';

const PendingForm = ({pending_forms}) => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                <PendingFormTable 
                    pending_forms={pending_forms}
                />
            </div>
        </div>
    )
}
PendingForm.layout = page => <AgencyLayout children={page} title="Pending Form" />
export default PendingForm
