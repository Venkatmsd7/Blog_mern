import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
function OAuth() {
    const auth=getAuth(app);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleGoogleClick=async ()=>{
        const provider=new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        try {
            const result = await signInWithPopup(auth, provider);
            try {
                const res= await fetch('/api/auth/google',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({
                        name:result.user.displayName,
                        email:result.user.email,
                        photoUrl:result.user.photoURL

                    })
                })
                const data=res.json()
                if (res.ok){
                    dispatch(signInSuccess(data))
                    navigate('/')
                }
            } catch (error) {
                
            }
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <Button type='button' className=' bg-gradient-to-r from-lime-600 via-emerald-500 to-sky-700' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='mr-2 h-6 w-8'/>
        Continue with Google
    </Button>
  )
}

export default OAuth