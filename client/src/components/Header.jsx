import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, TextInput,Button, NavbarToggle} from 'flowbite-react'
import { AiOutlineSearch} from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
function Header() {
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
        <Button className='sm:inline' color='gray'>
          <FaMoon/>
        </Button>
        <Link to='/signin'>
        <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
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