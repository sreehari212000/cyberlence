import React from 'react'
import DropDownAvatar from './Avatar'
import Dropdown from './Dropdown'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
  return (
    <div className=''>
        <div className='pt-3 flex items-center justify-between px-4'>
            <div className='flex gap-20 '>
                <img src="dfd" alt="logo-img" />
                <div className='flex gap-1 ml-10'>
                    <p>Home</p>
                    <p>/</p>
                    <p>{location.pathname.split('/')[2]}</p>
                </div>
            </div>
            <Dropdown />
        </div>
        <p className='text-xl px-12 border-b  w-fit'>MyStudentPortal</p>
    </div>
  )
}

export default Navbar