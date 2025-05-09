import React, { useState } from 'react'
import { router,Link } from '@inertiajs/react';
import { FiEdit } from "react-icons/fi";
import ErrorModal from '../../../Components/Models/Error';
import DeleteModal from '../../Models/DeleteModel';
import axios from 'axios';

const FormsCard = ({ forms }) => {
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const handleDelete = async () => {
        console.log(deleteId);
        try {
            const response = await axios.delete(route('agency.forms.delete', { id: deleteId }));
            if (response.status === 200) {
                router.visit(route('agency.forms.list'));
            } else {
                alert('Failed to delete the form. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error?.response?.data?.message || 'An unexpected error occurred while deleting.');
            setErrorModalVisible(true);
        }
        setShowDeleteModal(false);
    };
    return (
        <div className='w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {forms.map((data, index) => (
                <div key={index} className='h-[250px] sm:h-[300px] w-full border-4 border-[#FF2C2C] rounded-xl'>
                    <div className='w-[90%] sm:w-[80%] mx-auto my-4 sm:my-7 flex flex-col justify-between gap-[90px]'>
                        {/* form title and details */}
                        <div className='w-full flex flex-col justify-between'>
                            <div className='flex flex-col gap-3'>
                                <FiEdit className='p-1 bg-[#FF2C2C] w-[30px] h-[30px] text-white rounded-md ' />
                                <h6 className='font-[500] text-[12px] sm:text-[20px] leading-[14px] sm:leading-[24px]'>{data.form_name}</h6>
                            </div>
                            <p className='text-[#808080] font-[400] text-[14px] leading-[16px]'>
                                {data.description} <br />  Form
                            </p>
                        </div>
                        {/* buttons */}
                        <div className='flex justify-between items-center text-[10px] sm:text-[16px]'>
                            <Link href={route('agency.forms.show', { id: data.id })} className='px-3 sm:px-5 py-1 rounded-full bg-black text-white' >View</Link>
                            <button onClick={() => { setDeleteId(data.id); setShowDeleteModal(true) }} className='px-3 sm:px-5 py-1 rounded-full bg-[#FF2C2C] text-white' >Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            {showDeleteModal && (
                <DeleteModal
                    message="Are you sure you want to delete this form?"
                    onClose={() => setShowDeleteModal(false)}
                    onDelete={handleDelete}
                />
            )}
            {errorModalVisible && (
                <ErrorModal
                    message={errorMessage}
                    onClose={() => setErrorModalVisible(false)}
                />
            )}
        </div>
    )
}

export default FormsCard
