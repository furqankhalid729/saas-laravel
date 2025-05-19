import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const AddMemberForm = () => {
    // Define the validation schema with Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phoneNo: Yup.string().required('Phone number is required'),
        relation: Yup.string().required('Relation is required'),
        age: Yup.number().min(1, 'Invalid age').required('Age is required'),
        gender: Yup.string().required('Gender is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string().required('password is required'),
    });

    // Initial values for the form fields
    const initialValues = {
        name: '',
        email: '',
        phoneNo: '',
        relation: '',
        age: '',
        gender: '',
        address: '',
        password: ''
    };

    // Function to handle form submission
    const onSubmit = (values, { setSubmitting, setErrors }) => {
        console.log('Form Data', values);
        router.post(route('user.family-members.store'), values, {
            onSuccess: () => {
                console.log('Form submitted successfully');
                // Optional: Show success message
                alert('Member added successfully!');
            },
            onError: (errors) => {
                console.log('Submission errors:', errors);
                setErrors(errors);
            },
            onFinish: () => {
                setSubmitting(false);
            }
        });
    };

    return (
        <div className='flex flex-col'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className='flex flex-col gap-7'>
                        {/* input detail */}
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-[20px]'>
                            {/* name */}
                            <div>
                                <label htmlFor="name" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Name <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter member name"
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                            {/* email */}
                            <div>
                                <label htmlFor="email" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Email <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter member email"
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                            {/* PhoneNo */}
                            <div>
                                <label htmlFor="phoneNo" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Phone no <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    type="text"
                                    id="phoneNo"
                                    name="phoneNo"
                                    placeholder='Enter member phone no'
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                />
                                <ErrorMessage name="phoneNo" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                            {/* Relation */}
                            <div>
                                <label htmlFor="relation" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Relation <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    type="text"
                                    id="relation"
                                    name="relation"
                                    placeholder="Enter member relation"
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                />
                                <ErrorMessage name="relation" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                            {/* Age */}
                            <div>
                                <label htmlFor="age" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Age <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    type="number"
                                    id="age"
                                    name="age"
                                    placeholder="Enter member age"
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                />
                                <ErrorMessage name="age" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Gender <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'>*</span></label>
                                <Field
                                    as="select"
                                    id="gender"
                                    name="gender"
                                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-red-600 text-[14px] font-[400] leading-[17px]" />
                            </div>
                        </div>
                        {/* address */}
                        <div>
                            <label htmlFor="address" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Address
                                <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'> *</span>
                            </label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                placeholder='Enter member address'
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Password
                                <span className='text-[#FF0000] text-[14px] leading-[16px] font-[400]'> *</span>
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Enter password'
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                        </div>
                        {/* Add Member Button*/}

                        <button
                            type="submit"
                            className="w-[150px] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all">
                            Add member
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddMemberForm
