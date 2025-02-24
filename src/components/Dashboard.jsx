import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='border h-full'>
        <Navbar />
        <div className='flex h-[92%] bg-white'>
            <Sidebar />
            <div className='flex-[7] bg-gray-100'><Outlet /></div>
        </div>
    </div>
  )
}

export default Dashboard