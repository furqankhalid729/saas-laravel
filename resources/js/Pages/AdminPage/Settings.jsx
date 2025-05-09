import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { BiHomeCircle } from "react-icons/bi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdOutlineDomainVerification } from "react-icons/md"
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";
import { Link } from '@inertiajs/react';
import General from './SettingsTabs/General';
import Plans from './SettingsTabs/Plans';
import Domain from './SettingsTabs/Domain';
import EmailTab from './SettingsTabs/EmailTab';
import ApiGenerate from './SettingsTabs/ApiGenerate';

let SettingsBranding = [
  { Number: 1, icon: <BiHomeCircle />, Name: "General" },
  { Number: 2, icon: <MdOutlineSignalCellularAlt />, Name: "Plans" },
  { Number: 3, icon: <MdOutlineDomainVerification />, Name: "Domain" },
  { Number: 4, icon: <MdOutlineAttachEmail />, Name: "Email" },
  { Number: 5, icon: <TbApiApp />, Name: "API Generate" },
]

const Settings = ({agency}) => {
  console.log(agency)
  const [settingPage, SetSettingPage] = useState(1);
  console.log("Setting", settingPage);
  return (
    <div className='min-w-full min-h-screen bg-[#e4e4e4]  my-3 rounded-2xl p-4 shadow-2xl'>
      {/* Close btn Navlink */}
      <Link href="/admin/dashboard" className="flex justify-end items-center p-1 w-full">
        <MdClose className="bg-[#C5C5C5] p-1 rounded text-[20px]" />
      </Link>
      <div className='w-full md:w-[80%] mx-auto my-2 flex flex-col lg:flex-row gap-[50px] justify-between'>
        {/* left sidebar brands */}
        <div className='overflow-hidden border border-[#808080] rounded-xl bg-white min-w-[270px] h-[400px]'>
          {/* top brand logo div */}
          <div className='flex gap-2 items-center px-10 py-3 bg-[#f7f7f7] border-b-[0.5px] border-[#808080]'>
            <img src="/storage/Images/attelo-brand-name.jpeg" alt="logoImg" className='w-[24px] h-[24px] rounded' />
            <div className='flex gap-1 flex-col'>
              <h1 className='font-[500] text-[16px] leading-[19px]'>{ agency.name }</h1>
              <p className='font-[400] text-[10px] leading-[12px] text-[#808080]'>Developers Company</p>
            </div>
          </div>
          {/* Generals, plans, Domain, Email, Api GEnerate icons and names */}
          <div className='px-10 py-6 flex flex-col justify-center gap-5'>
            {SettingsBranding.map((data, index) => (
              <div key={index} onClick={() => SetSettingPage(data.Number)} className={`${settingPage === data.Number ? "bg-[#E4E4E4]" : ""} hover:cursor-pointer flex gap-2 items-center px-3 py-1 rounded-lg font-[400] text-[20px] leading-[19px]`}>
                {data.icon}
                <h6 className=' text-[16px]'>{data.Name}</h6>
              </div>
            ))}
          </div>
        </div>
        {/* right side Tabs */}
        <div className='w-full'>
          {settingPage === 1 &&
            <div>
              <General />
            </div>
          }
          {settingPage === 2 &&
            <div>
              <Plans 
                agency={agency}
              />
            </div>
          }
          {settingPage === 3 &&
            <div>
              <Domain />
            </div>
          }
          {settingPage === 4 &&
            <div>
              <EmailTab />
            </div>
          }
          {settingPage === 5 &&
            <div>
              <ApiGenerate />
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Settings
