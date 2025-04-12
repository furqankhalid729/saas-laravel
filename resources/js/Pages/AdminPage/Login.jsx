import React from 'react';
// import Login from '../../../Components/AdminComponents/LoginForm';
import Login from '../../Components/AdminComponents/LoginForm';

import { usePage } from '@inertiajs/react';
const LoginScreen = () => {
  const { props } = usePage();
  const agency = props.agency;

  return (
    <div className='w-full min-h-screen md:w-1/2 flex justify-center items-center'>
      <Login agency={agency} />
    </div>
  );
};

export default LoginScreen;
