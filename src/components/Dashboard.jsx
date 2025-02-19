import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='grid grid-cols-10'>
            <Sidebar />
            <div className=' col-span-9'><Outlet /></div>
        </div>
    </div>
  )
}

export default Dashboard