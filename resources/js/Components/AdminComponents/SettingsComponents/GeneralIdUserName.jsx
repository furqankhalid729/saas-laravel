import React from 'react'

const GeneralIdUserName = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between'>
            <h3 className='font-[500] text-[16px] leading-[20px] p-3'>ID & Username</h3>
            <div className='w-full sm:w-[75%] bg-white rounded-xl border-[0.5px] border-[#808080]'>
                {/* First name, last name, Agency Address */}
                <form className='p-5 pb-10'>
                    <div className='flex flex-col xl:flex-row gap-5 w-full'>
                        {/* Agency ID */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="agencyId" className='font-[400] text-[12px] leading-[16px] text-black'>
                                Agency ID
                            </label>
                            <input type="text" id='agencyId' placeholder='123-123-456-788' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F] placeholder:text-[#2F2F2F]' />
                        </div>
                        {/* Agency username */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="agencyUsername" className='font-[400] text-[12px] leading-[16px] text-black'>
                                Agency username
                            </label>
                            <input type="text" id='agencyUsername' placeholder=' theattelocompany' className='font-[400] text-[12px] leading-[16px] px-4 py-2 outline-none border border-[#808080] rounded-lg text-[#2F2F2F] placeholder:text-[#2F2F2F]' />
                        </div>
                    </div>
                    <p className='mt-1 font-[300] text-[12px] leading-[16px] text-[#808080]'>Agency id or username are not be editable.</p>
                </form>
            </div>
        </div>
    )
}

export default GeneralIdUserName
