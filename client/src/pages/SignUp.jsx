import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Label,Button,Alert,TextInput,Spinner } from 'flowbite-react';
import OAuth from '../components/OAuth';


function SignUp() {
  const [formData,setformData]=useState({});
  const [errorMsg,seterrorMsg]=useState(null);
  const [loading,setloading]=useState(null);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!formData.username||!formData.email||!formData.password){
      return seterrorMsg("Please fill all the details!!");
    }
    
    try {
      const res= await fetch('http://localhost:8000/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      })
      const data=await res.json();
      if (data.success === false) {
        return seterrorMsg(data.message);
      }
      setloading(false);
      if(res.ok) {
        navigate('/signin');
      }

    } catch (error) {
      
    }

  }
  
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
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <div>
        <Label value='Username'/>
        <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
        </div>
          <div>
        <Label value='Email'/>
        <TextInput type='email' placeholder='abcd@example.com' id='email' onChange={handleChange}/>
        </div>
          <div>
        <Label value='Password'/>
        <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
        </div>
        <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading} >
        {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
        </Button>
        <OAuth/>
        </form>
        <div className='mt-4'>
          <span>Have an account? </span>
          <Link to='/signin' className='font-semibold text-blue-600'>
          Signin
          </Link>
        </div>
        {
          
          errorMsg && (
            <Alert color='failure' >
      {errorMsg}
    </Alert>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default SignUp