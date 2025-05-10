import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import FormsCard from "../../../Components/AdminComponents/Forms/FormsCard"
import { Link } from '@inertiajs/react';
import AgencyLayout from '../../../layout/AgencyLayout';

const Forms = ({forms}) => {
    console.log(forms);
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7 z-0 bg-white p-5 rounded shadow-xl'>
                {/* Heading and Button */}
                <div className='mb-7 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-[700] text-[48px] leading-[57px]'>Agency Forms</h1>
                        <h6 className='font-[400] text-[28px] leading-[33px] text-[#808080]'>Manage your forms</h6>
                    </div>
                    <Link href={route('agency.forms.create')} className='font-[500] text-[20px] leading-[24px] bg-black text-white px-4 py-2 rounded-lg flex items-center gap-1'>
                        <FiPlusCircle />
                        Add new forms
                    </Link>
                </div>
                {/* FormsCard */}
                <FormsCard 
                    forms={forms}
                />
            </div>
        </div>
    )
}
Forms.layout = page => <AgencyLayout children={page} title="Forms" />
export default Forms
