import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { RiFolderUploadFill } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "@inertiajs/react";

const MedicalInfoForm = () => {

    const formik = useFormik({
        initialValues: {
            vaccine: "",
            doses: [
                { date: "" },
                { date: "" },
                { date: "" },
                { date: "" },
            ],
            administeredDate: "",
            additionalDose1: "",
            additionalDose2: "",
            additionalDose3: "",
            idFile: null,
            insuranceCardFile: null,
        },
        validationSchema: Yup.object({
            vaccine: Yup.string().required("Required"),
            administeredDate: Yup.date().required("Date Administered is required"),
            additionalDose1: Yup.date().nullable(),
            additionalDose2: Yup.date().nullable(),
            additionalDose3: Yup.date().nullable(),
            doses: Yup.array()
                .of(
                    Yup.object({
                        date: Yup.date().required("Required"),
                    })
                )
                .min(1, "At least one dose is required"),
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
                <h1 className="mb-5 font-[600] text-[40px] lg:text-[50px] leading-[50px] lg:leading-[70px]">Medical information</h1>
                <form className="flex flex-col md:flex-row w-full gap-6">
                    {/* left */}
                    <div className='w-full md:w-[50%] flex flex-col gap-5 text-[#808080]'>
                        {/* Allergies */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="allergies" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Allergies</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='allergies' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='allergies' id='no' />
                                    No
                                </label>
                            </div>
                            <div className='flex flex-col gap-2 font-[400] text-[14px] leading-[19px] text-[#808080]'>
                                <p>If yes, please provide medication name or food allergy.\​ Indique el nombre del medicamento o la alergia. <span className="text-[#FF0000]">*</span></p>
                                <textarea name="textarea" placeholder='Write...' rows="6" id="" className='w-full border border-[#808080] rounded-lg p-3'></textarea>
                            </div>
                        </div>
                        {/* Diarrea */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="Diarrea" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Do you have a fever, diarrea, or vomiting today?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='diarrea' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='diarrea' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Allergic */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="allergic" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Are you allergic to eggs, Baker’s yeast, preservatives (i.e. sulfites), thimerosal, streptomycin, neomycin, Arginine, gelatin or latex?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='allergic' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='allergic' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Sever reaction to any vaccine */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="vaccine" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Have you ever had a severe reaction to any vaccine which required medical care?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccine' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccine' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Vaccinre in the past 4 weeks*/}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="vaccine4weeks" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Have you received any vaccines in the past 4 weeks?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccine4weeks' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccine4weeks' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Varicella disease*/}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="disease" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>History of Varicella disease "Chickenpox", "Lechina", "Catapora"?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='disease' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='disease' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* For women: Are you currently pregnant?*/}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="pragnent" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>For women: Are you currently pregnant?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='pragnent' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='pragnent' id='no' />
                                    No
                                </label>
                            </div>
                            <div className='flex flex-col gap-2 font-[400] text-[14px] leading-[19px] text-[#808080]'>
                                <p>How many weeks pregnant? <span className="text-[#FF0000]">*</span></p>
                                <input type="text" placeholder='Write...' className='w-full border border-[#808080] rounded-lg p-3' />
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-full md:w-[50%] flex flex-col gap-4  text-[#808080]'>
                        {/* Please place a check next to any health conditions listed below that apply:*(required) * */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="Diarrea" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Please place a check next to any health conditions listed below that apply:*(required)  <span className="text-[#FF0000]">*</span></label>
                            {/* checkbox */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="none" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='none' />
                                    None
                                </label>
                                <label htmlFor="diabetes" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='diabetes' />
                                    Diabetes
                                </label>
                                <label htmlFor="thyroidDisease" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='thyroidDisease' />
                                    Thyroid Disease
                                </label>
                                <label htmlFor="bloodPressure" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='bloodPressure' />
                                    High Blood Pressure
                                </label>
                                <label htmlFor="cancer" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='cancer' />
                                    Cancer
                                </label>
                                <label htmlFor="cholestrol" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='cholestrol' />
                                    High Cholesterol
                                </label>
                                <label htmlFor="asthama" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='asthama' />
                                    Asthma
                                </label>
                                <label htmlFor="mentalillness" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='mentalillness' />
                                    Mental Illness
                                </label>
                                <label htmlFor="other" className="flex items-center gap-1">
                                    <input type="checkbox" name='diarrea' id='other' />
                                    Other
                                </label>
                            </div>
                        </div>
                        {/*Current Medications */}
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="CMedications" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Current Medications</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='CMedications' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='CMedications' id='no' />
                                    No
                                </label>
                            </div>
                            {/* If yes, please write name, dose and frequency */}
                            <div className='flex flex-col gap-2 font-[400] text-[14px] leading-[17px] '>
                                <p className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>If yes, please write name, dose and frequency</p>
                                <div className='flex gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="yes">Name</label>
                                        <input type="text" placeholder='Name' className='w-full border border-[#808080] rounded-lg p-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="yes">Dose</label>
                                        <input type="text" placeholder='Dose' className='w-full border border-[#808080] rounded-lg p-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="yes">Frequency</label>
                                        <input type="text" placeholder='Frequency' className='w-full border border-[#808080] rounded-lg p-3' />
                                    </div>
                                </div>
                            </div>
                            <button className='w-[200px] px-4 py-2 flex items-center justify-start text-[#EF3D35 bg-[#EF3D351A] text-[#EF3D35] font-[500] text-[20px] leading-[22px] rounded-xl'>
                                <MdOutlineAdd className=' text-[30px]' />
                                Add item
                            </button>
                        </div>
                        <h4 className='font-[600] text-[28px] leading-[33px] text-[#0B0B0B]'>Covid Vaccination Card and Vaccination Records</h4>,
                        {/* Have you been vaccinated for Covid-19? */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="vaccinated" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Have you been vaccinated for Covid-19?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccinated' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccinated' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Upload insurance card (Front) */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between gap-2">
                                <label className="font-[700] text-[18px] leading-[26px] text-[#0B0B0B]">Please upload a picture of the vaccine card (front).  <span className="text-[#FF0000]">*</span></label>
                                <IoClose className="w-[50px] text-[24px] text-[#0b0b0b]" />
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
                        {/* Do you have any vaccination records or labs (not including Covid-19)? */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="vaccinatedRecord" className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Do you have any vaccination records or labs (not including Covid-19)?</label>
                            <div className="flex items-center gap-3 font-[400] text-[14px] leading-[17px]">
                                <label htmlFor="yes" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccinatedRecord' id='yes' />
                                    Yes
                                </label>
                                <label htmlFor="no" className="flex justify-center items-center gap-1">
                                    <input type="radio" name='vaccinatedRecord' id='no' />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Upload all vaccinated doc */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between gap-2">
                                <label className="font-[700] text-[18px] leading-[26px] text-[#0B0B0B]">Please upload ALL vaccination documentations/​Por favor, sube TODAS las documentaciones de vacunación* <span className="text-[#FF0000]">*</span></label>
                                <IoClose className="w-[50px] text-[24px] text-[#0b0b0b]" />
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
                        {/* Vaccine / Documents upload */}
                        <div className="flex flex-col gap-4">
                            <h4 className='font-[700] text-[18px] leading-[26px] text-[#0B0B0B]'>Vaccine/Document Upload</h4>
                            <p>Please select a vaccine from the dropdown options and indicate the date it was administered. </p>
                            <p>Por favor, seleccione una vacuna de la lista y especifique la fecha en que fue administrada.</p>
                            {/* select vaccine */}
                            <div className="flex flex-col gap-1">
                                <label>Please select vaccine/Seleccione una vacuna: *</label>
                                <select
                                    name="vaccine"
                                    onChange={formik.handleChange}
                                    value={formik.values.vaccine}
                                    className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                                >
                                    <option value="">Select</option>
                                    <option value="Pfizer">Pfizer</option>
                                    <option value="Moderna">Moderna</option>
                                    <option value="Johnson & Johnson">Johnson & Johnson</option>
                                </select>
                                {formik.errors.vaccine && <div className="error">{formik.errors.vaccine}</div>}
                            </div>
                            {/* Date Administrated */}
                            <div className="flex flex-col gap-1">
                                <label>Date Administered/Fecha Administrada *</label>
                                <input
                                    type="date"
                                    name="administeredDate"
                                    onChange={formik.handleChange}
                                    value={formik.values.administeredDate}
                                    placeholder="Enter Administrated Date"
                                    className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                                />
                                {formik.errors.administeredDate && (
                                    <div className="error">{formik.errors.administeredDate}</div>
                                )}
                            </div>
                            {/* Additional Dose */}
                            <div className="flex flex-col gap-1">
                                <label>Additional Dosage/Dosis adicional:</label>
                                <input
                                    type="date"
                                    name="additionalDose1"
                                    onChange={formik.handleChange}
                                    value={formik.values.additionalDose1}
                                    placeholder="Additional Dose"
                                    className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                                />
                            </div>
                            {/* Additional Dose */}
                            <div className="flex flex-col gap-1">
                                <label>Additional Dosage/Dosis adicional:</label>
                                <input
                                    type="date"
                                    name="additionalDose2"
                                    onChange={formik.handleChange}
                                    value={formik.values.additionalDose2}
                                    placeholder="Additional Dose"
                                    className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                                />
                            </div>
                            {/* Additional Dose */}
                            <div className="flex flex-col gap-1">
                                <label>Additional Dosage/Dosis adicional:</label>
                                <input
                                    type="date"
                                    name="additionalDose3"
                                    onChange={formik.handleChange}
                                    value={formik.values.additionalDose3}
                                    placeholder="Additional Dose"
                                    className="border border-[#808080] rounded-md py-3 px-4 outline-none  text-black"
                                />
                            </div>

                            <p className="text-[#0b0b0b]">
                                If more than 4 doses, only upload the latest 4/Si hay más de 4 dosis,
                                solo subir las últimas 4
                            </p>
                            {/* button add vaccine */}
                            <div className="flex">
                                <button className='px-4 py-2 flex items-center justify-start text-[#EF3D35 bg-[#EF3D351A] text-[#EF3D35] font-[500] text-[20px] leading-[22px] rounded-xl'>
                                    <MdOutlineAdd className=' text-[30px]' />
                                    Add vaccine?Andir vacuna
                                </button>
                            </div>

                            <Link href="/user/appointment/book-new-appointment" type="submit" className="flex justify-center items-center w-full bg-[#EF3D35] p-3 text-white rounded-lg font-[500] leading-[24px] text-[20px]">Submit</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MedicalInfoForm
