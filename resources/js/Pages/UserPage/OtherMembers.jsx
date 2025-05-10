import React from 'react'
import UserLayout from "../../Layout/UserLayout";
import MembersTable from '../../Components/UserComponents/TablesComponents/MembersTables/MembersTable'

const OtherMembers = () => {
  return (
    <div className='w-full gap-[20px]'>
      <div className='w-[93%] my-7 mx-auto'>
        <h6 className='text-[36px] my-6 font-[600] leading-[44px]'>Family Members</h6>
        <MembersTable />
      </div>
    </div>
  )
}
OtherMembers.layout = page => <UserLayout children={page} title="OtherMembers" />

export default OtherMembers
