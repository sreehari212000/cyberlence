import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [sidebaroptions, setSidebaroptions] = useState([{id:1, title:'Dashboard'}, {id:2, title:'courses'}, {id:3, title:'cgpa'}, {id:4, title:'Assignment'}])
  return (
    <div className='flex-1 shadow-md shadow-black rounded-sm'>
        {sidebaroptions.map((option)=><NavLink key={option.id} to={option.title === 'Dashboard' ? '/' : `${option.title}`}><p className=' border-b  rounded-md w-full text-center py-4'>{option.title}</p> </NavLink>)}
    </div>
  )
}

export default Sidebar