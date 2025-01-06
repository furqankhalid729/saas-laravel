import React from 'react'

const I693From = () => {
  return (
    <div className='w-full bg-white p-5 rounded-lg shadow-md'>
      <h1 className='font-[700] text-[34px] leading-[40px] mb-5'>I-693 FORM</h1>
      <form>
        {/* First, middle, last,    name */}
        <div className='flex gap-2 mb-4'>
          {/* first Name */}
          <div className='w-full'>
            <label htmlFor='firstName' className='text-sm font-semibold'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          {/* middle Name */}
          <div className='w-full'>
            <label htmlFor='MiddleName' className='text-sm font-semibold'>
              Middle Name
            </label>
            <input
              type='text'
              id='MiddleName'
              name='MiddleName'
              placeholder='First Name'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          {/* Last Name */}
          <div className='w-full'>
            <label htmlFor='LastName' className='text-sm font-semibold'>
              Last Name
            </label>
            <input
              type='text'
              id='LastName'
              name='LastName'
              placeholder='First Name'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
        </div>
        {/* Street Name and Number */}
        <div className='flex gap-2 mb-4'>
          {/* Street Name */}
          <div className='w-full'>
            <label htmlFor='StreetName' className='text-sm font-semibold'>
              Street Name
            </label>
            <input
              type='text'
              id='StreetName'
              name='StreetName'
              placeholder='Street Name'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          {/* street Number */}
          <div className='w-full'>
            <label htmlFor='StreetNumber' className='text-sm font-semibold'>
              Number
            </label>
            <input
              type='text'
              id='StreetNumber'
              name='StreetNumber'
              placeholder='Street Number'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
        </div>
        {/* City, State, Zip-code */}
        <div className='flex gap-2 mb-4'>
          {/* City */}
          <div className='w-full'>
            <label htmlFor='City' className='text-sm font-semibold'>
              City
            </label>
            <input
              type='text'
              id='City'
              name='City'
              placeholder='City'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          {/* State */}
          <div className='w-full'>
            <label htmlFor='State' className='text-sm font-semibold'>
              State
            </label>
            <input
              type='text'
              id='State'
              name='State'
              placeholder='State'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          {/* Zip code */}
          <div className='w-full'>
            <label htmlFor='ZipCode' className='text-sm font-semibold'>
              Zip Code
            </label>
            <input
              type='text'
              id='ZipCode'
              name='ZipCode'
              placeholder='Zip Code'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
        </div>
        <h3 className='my-5 font-[700] text-[24px]'>Other Information</h3>
        {/* Gender */}
        <div className='w-full mb-4'>
          <label>Gender</label>
          <div className='flex gap-3 items-center'>
            <div className='flex gap-2 items-center'>
              <input type="radio" id='male' name='gender' />
              <label htmlFor="male">Male</label>
            </div>
            <div className='flex gap-2 items-center'>
              <input type="radio" id='female' name='gender' />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        {/* Country */}
        <div className='w-full mb-4'>
          <label htmlFor='Country' className='text-sm font-semibold'>
            Country
          </label>
          <input
            type='text'
            id='Country'
            name='Country'
            placeholder='Country'
            className='w-full p-2 border border-gray-300 rounded mt-1'
          />
        </div>
        {/* DOB date */}
        <div className='w-full flex flex-col gap-2 mb-4'>
          <label htmlFor='' className='text-sm font-semibold'>
            Date of Birth
          </label>
          <input
            type='date'
            id='DOB'
            name='DOB'
            placeholder='Enter Date Of Birth'
            className='w-full p-2 border border-gray-300 rounded mt-1'
          />
        </div>
        {/* Applicant Contact Info */}
        <div  className='mb-4'>
          {/* Applicant Day time and Mobile number */}
          <div className='flex gap-2'>
            {/* Applicants Daytime Telephone Number */}
            <div className='w-full'>
              <label htmlFor='StreetName' className='text-sm font-semibold'>
                Applicants Daytime Telephone Number
              </label>
              <input
                type='text'
                id='Applicants_Daytime'
                name='Applicants Daytime'
                className='w-full p-2 border border-gray-300 rounded mt-1'
              />
            </div>
            {/* Applicants Mobile Phone Telephone Number */}
            <div className='w-full'>
              <label htmlFor='StreetNumber' className='text-sm font-semibold'>
                Applicants Mobile Phone Telephone Number
              </label>
              <input
                type='text'
                id='Applicants_Mobile'
                name='Applicants_Mobile'
                className='w-full p-2 border border-gray-300 rounded mt-1'
              />
            </div>
          </div>
          {/* Applicant Email Address  */}
          <div className='w-full'>
            <label htmlFor='StreetNumber' className='text-sm font-semibold'>
              Applicant Email Address (if any)
            </label>
            <input
              type='text'
              id='Applicant_Email'
              name='Applicant_Email'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
        </div>
        {/* buttons */}
        <div className='flex my-5 gap-3 justify-end'>
          <button className='px-4 py-2 bg-black text-white rounded-lg'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default I693From
