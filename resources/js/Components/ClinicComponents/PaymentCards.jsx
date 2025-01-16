import React from 'react'

let PayCards = [
  { Sales: "Cash Payment", Total: "$ 45,679.00", bgColor: "bg-[#1B2C4A]", divColor: "bg-[#FF2C2C]" },
  { Sales: "Card payment", Total: "$ 45,679.00", bgColor: "bg-[#231B4C]", divColor: "bg-[#F9EE19]" },
  { Sales: "Total", Total: "$ 45,679.00", bgColor: "bg-[#1B2C4A]", divColor: "bg-[#FF2C2C]" },
  { Sales: "Upcoming Revenue", Total: "$ 45,679.00", bgColor: "bg-[#231B4C]", divColor: "bg-[#F9EE19]" },
]
const PaymentCards = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {PayCards.map((data, index) => (
        <div key={index} className={`w-full h-[170px] rounded-xl shadow-lg ${data.bgColor}`}>
          <div className='w-[90%] sm:w-[80%] mx-auto my-5 flex flex-col justify-between h-[110px]'>
            <div className='w-full flex gap-2 items-center'>
              <div className={`${data.divColor} w-[25px] h-[25px]`}></div>
              <p className='font-[600] sm:text-[20px] leading-[16px] sm:leading-[24px] text-white'>{data.Sales}</p>
            </div>
            <span className='font-[600] text-[22px] sm:text-[36px] leading-[24px] sm:leading-[44px] text-white'>{data.Total}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PaymentCards
