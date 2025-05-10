import React, { useState } from 'react'
import ClinicLayout from "../../Layout/ClinicLayout";
import { FiPlusCircle } from "react-icons/fi";
import FormsCard from '../../../components/ClinicComponents/Forms/FormsCard';
import AddNewForm from './FormsTabs/AddNewForm';
import { Link } from '@inertiajs/react';

const Forms = () => {
    // const [openNewForm, setOpenNewForm] = useState(false)
    return (
        <div className='w-full relative'>
            {/* <div className={`absolute top-0 left-0 ${openNewForm ? "translate-x-0" : "translate-x-[-150vw] "} w-full h-full transition-all duration-500 ease-in-out z-30`}>
                <AddNewForm openNewForm={openNewForm} setOpenNewForm={setOpenNewForm}/>
            </div> */}
            <div className='w-[93%] mx-auto py-7 z-0'>
                {/* Heading and Button */}
                <div className='mb-7 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-[700] text-[48px] leading-[57px]'>Default Forms</h1>
                        <h6 className='font-[400] text-[28px] leading-[33px] text-[#808080]'>Manage your default forms</h6>
                    </div>
                    <Link href="/clinic/add-new-form-field" className='font-[500] text-[20px] leading-[24px] bg-black text-white px-4 py-2 rounded-lg flex items-center gap-1'>
                        <FiPlusCircle />
                        Add new forms
                    </Link>
                </div>
                {/* FormsCard */}
                <FormsCard />
            </div>
        </div>
    )
}
Forms.layout = page => <ClinicLayout children={page} title={"Forms"}/>

export default Forms
