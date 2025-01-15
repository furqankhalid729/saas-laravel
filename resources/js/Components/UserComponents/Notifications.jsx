import React from 'react'
let message = [
  { Id: "01", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "02", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "03", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "04", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "05", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "06", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "07", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "08", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "09", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "10", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "11", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
  { Id: "12", Message: "your account has been approved", dayAndTime: "Thursday 4:20pm", hourAgo: "02 hours ago" },
]
const Notifications = () => {
  return (
      <div className={`w-full md:w-[450px] lg:w-[550px] h-[80%] m-[20px] bg-white border rounded-lg border-[#808080] ml-auto relative `}>
        {/* Design Div of Notification */}
        <div className='absolute right-[188px]  md:right-[168px] top-[-14px] border-t border-l border-[#808080] bg-white w-[28px] h-[28px] rotate-45'></div>
        <div className='w-[90%] h-full  mx-auto my-4'>
          {/* heading */}
          <h1 className='text-black text-[32px] mb-6 font-[600] leading-[44px]'>Notifications</h1>
          {/* Messages */}
          <div className='flex flex-col gap-3 h-[85%] overflow-y-scroll'>
            {message.map((data) => (
              <div key={data.Id}>
                {/* message 1 */}
                <div className='flex justify-between items-center'>
                  {/* image and message div */}
                  <div className='flex items-center gap-3'>
                    {/* image div */}
                    <span className='w-[60px] h-[60px] rounded-full bg-[#D9D9D9] grid place-items-center text-[#808080] text-[32px] font-[500] leading-[38px]'>M</span>
                    {/* message and date div */}
                    <div className='font-[400] flex flex-col gap-1'>
                      <p className='text-[20px] leading-[24px]'>{data.Message}</p>
                      <p className='text-[16px] leading-[20px] text-[#808080]'>{data.dayAndTime}</p>
                    </div>
                  </div>
                  {/* Hours ago div */}
                  <div className='flex flex-col gap-2'>
                    <div className='w-[12px] h-[12px] bg-black rounded-full self-end'></div>
                    <p className='font-[400] text-[16px] leading-[19px] text-[#808080]'>{data.hourAgo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div >
      </div >
  )
}

export default Notifications
