import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { RiFolderUploadFill } from "react-icons/ri";
import { Link } from "@inertiajs/react";

const UserIntakeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            middleName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            dateOfBirth: "",
            age: "",
            phoneNumber: "",
            email: "",
            idType: "Passport",
            idNumber: "",
            hasInsurance: "no",
            insuranceName: "",
            idFile: null,
            insuranceCardFile: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            middleName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            zipCode: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            age: Yup.number().required("Required"),
            phoneNumber: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            idNumber: Yup.string().required("Required"),
            hasInsurance: Yup.string().required("Required"),
            insuranceName: Yup.string().when("hasInsurance", {
                is: "yes",
                then: Yup.string().required("Required"),
            }),
            idFile: Yup.mixed()
                .required("ID is required")
                .test(
                    "fileSize",
                    "File size is too large",
                    (value) => value && value.size <= 1024 * 1024 * 5 // 5 MB limit
                )
                .test(
                    "fileType",
                    "Unsupported file type",
                    (value) =>
                        value &&
                        ["image/jpeg", "image/png", "application/pdf"].includes(
                            value.type
                        )
                ),
            insuranceCardFile: Yup.mixed().when("hasInsurance", {
                is: "yes",
                then: Yup.mixed().required("Required"),
            }),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("idFile", file);
    };

    return (
        <div className='w-full min-h-screen bg-white'>
            {/* brand logo */}
            <div className='w-[95%] mx-auto py-4'>
                <img src="/storage/images/attelo-brand-name.jpeg" alt='logo' className='w-[100px] h-[100px] rounded-full ' />
            </div>
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
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                placeholder="Enter Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.name && <div className="error text-[#FF0000]">{formik.errors.name}</div>}
                        </div>
                        {/* Middle Name */}
                        <div className="flex flex-col gap-1">
                            <label>Middle Name <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="middleName"
                                onChange={formik.handleChange}
                                value={formik.values.middleName}
                                placeholder="Enter Middle Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.middleName && (
                                <div className="error text-[#FF0000]">{formik.errors.middleName}</div>
                            )}
                        </div>
                        {/* last Name */}
                        <div className="flex flex-col gap-1">
                            <label>Last Name <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                placeholder="Enter Last Name"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.lastName && (
                                <div className="error text-[#FF0000]">{formik.errors.lastName}</div>
                            )}
                        </div>
                        {/* Address */}
                        <div className="flex flex-col gap-1">
                            <label>Enter your full address <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                placeholder="Enter Address"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.address && (
                                <div className="error text-[#FF0000]">{formik.errors.address}</div>
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
                                name="zipCode"
                                onChange={formik.handleChange}
                                value={formik.values.zipCode}
                                placeholder="Enter zip code"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.zipCode && (
                                <div className="error text-[#FF0000]">{formik.errors.zipCode}</div>
                            )}
                        </div>
                        {/* Date of birth */}
                        <div className="flex flex-col gap-1">
                            <label>Date of Birth <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                onChange={formik.handleChange}
                                value={formik.values.dateOfBirth}
                                placeholder="Enter Date of Birth"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black"
                            />
                            {formik.errors.dateOfBirth && (
                                <div className="error text-[#FF0000]">{formik.errors.dateOfBirth}</div>
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
                        {/* phone no */}
                        <div className="flex flex-col gap-1">
                            <label>Phone Number <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="text"
                                name="phoneNumber"
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                placeholder="Enter Phone No"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.phoneNumber && (
                                <div className="error text-[#FF0000]">{formik.errors.phoneNumber}</div>
                            )}
                        </div>
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label>Email <span className="text-[#FF0000]">*</span></label>
                            <input
                                type="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Enter Email"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                            />
                            {formik.errors.email && <div className="error text-[#FF0000]">{formik.errors.email}</div>}
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
                                name="idType"
                                onChange={formik.handleChange}
                                value={formik.values.idType}
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
                                name="idNumber"
                                onChange={formik.handleChange}
                                value={formik.values.idNumber}
                                placeholder="xxxxxxxxxxxxxxxxx"
                                className="border border-[#808080] rounded-md py-3 px-4 outline-none text-black "
                            />
                            {formik.errors.idNumber && (
                                <div className="error">{formik.errors.idNumber}</div>
                            )}
                        </div>
                        {/* Do you have health Insurance */}
                        <div className="flex flex-col gap-3">
                            <label className="font-[700] text-[18px] leading-[26px]">Do you have health insurance? Tienes segure medico?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="hasInsurance"
                                        value="yes"
                                        onChange={formik.handleChange}

                                    />
                                    Yes
                                </label>
                                <label className="flex justify-center items-center gap-1">
                                    <input
                                        type="radio"
                                        name="hasInsurance"
                                        value="no"
                                        onChange={formik.handleChange}
                                    />
                                    No
                                </label>
                            </div>
                            {formik.errors.hasInsurance && (
                                <div className="error">{formik.errors.hasInsurance}</div>
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

                        <Link href="/user/medical-info-form" type="submit" className="flex justify-center items-center w-full bg-[#EF3D35] p-3 text-white rounded-lg font-[500] leading-[24px] text-[20px]">Next</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserIntakeForm
