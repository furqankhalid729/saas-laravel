import React from 'react'
import { useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import RequestedDocTable from '../../../Components/UserComponents/TablesComponents/RequestedDocTable';


const RequestedDoc = () => {
const { id } = useParams();
    return (
        <div className='w-full gap-[20px]'>
            <div className='w-[93%] my-7 mx-auto'>
                {/* Heading */}
                <div className='flex flex-col gap-[20px]'>
                    {/*Heading */}
                    <div className='w-full mb-7 flex flex-col sm:flex-row items-center gap-2'>
                        <h6 className='text-[36px] font-[600] leading-[44px]'>Additional Documents</h6>
                        <FaAngleRight className='text-[20px] sm:block hidden' />
                        <p className='text-[24px] font-[600] leading-[28px] sm:block hidden'>Requested documents</p>
                    </div>
                    {/* Table */}
                    <RequestedDocTable id={id}/>
                </div>
            </div>
        </div>
    )
}

export default RequestedDoc
