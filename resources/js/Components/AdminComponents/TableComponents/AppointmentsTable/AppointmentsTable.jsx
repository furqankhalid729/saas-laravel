import React from 'react'

let AppointPageData = [
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Paid", color: "text-[#EA4232]" },
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Unpaid", color: "text-[#184400]" },
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Paid", color: "text-[#EA4232]" },
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Paid", color: "text-[#EA4232]" },
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Unpaid", color: "text-[#184400]" },
  { name: "Steve Smith", Date: "Oct 26, 2024", time: "10:00 AM", Status: "Unpaid", color: "text-[#184400]" },
]

const AppointmentsTable = () => {

  return (
    <div className='w-full'>
      <div className='w-full h-[600px] bg-white rounded-lg shadow-2xl'>
        <div className='w-[98%] mx-auto p-2 overflow-x-scroll hide-scrollbar'>
          {/* heading */}
          <div className='flex justify-between items-center gap-3  capitalize '>
            <h4 className='mb-5 font-[700] text-[36px] leading-[44px]'>Appointments</h4>
            <div className='flex items-center gap-3'>
              <p className='px-3 hover:bg-black hover:text-white border border-black rounded-full'>All</p>
              <p className='px-3 hover:bg-black hover:text-white border border-black rounded-full'>Paid</p>
              <p className='px-3 hover:bg-black hover:text-white border border-black rounded-full'>Unpaid</p>
            </div>
          </div>
          <div>
            <table className='w-full'>
              <tbody>
                {/* Heading Row */}
                <tr className='text-[16px] leading-[19px] font-[400] border-y border-[#808080] h-[40px]'>
                  <td className='w-[20%] text-nowrap px-3'>Name</td>
                  <td className='w-[20%] text-nowrap px-3 text-center'>Date</td>
                  <td className='w-[20%] text-nowrap text-center px-3'>Time</td>
                  <td className='w-[20%] text-nowrap px-3 text-center'>Status</td>
                  <td className='w-[20%] text-nowrap px-3'>Action</td>
                </tr>
                {AppointPageData.map((data, index) => (
                  <tr key={index} className='text-[14px] leading-[16px] font-[500] border-b text-[#808080] border-[#808080] h-[40px]'>
                    <td className='w-[20%] text-nowrap px-3'>{data.name}</td>
                    <td className='w-[20%] text-nowrap px-3 text-center'>{data.Date}</td>
                    <td className='w-[20%] text-nowrap text-center px-3'>{data.time}</td>
                    <td className={`w-[20%] text-nowrap px-3 text-center ${data.color}`}>{data.Status}</td>
                    <td className='w-[20%] text-nowrap px-3 underline'>View detail</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentsTable
