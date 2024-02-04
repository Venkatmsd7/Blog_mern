import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Dashsidebar from '../components/Dashsidebar';
import DashProfile from '../components/DashProfile';

function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState('');
  useEffect(()=>{
  const  queryParams = new URLSearchParams(location.search)
  const tab=queryParams.get('tab')
  if(tab) (setTab(tab))
},
  [location.search]
)
  
  
  return (
    <div className='h-screen flex flex-col md:flex-row'>
      <Dashsidebar tab='profile'/>
      <DashProfile/>
    </div>
  )
}

export default Dashboard

