import React, { useState } from 'react'
import FormsTable from '../../../components/AdminComponents/TableComponents/FormsTable';
import Profile from '../../../components/AdminComponents/Profile';
import AdditionalDetails from '../../../components/AdminComponents/AdditionalDetails';
import LabsResultTable from '../../../components/AdminComponents/TableComponents/LabsResultTable';
import CustomerPlan from '../../../components/AdminComponents/CustomerPlan';
import { IoIosArrowRoundBack } from "react-icons/io";
import VaccineTable from '../../../components/AdminComponents/TableComponents/VaccineTable';
import AppointmentClientTable from '../../../Components/AdminComponents/TableComponents/AppointmentsTable/AppointmentClientTable';
import Chatbot from '../../../components/AdminComponents/Chatbot';
import TimeLine from '../../../components/AdminComponents/TimeLine';
import PaymentTable from '../../../components/AdminComponents/TableComponents/PaymentTable';
import RelativesTable from '../../../components/AdminComponents/TableComponents/RelativesTable';
import SoftNotesTable from '../../../components/AdminComponents/TableComponents/SoftNotesTable';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import I693From from '../../../components/AdminComponents/Forms/I693From';
import AgencyLayout from '../../../Layout/AgencyLayout';



let PagesNumber = [
    { Number: 1, PageName: "Profile" },
    { Number: 2, PageName: "Appointment" },
    { Number: 3, PageName: "Labs / Vaccines" },
    { Number: 4, PageName: "I-693 Form" },
    { Number: 5, PageName: "Ready For Pickup" },
    { Number: 6, PageName: "Chatbot" },
    { Number: 7, PageName: "Timeline" },
    { Number: 8, PageName: "Payment" },
    { Number: 9, PageName: "Relatives" },
]

const ClientForm = ({agencyUser, agencyFroms,requestedForms, appointments, timeLine}) => {
    console.log(agencyUser);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7 flex flex-col gap-[30px]'>
                {/* Heading Numbers div */}
                <div className='flex flex-col lg:flex-row md:items-start lg:items-center gap-[8px] xl:gap-[100px]'>
                    {/* heading */}
                    <div className='flex items-center text-nowrap gap-2'>
                        <IoIosArrowRoundBack className='text-[30px]' onClick={() => setCurrentPage(currentPage - 1)} />
                        <h1 className='font-[700] text-[16px] leading-[19px]'>{agencyUser.user.name}</h1>
                        <p className='font-[400] text-[8px] leading-[9px] p-1 bg-[#bebebe]'>Paid</p>
                    </div>
                    <ProgressBar currentPage={currentPage} />
                </div>
                {/* Pages names */}
                <div className='grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 font-[400] text-[16px] leading-[19px]'>
                    {PagesNumber.map((data, index) => (
                        <p key={index} onClick={() => setCurrentPage(data.Number)} className={`${currentPage === data.Number ? 'bg-white shadow-md' : "bg-[#cecaca]"} hover:cursor-pointer rounded px-2 py-1 text-nowrap text-center`}>{data.PageName}</p>
                    ))}
                </div>
                {/* Tables and Profile */}
                <div className='flex flex-col lg:flex-row gap-3'>
                    {/* left side tables div */}
                    <div className='w-full lg:w-[70%]'>
                        {/* form Table */}
                        {currentPage === 1 && (
                            <AdditionalDetails />
                        )}
                        {currentPage === 2 && (
                            <div className='flex flex-col gap-[20px]'>
                                <AdditionalDetails />
                                <FormsTable 
                                    agencyFroms={agencyFroms}
                                    agencyUser = {agencyUser}
                                    requestedForms ={requestedForms}
                                />
                                <AppointmentClientTable 
                                    appointments={appointments}
                                />
                                <SoftNotesTable />
                            </div>
                        )}
                        {currentPage === 3 && (
                            <div className='flex flex-col gap-[20px]'>
                                <CustomerPlan />
                                <LabsResultTable />
                                <VaccineTable />
                            </div>
                        )}
                        {currentPage === 4 && (
                            <div>
                                <I693From />
                            </div>
                        )}
                        {currentPage === 5 && (
                            <div>
                                <p>Form preview here</p>
                                <div className='flex gap-3 justify-end'>
                                    <button className='px-4 py-2 bg-black text-white rounded-lg'>Dawnload</button>
                                    <button onClick={() => setCurrentPage(5)} className='px-4 py-2 bg-black text-white rounded-lg'>Release</button>
                                </div>
                            </div>
                        )}
                        {currentPage === 6 && (
                            <div>
                                <Chatbot />
                            </div>
                        )}
                        {currentPage === 7 && (
                            <div>
                                <TimeLine 
                                    timeLine={timeLine}
                                />
                            </div>
                        )}
                        {currentPage === 8 && (
                            <div>
                                <PaymentTable />
                            </div>
                        )}
                        {currentPage === 9 && (
                            <div>
                                <RelativesTable />
                            </div>
                        )}
                    </div>
                    {/* right side Profile div */}
                    <div className='w-full sm:w-[60%] lg:w-[30%]'>
                        <Profile agencyUser={agencyUser} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div >
    )
}
ClientForm.layout = page => <AgencyLayout children={page} title="Client Form" />
export default ClientForm