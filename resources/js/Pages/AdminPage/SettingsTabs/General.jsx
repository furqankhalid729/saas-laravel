import React from 'react'
import GeneralDetails from '../../../Components/AdminComponents/SettingsComponents/GeneralDetails'
import GeneralIdUserName from '../../../Components/AdminComponents/SettingsComponents/GeneralIdUserName'

const General = () => {
    return (
        <div className='w-full flex flex-col'>
            <h1 className='font-[700] text-[24px] leading-[28px] py-4 border-b border-[#808080]'>General</h1>
            <div className='py-6 border-b border-[#808080]'>
                <GeneralDetails />
            </div>
            <div className='py-6'>
                <GeneralIdUserName   />
            </div>
        </div>
    )
}

export default General
