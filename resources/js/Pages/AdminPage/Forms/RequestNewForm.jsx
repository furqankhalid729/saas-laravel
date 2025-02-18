import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from '@inertiajs/react'
import FormsCard from '../../../components/AdminComponents/Forms/FormsCard'

const RequestNewForm = () => {
    return (
        <div className='min-w-full min-h-screen bg-[#e4e4e4]  my-3 rounded-2xl p-4 shadow-2xl'>
            {/* Close btn Navlink */}
            <Link href="/admin/client-list/client-form" className="flex justify-end items-center p-1 w-full">
                <MdClose className="bg-[#C5C5C5] p-1 rounded text-[20px]" />
            </Link>
            <div className='w-full md:w-[80%] mx-auto my-2'>
                <h1 className='font-[700] text-[24px] leading-[28px] my-4'>Forms</h1>
                <FormsCard />
            </div>
        </div>
    )
}

export default RequestNewForm
