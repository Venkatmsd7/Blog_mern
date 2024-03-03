import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import {HiArrowSmRight, HiDocument, HiUser} from 'react-icons/hi';

import React from 'react'
import { Link } from 'react-router-dom';

function Dashsidebar({tab}) {
  return (
    <div>
        <Sidebar className='w-full md:w-56'>
            <SidebarItems>
                <SidebarItemGroup>
                    <Link to='/dashboard?tab=profile'>
                    <SidebarItem  active={tab==='profile'} icon={HiUser} label={'User'} className='cursor-pointer' as="div">
                        Profile
                    </SidebarItem>
                    </Link>
                    <Link to='/dashboard?tab=posts'>
                    <SidebarItem  active={tab==='posts'} icon={HiDocument} label={'Posts'} className='cursor-pointer' as="div">
                        Posts
                    </SidebarItem>
                    </Link>
                    
                    <SidebarItem  active={tab==='signout'} icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    </div>
  )
}

export default Dashsidebar