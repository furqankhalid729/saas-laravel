import React from 'react'
import DocumentsTable from '../../components/AdminComponents/TableComponents/DocumentsTable'
import AdminLayout from '../../layout/AdminLayout';

const Documents = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                {/* heading */}
                <h1 className='mb-5 font-[700] text-[24px] leading-[44px]'>Documents</h1>
                {/* All items */}
                <p className='mb-5 font-[400] text-[16px] leading-[20px] text-[#808080]'>All items</p>
                <DocumentsTable />
            </div>
        </div>
    )
}
Documents.layout = page => <AdminLayout children={page} title="Documents" />
export default Documents
