import React, { useState } from 'react'
import { TiTick } from "react-icons/ti"
import { useForm } from '@inertiajs/react'

const plans = [
  {
    id: 1,
    name: "Starter",
    price: 29,
    features: [
      "10,000 visitors",
      "Create Unlimited Widgets",
      "All Widget Types",
      "3rd Party Integrations",
      "Advance Targeting",
      "Widget A/B Testing",
      "Priority Support"
    ]
  },
  {
    id: 2,
    name: "Pro",
    price: 49,
    features: [
      "10,000 visitors",
      "Create Unlimited Widgets",
      "All Widget Types",
      "3rd Party Integrations",
      "Advance Targeting",
      "Widget A/B Testing",
      "Priority Support"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Business",
    price: 99,
    features: [
      "50,000 visitors",
      "Unlimited Widgets",
      "All Widget Types",
      "Premium Integrations",
      "Full Targeting Suite",
      "Multivariate Testing",
      "Dedicated Support"
    ]
  }
]

const ChoosePlanComp = () => {
  const [monthlyPlan, setMonthlyPlan] = useState(false)

  const { data, setData, post, processing } = useForm({
    plan_id: null
  })

  const handlePlanSelect = (planId) => {
    console.log(planId)
    setData('plan_id', planId)
    post(route('agency.subscription.activate'));
  }

  return (
    <div className='w-full h-full flex flex-col gap-[50px]'>
      {/* Toggle */}
      <div className='font-[400] text-[15px] leading-[18px] flex items-center justify-center gap-2'>
        <p className='font-[500]'>Monthly</p>
        <div
          onClick={() => setMonthlyPlan(!monthlyPlan)}
          className={`${monthlyPlan ? "justify-end bg-[#EF3D35]" : "justify-start"} transition-all duration-300 ease-in-out px-[1px] flex w-[45px] h-[20px] border-[2px] border-black rounded-xl hover:cursor-pointer`}>
          <div className={`${monthlyPlan ? "bg-black" : "bg-[#EF3D35] "} transition-transform duration-300 ease-in-out w-[50%] h-full rounded-full`} />
        </div>
        <p className='text-[#808080]'>Yearly</p>
        <p className='text-[8px] leading-[9px] p-1 rounded-xl border border-[#EF3D35] text-[#EF3D35]'>20% off</p>
      </div>

      {/* Plans */}
      <div className='flex flex-col items-center lg:flex-row lg:items-end justify-center gap-4'>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`w-full sm:w-[300px] ${plan.popular ? "sm:h-[600px] bg-black text-white overflow-hidden" : "sm:h-[550px] border border-black"} rounded-lg`}>
            {plan.popular && (
              <h4 className='bg-[#EF3D35] py-3 text-center text-[#F3F3F3]'>Most Popular</h4>
            )}
            <div className='w-[90%] sm:w-[70%] mx-auto my-10 flex flex-col gap-5 items-center'>
              <h6 className='font-[600] text-[24px] leading-[28px]'>{plan.name}</h6>
              <h1 className='font-[600] text-[40px] leading-[48px]'>
                ${plan.price}
                <span className='text-[12px] leading-[14px] text-[#808080]'>/MO</span>
              </h1>
              <div className={`self-start font-[400] text-[16px] leading-[19px] ${plan.popular ? "text-[#F3F3F3]" : ""}`}>
                {plan.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2 mb-5'>
                    <TiTick className='text-[#EF3D35]' />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handlePlanSelect(plan.id)}
                disabled={processing}
                className='bg-[#EF3D35] text-white font-[400] text-[20px] leading-[24px] px-3 py-2 rounded-full'>
                {processing ? "Activating..." : "Get Started"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChoosePlanComp
