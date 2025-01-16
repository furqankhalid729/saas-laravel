import React from 'react'
import { IoClose } from "react-icons/io5";
import { ImFilePicture } from "react-icons/im";

const AddNewForm = ({ openNewForm, setOpenNewForm }) => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div onClick={() => setOpenNewForm(!openNewForm)} className='absolute z-10 w-full min-h-screen bg-[#00000068]'></div>
            <div className='w-[80%] z-30 mx-auto bg-white rounded'>
                <div className='w-[95%] mx-auto py-5'>
                    {/*  */}
                    <div className='flex justify-between items-center font-[500] text-[24px] leading-[28px]'>
                        <h4>Add New Form</h4>
                        <IoClose  onClick={() => setOpenNewForm(!openNewForm)}/>
                    </div>
                    <form className='my-5'>
                        {/* title and form type */}
                        <div className='mb-5 grid grid-cols-2 gap-3'>
                            <input type="text" placeholder='Title' className='w-full py-2 px-4 outline-none border rounded border-black' />
                            <input type="text" placeholder='Form Type' className='w-full py-2 px-4 outline-none border rounded border-black' />
                        </div>
                        {/* Description */}
                        <textarea type="text" placeholder='Description' className='mb-5 w-full h-[170px] py-2 px-4 outline-none border rounded border-black' />
                        {/* Save btn and  upload pic */}
                        <div className='flex justify-between items-end'>
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                <div className='w-[120px] h-[120px] flex flex-col items-center justify-center font-[400] text-[12px] leading-[14px] text-[#808080] border border-black rounded'>
                                    <ImFilePicture className='w-[50px] h-[50px]' />
                                    <p>Upload Photos</p>
                                </div>
                                <div className='w-[120px] h-[120px] flex flex-col items-center justify-center font-[400] text-[12px] leading-[14px] text-[#808080] border border-black rounded'>
                                    <ImFilePicture className='w-[50px] h-[50px]' />
                                    <p>Upload Photos</p>
                                </div>
                                <div className='w-[120px] h-[120px] flex flex-col items-center justify-center font-[400] text-[12px] leading-[14px] text-[#808080] border border-black rounded'>
                                    <ImFilePicture className='w-[50px] h-[50px]' />
                                    <p>Upload Photos</p>
                                </div>
                            </div>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewForm
