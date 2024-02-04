import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, TextInput,Button, NavbarToggle,Dropdown, Avatar} from 'flowbite-react'
import { AiOutlineSearch} from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';
import { themeHandler } from '../redux/theme/themeSlice';
import { signOutSuccess } from '../redux/user/userSlice';


function Header() {
  const dispatch=useDispatch()

  const clickHandler= ()=>{
    dispatch(themeHandler())
  };

  const handleSignout= async()=>{
    try {
      const res=await fetch("http://localhost:8000/api/auth/signout",{
        method:"POST"
      })
      const data = await res.json();
      if(!res.ok){
        console.log("cannot signout user")
      }
      else{
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log("cannot sign out user")
    }
  }

  const {currentUser} =useSelector((state)=>(state.user))
  const {theme}=useSelector((state)=>(state.theme))
  return (
    <Navbar className='h-full w-full border flex'>
      <Link to="/" className='text-sm sm:text-2xl font-semibold whitespace-nowrap dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-violet-600 via-green-400 to-cyan-600 rounded-md text-white'>Blog</span>
        Space
      </Link>
      <form>
        <TextInput
        type='text'
        placeholder='Search'
        rightIcon={AiOutlineSearch}
        className='hidden sm:inline'
        />
      </form>
      <Button className='sm:hidden' color='gray'>
      <AiOutlineSearch/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='sm:inline' color='gray' onClick={()=>clickHandler()}>
          {
            theme==='light'?<FaMoon/>:<FaSun/>
          }
        </Button>
        {
            currentUser?(
              <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                alt='user'
                img={currentUser.profilePicture}
                rounded
                />
              }
              >
                <Dropdown.Header>

                  <span className='block text-sm font-medium'>{currentUser.username}</span>
                  <span className='block text-sm font-medium'>{currentUser.email}</span>
                  
                </Dropdown.Header>
                <Link to='/dashboard?tab=profile'>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                
                  <Dropdown.Item onClick={handleSignout}>SignOut</Dropdown.Item>
                  
              </Dropdown>
            ):(

              <Link to='/signin'>
              <Button gradientDuoTone="purpleToBlue">SignIn
              </Button>
              </Link>
            )
          }
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={'div'}>
        <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'} >
        <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'}>
        <Link to='/about'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    
    </Navbar>
  )
}

export default Header