import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const SignUpForm = ({ slug }) => { // Receive slug as prop
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNo: Yup.string().required('Phone number is required'),
    relation: Yup.string().required('Relation is required'),
    age: Yup.number().min(1, 'Invalid age').required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
  });

  const initialValues = {
    name: '',
    email: '',
    phoneNo: '',
    relation: '',
    age: '',
    gender: '',
    address: '',
    password: '',
    terms: false
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Send data to your Laravel route via Inertia with slug in the URL
    router.post(`/u/${slug}/sign-up`, values, {
      onFinish: () => setSubmitting(false),
    });
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-[20px]'>
      <div className='flex flex-col gap-3 w-[90%]'>
        <h1 className='text-[50px] font-[600] leading-[60px]'>Create your account</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-[20px]'>
                {/* name */}
                <div>
                  <label htmlFor="name" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Name <span className='text-[#FF0000]'>*</span></label>
                  <Field type="text" id="name" name="name" placeholder="Enter member name"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-[14px]" />
                </div>

                {/* email */}
                <div>
                  <label htmlFor="email" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Email <span className='text-[#FF0000]'>*</span></label>
                  <Field type="email" id="email" name="email" placeholder="Enter member email"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-[14px]" />
                </div>

                {/* phoneNo */}
                <div>
                  <label htmlFor="phoneNo" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Phone no <span className='text-[#FF0000]'>*</span></label>
                  <Field type="text" id="phoneNo" name="phoneNo" placeholder="Enter member phone no"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                  <ErrorMessage name="phoneNo" component="div" className="text-red-600 text-[14px]" />
                </div>

                {/* relation */}
                <div>
                  <label htmlFor="relation" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Relation <span className='text-[#FF0000]'>*</span></label>
                  <Field type="text" id="relation" name="relation" placeholder="Enter member relation"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                  <ErrorMessage name="relation" component="div" className="text-red-600 text-[14px]" />
                </div>

                {/* age */}
                <div>
                  <label htmlFor="age" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Age <span className='text-[#FF0000]'>*</span></label>
                  <Field type="number" id="age" name="age" placeholder="Enter member age"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                  <ErrorMessage name="age" component="div" className="text-red-600 text-[14px]" />
                </div>

                {/* gender */}
                <div>
                  <label htmlFor="gender" className="block text-[14px] font-[400] leading-[17px] text-[#808080]">Gender <span className='text-[#FF0000]'>*</span></label>
                  <Field as="select" id="gender" name="gender"
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black">
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="text-red-600 text-[14px]" />
                </div>
              </div>

              {/* address */}
              <div className='my-4'>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <Field type="text" id="address" name="address" placeholder="Enter member address"
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
              </div>

              {/* password */}
              <div className='my-4'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password <span className='text-[#FF0000]'>*</span></label>
                <Field type="password" id="password" name="password" placeholder="Enter your password"
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>

              {/* terms */}
              <div className='my-4'>
                <Field type="checkbox" id="terms" name="terms" className="mr-2 rounded border-gray-300 text-black focus:ring-black" />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to all Terms, Privacy policy, and fees
                </label>
                <ErrorMessage name="terms" component="div" className="text-red-600 text-sm" />
              </div>

              {/* submit */}
              <div className='flex flex-col justify-center items-center gap-4'>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[200px] md:w-[350px] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all">
                  {isSubmitting ? 'Submitting...' : 'Sign up'}
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href={`/u/${slug}/login`} className="text-red-500 underline">Log in</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
