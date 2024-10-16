import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Dashsidebar from '../components/Dashsidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';

function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState('');
  useEffect(()=>{
  const  queryParams = new URLSearchParams(location.search)
  const urltab=queryParams.get('tab')
  if(urltab) (setTab(urltab))
},
  [location.search]
)
  
  
  return (
    <div className='flex flex-col md:flex-row '>
      <Dashsidebar tab={tab}/>
      {tab=='profile' && <DashProfile/>}
      {tab=='posts' && <DashPosts/>}
      
    </div>
  )
}

export default Dashboard

