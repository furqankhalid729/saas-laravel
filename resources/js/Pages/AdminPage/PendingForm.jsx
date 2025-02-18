import React from 'react'
import PendingFormTable from '../../components/AdminComponents/TableComponents/PendingFormTable';
import AdminLayout from '../../layout/AdminLayout';

const PendingForm = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                <PendingFormTable />
            </div>
        </div>
    )
}
PendingForm.layout = page => <AdminLayout children={page} title="Pending Form" />
export default PendingForm
