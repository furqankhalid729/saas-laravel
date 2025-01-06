import React from 'react'

let RecentUpdates = [
  { Id: "01", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Message", Status: "New", Color: "text-[#1E5600]" },
  { Id: "02", name: "Warner Steave", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Documents", Status: "Recent", Color: "text-[#EA4232]" },
  { Id: "03", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Appointment", Status: "New", Color: "text-[#1E5600]" },
  { Id: "04", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Appointment", Status: "Recent", Color: "text-[#EA4232]" },
  { Id: "05", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Message", Status: "New", Color: "text-[#1E5600]" },
  { Id: "06", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Documents", Status: "New", Color: "text-[#1E5600]" },
  { Id: "07", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Appointment", Status: "New", Color: "text-[#1E5600]" },
  { Id: "08", name: "Adam Smith", Email: "info@warnersmith.com", PhoneNo: "+1-923-466-543", Action: "Appointment", Status: "Recent", Color: "text-[#EA4232]" },

]

const RecentUpdatesTable = () => {

  return (
    <div className='w-full bg-white shadow-lg grid grid-cols-1'>
      <div className='w-[98%] mx-auto p-2'>
        {/* heading */}
        <h4 className='mb-5 font-[700] text-[20px] leading-[24px]'>Recent updates</h4>
        <div className='overflow-x-scroll hide-scrollbar w-full '>
          <table className='w-full'>
            <tbody>
              {/* Heading Row */}
              <tr className='text-[16px] capitalize  leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                <td className='w-[5%] text-nowrap px-2'>ID</td>
                <td className='w-[15%] text-nowrap px-2'>Name</td>
                <td className='w-[15%] text-nowrap px-2'>Email</td>
                <td className='w-[20%] text-nowrap px-2 text-center'>Phone no.</td>
                <td className='w-[15%] text-nowrap px-2 text-center'>Action</td>
                <td className='w-[15%] text-nowrap px-2 text-center'>Status</td>
                <td className='w-[15%] text-nowrap px-2'></td>
              </tr>
              {RecentUpdates.map((data, index) => (
                <tr key={index} className='text-[14px] leading-[16px] font-[1500] border-b text-[#808080] border-[#808080] h-[40px]'>
                  <td className='w-[15%] text-nowrap px-2'>{data.Id}</td>
                  <td className='w-[15%] text-nowrap px-2'>{data.name}</td>
                  <td className='w-[15%] text-nowrap px-2'>{data.Email}</td>
                  <td className='w-[20%] text-nowrap px-2 text-center'>{data.PhoneNo}</td>
                  <td className='w-[15%] text-nowrap px-2 text-center'>{data.Action}</td>
                  <td className={`w-[15%] text-nowrap px-2 text-center ${data.Color}`}>{data.Status}</td>
                  <td className='w-[15%] text-nowrap px-2 text-[#231E20] underline' >View Detail</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecentUpdatesTable
