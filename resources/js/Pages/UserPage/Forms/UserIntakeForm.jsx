import React from "react";
import UserLayout from "../../../Layout/UserLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { RiFolderUploadFill } from "react-icons/ri";
import { Link } from "@inertiajs/react";
import axios from "axios";

const UserIntakeForm = () => {

    const formik = useFormik({
        initialValues: {
            first_name: "",
            middle_name: "",
            last_name: "",
            address_line_1: "",
            city: "",
            state: "",
            zip_code: "",
            country_of_birth:"",
            city_of_birth:"",
            dob: "",
            requested_appointment_date: "",
            age: "",
            phoneNumber: "",
            email: "",
            form_of_identification: "Passport",
            document_identification_number: "",
            has_health_insurance: "no",
            insuranceName: "",
            idFile: null,
            insuranceCardFile: null,
            payment_type: "cash",
            transaction_id:"387645387643",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Required"),
            last_name: Yup.string().required("Required"),
            address_line_1: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            zip_code: Yup.string().required("Required"),
            country_of_birth: Yup.string().required("Required"),
            city_of_birth: Yup.string().required("Required"),
            dob: Yup.date().required("Required"),
            requested_appointment_date: Yup.date().required("Required"),
            age: Yup.number().required("Required"),
            document_identification_number: Yup.string().required("Required"),
            has_health_insurance: Yup.string().required("Required"),
            insuranceName: Yup.string().when("hasInsurance", {
                is: "yes",
                then: Yup.string().required("Required"),
            }),
            payment_type: Yup.string(),
            transaction_id:Yup.string(),
            // idFile: Yup.mixed()
            //     .required("ID is required")
            //     .test(
            //         "fileSize",
            //         "File size is too large",
            //         (value) => value && value.size <= 1024 * 1024 * 5 // 5 MB limit
            //     )
            //     .test(
            //         "fileType",
            //         "Unsupported file type",
            //         (value) =>
            //             value &&
            //             ["image/jpeg", "image/png", "application/pdf"].includes(
            //                 value.type
            //             )
            //     ),
            // insuranceCardFile: Yup.mixed().when("hasInsurance", {
            //     is: "yes",
            //     then: Yup.mixed().required("Required"),
            // }),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log(values); // This will log the form values
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (values[key] !== undefined && values[key] !== null) {
                    formData.append(key, values[key]);
                }
            });
            console.log("Form data:", formData);

            try {
                const response = await axios.post(route('user.forms.patient-intake.store'), formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: 'application/json',
                    },
                });

                alert('Form submitted successfully!');
                //resetForm();
            } catch (error) {
                console.error('Submission error:', error);
                alert(error.response?.data?.message || 'Submission failed');
            }
        },

    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("idFile", file);
    };

    return (
        <div className='w-full min-h-screen bg-white'>
            {/* form */}
            <div className='w-[80%] mx-auto mb-7'>
                {/* title */}
                <h1 className="mb-5 font-[600] text-[40px] lg:text-[50px] leading-[50px] lg:leading-[70px]">Immigration new patient intake</h1>
                <form onSubmit={formik.handleSubmit} className="flex flex-col md:flex-row w-full gap-6">
                    {/* left  */}
                    <div className="w-full md:w-[50%] flex flex-col gap-3 text-[#808080]">
                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label>Name <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="first_name"
                                onChange={formik.handleChange}
                                value={formik.values.first_name}
                                placeholder="Enter Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.first_name && <div className="error text-[#FF0000]">{formik.errors.first_name}</div>}
                        </div>
                        {/* Middle Name */}
                        <div className="flex flex-col gap-1">
                            <label>Middle Name <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="middle_name"
                                onChange={formik.handleChange}
                                value={formik.values.middle_name}
                                placeholder="Enter Middle Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.middle_name && (
                                <div className="error text-[#FF0000]">{formik.errors.middle_name}</div>
                            )}
                        </div>
                        {/* last Name */}
                        <div className="flex flex-col gap-1">
                            <label>Last Name <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="last_name"
                                onChange={formik.handleChange}
                                value={formik.values.last_name}
                                placeholder="Enter Last Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.last_name && (
                                <div className="error text-[#FF0000]">{formik.errors.last_name}</div>
                            )}
                        </div>
                        {/* Address */}
                        <div className="flex flex-col gap-1">
                            <label>Enter your full address <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="address_line_1"
                                onChange={formik.handleChange}
                                value={formik.values.address_line_1}
                                placeholder="Enter Address"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.address_line_1 && (
                                <div className="error text-[#FF0000]">{formik.errors.address_line_1}</div>
                            )}
                        </div>
                        {/* City */}
                        <div className="flex flex-col gap-1">
                            <label>City <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                placeholder="Enter City"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.city && <div className="error text-[#FF0000]">{formik.errors.city}</div>}
                        </div>
                        {/* State */}
                        <div className="flex flex-col gap-1">
                            <label>State <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="state"
                                onChange={formik.handleChange}
                                value={formik.values.state}
                                placeholder="Enter state"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.state && <div className="error text-[#FF0000]">{formik.errors.state}</div>}
                        </div>
                        {/* Zip Code */}
                        <div className="flex flex-col gap-1">
                            <label>Zip Code <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="zip_code"
                                onChange={formik.handleChange}
                                value={formik.values.zip_code}
                                placeholder="Enter zip code"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.zip_code && (
                                <div className="error text-[#FF0000]">{formik.errors.zip_code}</div>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>City of Birth <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="city_of_birth"
                                onChange={formik.handleChange}
                                value={formik.values.city_of_birth}
                                placeholder="Enter Country of Birth"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.city_of_birth && (
                                <div className="error text-[#FF0000]">{formik.errors.city_of_birth}</div>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Country of Birth <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="country_of_birth"
                                onChange={formik.handleChange}
                                value={formik.values.country_of_birth}
                                placeholder="Enter Country of Birth"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.country_of_birth && (
                                <div className="error text-[#FF0000]">{formik.errors.country_of_birth}</div>
                            )}
                        </div>
                        {/* Date of birth */}
                        <div className="flex flex-col gap-1">
                            <label>Date of Birth <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="date"
                                name="dob"
                                onChange={formik.handleChange}
                                value={formik.values.dob}
                                placeholder="Enter Date of Birth"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black"
                            />
                            {formik.errors.dob && (
                                <div className="error text-[#FF0000]">{formik.errors.dob}</div>
                            )}
                        </div>
                        {/* Age */}
                        <div className="flex flex-col gap-1">
                            <label>Age <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="number"
                                name="age"
                                onChange={formik.handleChange}
                                value={formik.values.age}
                                placeholder="Enter Age"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.age && <div className="error text-[#FF0000]">{formik.errors.age}</div>}
                        </div>

                    </div>
                    {/* right */}
                    <div className="w-full md:w-[50%] flex flex-col gap-4 ">
                        {/* upload form of ID */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <label className="font-[700] text-[18px] leading-[26px]">Upload Form of ID  <span className="text-[#FF0000]">*</span></label>
                                <IoClose className="text-[24px]" />
                            </div>
                            <div className="p-4 border-[2px] border-dashed border-[#1849D6] rounded-[8px] flex flex-col gap-2 items-center justify-center cursor-pointer"
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files[0];
                                    formik.setFieldValue("idFile", file);
                                }}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <RiFolderUploadFill className="text-[55px] text-[#1849D6]" />
                                <p>Drag your file(s) to start uploading</p>
                                <p className="text-[#6D6D6D]">OR</p>
                                <input
                                    type="file"
                                    name="idFile"
                                    style={{ display: "none" }}
                                    id="upload-id"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="upload-id" className="cursor-pointer text-[#1849D6] px-3 py-1 border border-[#1849D6] rounded-lg">
                                    Browse files
                                </label>
                            </div>
                            {formik.errors.idFile && formik.touched.idFile && (
                                <div style={{ color: "red", marginTop: "10px" }}>
                                    {formik.errors.idFile}
                                </div>
                            )}
                            <small className="font-[400] text-[12] leading-[14px]">(ID Must be Valid and NOT Expired / ID No Puede Estar Expirada)</small>
                        </div>
                        {/* Form of identification */}
                        <div className="flex flex-col gap-1 text-[#808080]">
                            <label>Form of Identification <span className="text-[#FF0000]">*</span></label>
                            <select
                                name="form_of_identification"
                                onChange={formik.handleChange}
                                value={formik.values.form_of_identification}
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black "
                            >
                                <option value="Passport">Passport</option>
                                <option value="Driver's License">Driver's License</option>
                            </select>
                        </div>
                        {/* Document identification Number */}
                        <div className="flex flex-col gap-1  text-[#808080]">
                            <label>Document Identification Number <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="document_identification_number"
                                onChange={formik.handleChange}
                                value={formik.values.document_identification_number}
                                placeholder="xxxxxxxxxxxxxxxxx"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black "
                            />
                            {formik.errors.document_identification_number && (
                                <div className="error">{formik.errors.document_identification_number}</div>
                            )}
                        </div>
                        {/* Do you have health Insurance */}
                        <div className="flex flex-col gap-3">
                            <label className="font-[700] text-[18px] leading-[26px]">Do you have health insurance? Tienes segure medico?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="has_health_insurance"
                                        value="yes"
                                        onChange={formik.handleChange}

                                    />
                                    Yes
                                </label>
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="has_health_insurance"
                                        value="no"
                                        onChange={formik.handleChange}
                                    />
                                    No
                                </label>
                            </div>
                            {formik.errors.has_health_insurance && (
                                <div className="error">{formik.errors.has_health_insurance}</div>
                            )}
                        </div>
                        {/* Insurance name/Number */}
                        <div className="flex flex-col gap-1">
                            <label className=" text-[#808080]">Insurance name/Number de seguro medllco? </label>
                            <input
                                type="text"
                                name="insuranceName"
                                onChange={formik.handleChange}
                                value={formik.values.insuranceName}
                                placeholder="Enter"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black "
                            />
                            {formik.errors.insuranceName && (
                                <div className="error">{formik.errors.insuranceName}</div>
                            )}
                        </div>

                        {/* Upload insurance card (Front) */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <label className="font-[700] text-[18px] leading-[26px]">Upload insurance card (Front) <span className="text-[#FF0000]">*</span></label>
                                <IoClose className="text-[24px]" />
                            </div>
                            <div className="p-4 border-[2px] border-dashed border-[#1849D6] rounded-[8px] flex flex-col gap-2 items-center justify-center cursor-pointer"
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files[0];
                                    formik.setFieldValue("idFile", file);
                                }}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <RiFolderUploadFill className="text-[55px] text-[#1849D6]" />
                                <p>Drag your file(s) to start uploading</p>
                                <p className="text-[#6D6D6D]">OR</p>
                                <input
                                    type="file"
                                    name="idFile"
                                    style={{ display: "none" }}
                                    id="upload-id"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="upload-id" className="cursor-pointer text-[#1849D6] px-3 py-1 border border-[#1849D6] rounded-lg">
                                    Browse files
                                </label>
                            </div>
                            {formik.errors.idFile && formik.touched.idFile && (
                                <div style={{ color: "red", marginTop: "10px" }}>
                                    {formik.errors.idFile}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>Date of Appointment<span className="text-[#FF0000]">*</span></label>
                            <input
                                type="date"
                                name="requested_appointment_date"
                                onChange={formik.handleChange}
                                value={formik.values.requested_appointment_date}
                                placeholder="Enter Date of Appointment"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black"
                            />
                            {formik.errors.requested_appointment_date && (
                                <div className="error text-[#FF0000]">{formik.errors.requested_appointment_date}</div>
                            )}
                        </div>

                        {/* Payment Method */}
                        <div className="flex flex-col gap-3">
                            <label className="font-[700] text-[18px] leading-[26px]">Payment Method</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="payment_type"
                                        value="card"
                                        onChange={formik.handleChange}
                                    />
                                    Card
                                </label>
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="payment_type"
                                        value="cash"
                                        onChange={formik.handleChange}
                                    />
                                    Cash
                                </label>
                            </div>
                            {formik.errors.payment_type && (
                                <div className="error text-[#FF0000]">{formik.errors.payment_type}</div>
                            )}
                        </div>

                        <button type="submit" className="flex justify-center items-center w-full bg-[#EF3D35] p-3 text-white rounded-lg font-[500] leading-[24px] text-[20px]">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

UserIntakeForm.layout = page => <UserLayout children={page} title="UserIntakeForm" />
export default UserIntakeForm
