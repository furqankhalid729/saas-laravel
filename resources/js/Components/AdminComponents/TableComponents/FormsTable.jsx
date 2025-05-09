import React, { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link, router } from '@inertiajs/react';
import axios from 'axios';
import ErrorModal from '../../../Components/Models/Error';

const FormsTable = ({ agencyFroms: forms, agencyUser, requestedForms:reqForms }) => {
    const [showModal, setShowModal] = useState(false);
    const [agencyForms, setAgencyForms] = useState(forms);
    const [requestedForms, setRequestedForms] = useState(reqForms);
    const [selectedForm, setSelectedForm] = useState();

    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedForm(null);
    };

    const requestForm = async () => {
        try {
            const response = await axios.post(route('agency.forms.request'), {
                form_id: selectedForm,
                user_id: agencyUser.id,
            });

            if (response.data.status === 'success') {
                setShowModal(false);
                setSelectedForm(response.data.requested_forms);
            } else {
                setShowModal(false);
                setErrorMessage(response.data.message);
                setErrorModalVisible(true);
            }
        } catch (error) {
            setShowModal(false);
            setErrorMessage('An error occurred while requesting the form.');
            setErrorModalVisible(true);
        }
    };

    return (
        <div className='w-full bg-white shadow-lg relative'>
            <div className='w-[98%] mx-auto py-3 overflow-x-scroll hide-scrollbar'>
                {/* heading */}
                <div className='flex gap-4 justify-between items-center h-[60px]'>
                    <h1 className='font-[700] text-[24px] leading-[28px]'>Forms</h1>
                    <div className='flex items-center text-nowrap gap-3'>
                        <p className='flex px-2 py-1 text-black items-center gap-1 border border-black rounded-full font-[400] text-[12px] leading-[10px]'>
                            All
                            <span><FaAngleDown /></span>
                        </p>
                        <button
                            onClick={openModal}
                            className='flex items-center gap-1 text-white bg-black px-3 py-1 rounded-lg'
                        >
                            <GoPlusCircle /> Request new forms
                        </button>
                    </div>
                </div>

                {/* table or no data */}
                {requestedForms && requestedForms.length > 0 ? (
                    <table className='w-full'>
                        <tbody>
                            {/* Heading Row */}
                            <tr className='text-[16px] capitalize leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                                <td className='w-[20%] text-nowrap px-3'>Form</td>
                                <td className='w-[20%] text-nowrap px-3'>Describe</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                                <td className='w-[20%] text-nowrap px-3 text-center'>Action</td>
                                <td className='w-[20%] text-nowrap px-3'></td>
                            </tr>
                            {requestedForms.map((data, index) => (
                                <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                                    <td className='w-[20%] text-nowrap px-3'>{data.agency_form.form_name}</td>
                                    <td className='w-[20%] text-nowrap px-3'>{data.agency_form.description}</td>
                                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.status}</td>
                                    <td className='w-[20%] text-nowrap px-3'>
                                        <div className='flex items-center justify-center gap-1'>
                                            <div className='border border-[#808080] rounded'>
                                                <Link href={route('agency.forms.show', data.agency_form.id)}>
                                                    <IoEyeOutline className='text-[20px] text-black p-1' />
                                                </Link>
                                            </div>
                                            <div className='border border-[#808080] rounded'>
                                                <RiDeleteBinLine className='text-[20px] text-[#AF0000] p-1' />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='w-[20%] text-nowrap px-3 text-[#EA4232]'>Print</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-gray-500 py-10">
                        No Forms Found
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white p-5 rounded-lg w-[90%] max-w-md relative">
                        <button onClick={closeModal} className="absolute top-2 right-2">
                            <FaTimes size={20} />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Request a Form</h2>

                        <div className="flex flex-col gap-3">
                            <select
                                value={selectedForm || ''}
                                onChange={(e) => setSelectedForm(e.target.value)}
                                className="border p-2 rounded"
                            >
                                <option value="">Select a Form</option>
                                {agencyForms.map((form) => (
                                    <option key={form.id} value={form.id}>
                                        {form.form_name}
                                    </option>
                                ))}
                            </select>

                            <button
                                onClick={requestForm}
                                className="bg-black text-white py-2 px-4 rounded"
                            >
                                Request Form
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {errorModalVisible && (
                <ErrorModal
                    message={errorMessage}
                    onClose={() => setErrorModalVisible(false)}
                />
            )}
        </div>
    );
};

export default FormsTable;
