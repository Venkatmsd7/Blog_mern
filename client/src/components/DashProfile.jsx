import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function DashProfile() {
    const {currentUser}=useSelector((state)=>state.user)
    const [image,setImage]=useState(null);
    const [formData,setformData]=useState({});
    const [error,setError]= useState(null);
    const imageform=new FormData()

    const handleChange=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value.trim()})
    }
    const handleImage=async (e)=>{
    
    setImage(e.target.files[0])
    
      imageform.append("file",image)
      imageform.append("upload_preset","asdfgh")
    
    const res= await fetch('https://api.cloudinary.com/v1_1/drfpoh9qt/image/upload',{
      method: 'POST',
      body: imageform
    })
    
    console.log(imageform);
    console.log(res);
    }
    const handleSubmit= async (e)=>{
      e.preventDefault();
      
      try {
        const res = await fetch("http://localhost:8000/api/user/update",{
        method:"POST",
        headers:{'Content-Type':'applicatrion/json'},
        body: JSON.stringify(formData)
        })
      } catch (error) {
        setError(`Error while updating the user ${error}`)
      }
    }

  return (
    <div className='max-w-lg mx-auto '>
        <h1 className='text-center text-3xl mb-20 font-semibold'>Profile</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input type="file" name='file' accept='image/*' id='file' onChange={handleImage}/>
            <div className='w-32 h-32 self-center mb-10'>
            <img src={currentUser.profilePicture} alt="user" className='rounded-full object-cover border-8 border-gray-400' />
            </div>
            {
              error && <Alert color='failure'>{error}</Alert>
            }
            <TextInput
            type='text'
            placeholder='Username'
            id='username'
            onChange={handleChange}
            />
            <TextInput
            type='email'
            placeholder='Email'
            id='email'
            onChange={handleChange}
            />
            <TextInput
            type='password'
            placeholder='Password'
            id='password'
            onChange={handleChange}
            />
            <Button gradientDuoTone='purpleToBlue' type='submit'>Update</Button>
            <div className='text-red-600 flex justify-center'>
                <span className='mr-3 text-sm'>Delete account</span>
                <span className='text-sm '>Sign Out</span>
            </div>
        </form>
    </div>
  )
}

export default DashProfile