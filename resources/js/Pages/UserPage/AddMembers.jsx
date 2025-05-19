import React from 'react'
import UserLayout from "../../Layout/UserLayout";
import AddMemberForm from '../../Components/UserComponents/UserForm.jsx/AddMemberForm'

const AddMembers = () => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto'>
        <h6 className='text-[36px] mb-6 font-[600] leading-[44px]'>Add Members</h6>
        {/* Upload Pic */}
        {/* <div className='flex items-center gap-3 mb-6'>
          <img src="/storage/images/User/addmemberpic.png" alt="AddMemberPic"  className='w-[80px] h-[80px] rounded-2xl'/>
          <div className='flex flex-col gap-1 font-[400] text-[14px] leading-[17px]'>
            <h6 className='w-[100px] p-1 border border-[#808080] rounded-lg'>Upload image</h6>
            <p className='text-[#797979]'>.png, .jpeg, .gif files up to 8MB. Recommended size is 256 x 256px. </p>
          </div>
        </div> */}
        <AddMemberForm />
      </div>
    </div>
  )
}
AddMembers.layout = page => <UserLayout children={page} title="AddMembers" />

export default AddMembers
