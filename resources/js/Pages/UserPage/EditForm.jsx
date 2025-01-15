import React from 'react'

const EditForm = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] my-7 mx-auto'>
                <h1 className='text-[32px] font-[600] leading-[38px] mb-5'>Form Details</h1>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="title" className='text-[20px] font-[500] leading-[24px]'>Title</label>
                        <input id='title' type="text" className='bg-[#f3f3f3] px-2 py-3 outline-none rounded-none border-black border-[0.5px]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Description" className='text-[20px] font-[500] leading-[24px]'>Description</label>
                        <input id='Description' type="text" className=' bg-[#f3f3f3] px-2 py-3 h-[220px]  outline-none rounded-none border-black border-[0.5px]'/>
                    </div>
                    <button className='self-end bg-black rounded-xl text-white px-4 py-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditForm
