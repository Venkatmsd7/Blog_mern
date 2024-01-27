import React from 'react';
import { Link } from 'react-router-dom';
import { Label,Button,Alert,TextInput } from 'flowbite-react';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>

      <div className='mr-40'>
      <Link to="/" className='text-4xl font-bold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-violet-600 via-green-400 to-cyan-600 rounded-md text-white'>Blog</span>
        Space
      </Link>
      <p className='max-w-60 font-semibold  text-2xl mt-5'>
        Welcome to the world of Blogs!
      </p>
      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-5'>
          <div>
        <Label value='Username'/>
        <TextInput type='text' placeholder='Username' id='username'/>
        </div>
          <div>
        <Label value='Email'/>
        <TextInput type='email' placeholder='abcd@example.com' id='email'/>
        </div>
          <div>
        <Label value='Password'/>
        <TextInput type='text' placeholder='Password' id='password'/>
        </div>
        <Button gradientDuoTone='purpleToBlue' type='submit'>
          Signup
        </Button>
        </form>
        <div className='mt-4'>
          <span>Have an account? </span>
          <Link to='/signin' className='font-semibold text-blue-600'>
          Signin
          </Link>
        </div>

      </div>
    </div>
    </div>
  )
}

export default SignUp