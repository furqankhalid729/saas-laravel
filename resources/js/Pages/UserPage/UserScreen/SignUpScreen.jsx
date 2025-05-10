import React from 'react';
import SignUpForm from '../../../Components/UserComponents/SignUpForm';
import { usePage } from '@inertiajs/react';

const SignUpScreen = () => {
  const { props } = usePage();
  const slug = props.slug;

  return (
    <div className='w-full min-h-screen md:w-1/2 flex justify-center items-center '>
      <SignUpForm slug={slug} />
    </div>
  );
};

export default SignUpScreen;
