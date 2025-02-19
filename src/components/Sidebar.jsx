import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [sidebaroptions, setSidebaroptions] = useState([{id:1, title:'Dashboard'}, {id:2, title:'courses'}, {id:3, title:'cgpa'}, {id:4, title:'assignment'}])
  return (
    <div className='col-span-1 border-t items-center'>
        {sidebaroptions.map((option)=><Link key={option.id} to={option.title === 'Dashboard' ? '/' : `${option.title}`}><p className='border-b border-r w-full text-center py-4'>{option.title}</p> </Link>)}
    </div>
  )
}

export default Sidebar