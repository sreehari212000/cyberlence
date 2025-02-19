import React from 'react'

const PersonalData = () => {
  return (
    <div className='border p-4 flex flex-col gap-2'>
        <h1 className='text-2xl font-medium'>Personal Data</h1>
        <p>Name: <span>Sample</span></p>
        <p>Id: <span>132</span></p>
        <p>Phone Number: <span>989878374</span></p>
        <p>Email: <span>sample@gmail.com</span></p>
    </div>
  )
}

export default PersonalData