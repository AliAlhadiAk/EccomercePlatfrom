import React from 'react';

const SignUp = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100 login'>
      <div className='bg-white p-8 rounded-lg shadow-md w-[50vw]'>
        <h1 className='text-3xl font-bold mb-6'>Sign Up</h1>
        <form className='flex flex-col gap-4 '>
        
          <input
            type='text'
            id='username'
            name='username'
            required
            placeholder='Enter your username'
            className='border border-gray-300 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-blue-500'
          />
         
          <input
            type='email'
            id='email'
            name='email'
            required
            placeholder='Enter your email'
            className='border border-gray-300 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-blue-500'
          />
        
          <input
            type='password'
            id='password'
            name='password'
            required
            placeholder='Enter your password'
            className='border border-gray-300 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
