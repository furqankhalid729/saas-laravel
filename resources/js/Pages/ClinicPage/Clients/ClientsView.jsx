import React from 'react'
import ClinicLayout from "../../../Layout/ClinicLayout";
import ClientProfile from '../../../components/ClinicComponents/ClientProfile'
import ClientCards from '../../../components/ClinicComponents/ClientCards'
import ClientPaymentTable from '../../../components/ClinicComponents/TablesComponents/ClientPaymentTable'
import ClientActivityTable from '../../../components/ClinicComponents/TablesComponents/ClientActivityTable'

const ClientsView = () => {
    return (
        <div className='w-full'>
            {/* client Profile div */}
            <ClientProfile />
            <div className='w-[93%] mx-auto my-7 flex flex-col gap-[30px]'>
                <ClientCards />
                <ClientPaymentTable />
                <ClientActivityTable />
            </div>
        </div>
    )
}
ClientsView.layout = page => <ClinicLayout children={page} title={"ClientsView"}/> 
export default ClientsView
