import React from 'react'
import ClinicLayout from "../../../Layout/ClinicLayout";
import ClientsTable from '../../../components/ClinicComponents/TablesComponents/ClientsTable'

const Clients = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto my-7 grid grid-cols-1'>
                <ClientsTable />
            </div>
        </div>
    )
}
Clients.layout = page => <ClinicLayout children={page} title="Clients" />

export default Clients
