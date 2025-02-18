import React from 'react'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdHelpCircleOutline } from "react-icons/io";


const NewAdditionalDoc = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/jpg': [],
            'image/png': [],
            'application/pdf': [],
        },
        maxSize: 25 * 1024 * 1024, // 25MB max size
        onDrop: (acceptedFiles) => {
            console.log("Accepted files:", acceptedFiles);
        },
    });

    return (
        <div className='w-full gap-[20px]'>
            <div className='w-[93%] my-7 mx-auto'>
                {/* Heading */}
                <h2 className='text-[36px] mb-6 font-[600] leading-[44px]'>Additional Documents</h2>
                {/* 1st page */}
                {currentPage === 0 &&
                    <div className='w-full sm:w-[70%] mx-auto flex flex-col gap-[70px]'>
                        {/* 1 Step Number div*/}
                        <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='bg-black text-white grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                            </div>
                        </div>
                        {/* upload div */}
                        <div>
                            {/* upload Picture */}
                            <div
                                {...getRootProps()}
                                className={`w-full h-[300px] border-2 rounded-lg font-[400] text-[14px] leading-[16px] flex flex-col items-center justify-center transition-colors duration-200 ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 border-dashed'
                                    }`}
                            >
                                <input {...getInputProps()} />
                                {/* Upload pic svg */}
                                <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 29C1 15.8007 1 9.20102 5.1005 5.1005C9.20102 1 15.8007 1 29 1C42.1992 1 48.7989 1 52.8996 5.1005C57 9.20102 57 15.8007 57 29C57 42.1992 57 48.7989 52.8996 52.8996C48.7989 57 42.1992 57 29 57C15.8007 57 9.20102 57 5.1005 52.8996C1 48.7989 1 42.1992 1 29Z" stroke="#808080" strokeWidth="2" />
                                    <path d="M42.2628 20.1575C44.7045 20.1575 46.6839 18.1782 46.6839 15.7365C46.6839 13.2948 44.7045 11.3154 42.2628 11.3154C39.8212 11.3154 37.8418 13.2948 37.8418 15.7365C37.8418 18.1782 39.8212 20.1575 42.2628 20.1575Z" stroke="#808080" strokeWidth="2" />
                                    <path d="M39.7894 57.4734C37.9635 50.9152 33.7016 45.0417 27.6359 40.7742C21.0961 36.1725 12.8848 33.7371 4.46724 33.9024C3.46776 33.9001 2.46914 33.9319 1.47363 33.9979" stroke="#808080" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M31.9473 45.6847C36.9622 41.7744 42.3647 39.7687 47.8224 39.7902C50.9171 39.787 53.9971 40.4431 56.9999 41.7402" stroke="#808080" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M62.1209 52.8144C62.1305 52.8143 62.1402 52.8143 62.15 52.8143C65.3809 52.8143 68 55.4382 68 58.6751C68 61.6917 65.725 64.176 62.8 64.5M62.1209 52.8144C62.1401 52.5999 62.15 52.3826 62.15 52.1631C62.15 48.207 58.9489 45 55 45C51.2602 45 48.191 47.8765 47.8765 51.5415M62.1209 52.8144C61.9879 54.2919 61.4072 55.64 60.5156 56.7215M47.8765 51.5415C44.5792 51.8558 42 54.6381 42 58.0238C42 61.1742 44.2331 63.8022 47.2 64.4055M47.8765 51.5415C48.0817 51.5219 48.2897 51.5119 48.5 51.5119C49.9636 51.5119 51.3142 51.9965 52.4006 52.8143" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M55 58V68.4M55 58C54.0897 58 52.389 60.5926 51.75 61.25M55 58C55.9103 58 57.611 60.5926 58.25 61.25" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                {isDragActive ? (
                                    <p className="text-blue-500">Drop the file here ...</p>
                                ) : (
                                    <p className="text-gray-500">
                                        Drag and Drop file here or <span className="text-black underline cursor-pointer">Choose file</span>
                                    </p>
                                )}
                            </div>
                            {/* support format */}
                            <div className="py-2 flex justify-between text-[#808080] text-[16px] font-[400] leading-[19px]">
                                <p>
                                    Sported format : JPG, PNG,PDF
                                </p>
                                <p>Maximum size: 25MB</p>
                            </div>
                        </div>
                        {/* buttons div */}
                        <div className='flex justify-between font-[400]'>
                            {/* Help center */}
                            <p className='text-[#808080] flex items-center gap-1 text-[14px] leading-[16px]'>
                                <IoMdHelpCircleOutline />
                                Help Center
                            </p>

                            {/* button */}
                            <button onClick={() => setCurrentPage(1)} className='bg-black text-white px-4 py-2 rounded-lg text-[20px] leading-[24px]'>Upload</button>
                        </div>
                    </div>
                }
                {/* 2nd page */}
                {currentPage === 1 &&
                    <div className='w-full sm:w-[70%] mx-auto flex flex-col gap-[70px]'>
                        {/* 2 Step Number div*/}
                        <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='bg-black text-white grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                            </div>
                        </div>
                        {/* upload div */}
                        <div>
                            {/* upload Picture */}
                            <div
                                {...getRootProps()}
                                className={`w-full h-[300px] border-2 rounded-lg font-[400] text-[14px] leading-[16px] flex flex-col items-center justify-center transition-colors duration-200 ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 border-dashed'
                                    }`}
                            >
                                <input {...getInputProps()} />
                                {/* Upload pic svg */}
                                <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 29C1 15.8007 1 9.20102 5.1005 5.1005C9.20102 1 15.8007 1 29 1C42.1992 1 48.7989 1 52.8996 5.1005C57 9.20102 57 15.8007 57 29C57 42.1992 57 48.7989 52.8996 52.8996C48.7989 57 42.1992 57 29 57C15.8007 57 9.20102 57 5.1005 52.8996C1 48.7989 1 42.1992 1 29Z" stroke="#808080" strokeWidth="2" />
                                    <path d="M42.2628 20.1575C44.7045 20.1575 46.6839 18.1782 46.6839 15.7365C46.6839 13.2948 44.7045 11.3154 42.2628 11.3154C39.8212 11.3154 37.8418 13.2948 37.8418 15.7365C37.8418 18.1782 39.8212 20.1575 42.2628 20.1575Z" stroke="#808080" strokeWidth="2" />
                                    <path d="M39.7894 57.4734C37.9635 50.9152 33.7016 45.0417 27.6359 40.7742C21.0961 36.1725 12.8848 33.7371 4.46724 33.9024C3.46776 33.9001 2.46914 33.9319 1.47363 33.9979" stroke="#808080" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M31.9473 45.6847C36.9622 41.7744 42.3647 39.7687 47.8224 39.7902C50.9171 39.787 53.9971 40.4431 56.9999 41.7402" stroke="#808080" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M62.1209 52.8144C62.1305 52.8143 62.1402 52.8143 62.15 52.8143C65.3809 52.8143 68 55.4382 68 58.6751C68 61.6917 65.725 64.176 62.8 64.5M62.1209 52.8144C62.1401 52.5999 62.15 52.3826 62.15 52.1631C62.15 48.207 58.9489 45 55 45C51.2602 45 48.191 47.8765 47.8765 51.5415M62.1209 52.8144C61.9879 54.2919 61.4072 55.64 60.5156 56.7215M47.8765 51.5415C44.5792 51.8558 42 54.6381 42 58.0238C42 61.1742 44.2331 63.8022 47.2 64.4055M47.8765 51.5415C48.0817 51.5219 48.2897 51.5119 48.5 51.5119C49.9636 51.5119 51.3142 51.9965 52.4006 52.8143" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M55 58V68.4M55 58C54.0897 58 52.389 60.5926 51.75 61.25M55 58C55.9103 58 57.611 60.5926 58.25 61.25" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                {isDragActive ? (
                                    <p className="text-blue-500">Drop the file here ...</p>
                                ) : (
                                    <p className="text-gray-500">
                                        Drag and Drop file here or <span className="text-black underline cursor-pointer">Choose file</span>
                                    </p>
                                )}
                            </div>
                            {/* support format */}
                            <div className="py-2 flex justify-between text-[#808080] text-[16px] font-[400] leading-[19px]">
                                <p>
                                    Sported format : JPG, PNG,PDF
                                </p>
                                <p>Maximum size: 25MB</p>
                            </div>
                        </div>
                        {/* buttons div */}
                        <div className='flex justify-between font-[400]'>
                            {/* Help center */}
                            <p className='text-[#808080] flex items-center gap-1 text-[14px] leading-[16px]'>
                                <IoMdHelpCircleOutline />
                                Help Center
                            </p>
                            {/* button */}
                            <button onClick={() => setCurrentPage(2)} className='bg-black text-white px-4 py-2 rounded-lg text-[20px] leading-[24px]'>Next</button>
                        </div>
                    </div>
                }
                {/* 3rd page */}
                {currentPage === 2 &&
                    <div className='w-full sm:w-[70%] mx-auto flex flex-col gap-[100px]'>
                        {/* 3 Step Number div*/}
                        <div className='flex justify-between items-center gap-2 font-[600] text-[24px] leading-[29px]'>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>1</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Upload</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='border border-[#808080] grid place-items-center w-[50px] h-[50px] rounded-full'>2</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Review</p>
                            </div>
                            <div className='w-full border-t-[1px] border-dashed border-[#808080] mb-5'></div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='bg-black text-white grid place-items-center w-[50px] h-[50px] rounded-full'>3</span>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#808080]'>Status</p>
                            </div>
                        </div>
                        <div className='self-center font-[400] text-[20px] leading-[24px] flex flex-col justify-center items-center gap-3'>
                            <p>
                                Your document has been pending in review.
                            </p>
                            <button className='bg-black text-white px-4 py-2 rounded-lg '>Done</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NewAdditionalDoc
