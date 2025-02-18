import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import AdditionalDocTable from '../../components/UserComponents/TablesComponents/AdditionalDocTable'

const AdditionalDoc = () => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto'>
        {/* Heading */}
        <div className='flex flex-col gap-[20px]'>
          <h2 className='text-[36px] font-[600] leading-[44px]'>Additional Documents</h2>
          {/* buttons div */}
          <div className='flex flex-col sm:flex-row gap-3 justify-between text-[16px] font-[400] leading-[19px]'>
            <div className='flex flex-col sm:flex-row gap-3 '>
              <NavLink to='/user/additional-doc/add-new-additional-doc' className=" flex justify-center items-center gap-3  px-4 py-3 text-white bg-black rounded-md">
                <FaPlus />
                Add New
              </NavLink>
              {/* Sort Date */}
              <div className='flex items-center justify-between gap-2 text-[#808080] border-[1px] border-gray-400 rounded-md px-1 py-3 '>
                <CgCalendarDates className='text-[23px]' />
                <p>
                  Sort by: Date created
                </p>
                <FaAngleDown />
              </div>
            </div>
            <NavLink to="/user/additional-doc/01" className="h-full border-[1px] border-gray-400 rounded-md px-2 py-3 text-center">
              Requested documents
            </NavLink>
          </div>
        </div>
        {/* Table */}
        <AdditionalDocTable />
      </div>
    </div>
  )
}

export default AdditionalDoc
