import React from 'react'
import { IoClose } from "react-icons/io5";


const DashBoardWidget = ({removeWidget , id, title, name, item, phoneno, email, alternateemail, address, bachelors, discipline, joinDate, feesPayment, lastDate, uploadCertificates, pendingStatus}) => {
  return (
    <div className='p-4 flex bg-white flex-col gap-2 shadow-md rounded-md shadow-black'>
        <div className='flex justify-between'>
            <h1 className='text-2xl font-medium'>{title}</h1>
            <IoClose  className='cursor-pointer' onClick={()=> removeWidget(item.id)}/>
        </div>
        {name && <p>Name: <span>{name}</span></p>}
        {title === 'Personal Data' && <p>Id: <span>{id}</span></p> }
        {email && <p>Email: <span>{email}</span></p>}
        {phoneno && <p>Phone No: <span>{phoneno}</span></p>}
        {alternateemail && <p>Alternate Email: <span>{alternateemail}</span></p>}
        {address && <p>Addresss: <span>{address}</span></p>}
        {bachelors && <p>Bachelors: <span>{bachelors}</span></p>}
        {discipline && <p>Discipline: <span>{discipline}</span></p>}
        {joinDate && <p>Join Date: <span>{joinDate}</span></p>}
        {feesPayment && <p>Fees Payment: <span>{feesPayment}</span></p>}
        {lastDate && <p>Last Date: <span>{lastDate}</span></p> }
        {uploadCertificates && <p>Upload Certificates: <span>{uploadCertificates}</span></p> }
        {pendingStatus && <p>Pending Status: <span>{pendingStatus}</span></p> }
    </div>
  )
}

export default DashBoardWidget