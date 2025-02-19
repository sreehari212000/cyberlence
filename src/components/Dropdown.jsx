import React from 'react'
import Avatar from './Avatar'

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=""><Avatar /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Change Password</a></li>
            <li><a>Edit Profile</a></li>
            <li><a>Logout</a></li>
        </ul>
    </div>
  )
}

export default Dropdown