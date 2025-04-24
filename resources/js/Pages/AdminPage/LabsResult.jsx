import React from 'react'
import LabsResultTable from '../../components/AdminComponents/TableComponents/LabsResultTable'
import VaccineTable from '../../components/AdminComponents/TableComponents/VaccineTable'
import AgencyLayout from '../../layout/AgencyLayout';

const LabsResult = () => {
    return (
        <div className='w-full gap-[20px]'>
            <div className='w-[93%] my-7 mx-auto'>
                <h6 className='text-[36px] my-6 font-[600] leading-[44px]'>Labs Results</h6>
                <div className=' gap-[20px] grid grid-cols-1'>
                    <LabsResultTable />
                    <VaccineTable />
                </div>
            </div>
        </div>
    )
}
LabsResult.layout = page => <AgencyLayout children={page} title="Labs Result" />
export default LabsResult
