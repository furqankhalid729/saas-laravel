import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import CollabDocumentsTable from '../../components/AdminComponents/TableComponents/CollabDocumentsTable';
import AdminLayout from '../../layout/AdminLayout';


const CollabDocuments = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7'>
                {/* heading */}
                <div className='flex gap-3 items-center'>
                    <h1 className='mb-5 font-[700] text-[24px] leading-[44px]'>Documents</h1>
                    <FaAngleRight className='sm:block hidden'/>
                    <h1 className='mb-5 font-[700] text-[24px] leading-[44px] sm:block hidden'>Collab Documents</h1>
                </div>
                {/* All items */}
                <p className='mb-5 font-[400] text-[16px] leading-[20px] text-[#808080]'>All items</p>
                <CollabDocumentsTable />
            </div>
        </div>
    )
}
CollabDocuments.layout = page => <AdminLayout children={page} title="CollabDocuments" />
export default CollabDocuments
