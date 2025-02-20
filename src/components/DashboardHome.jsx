import React from 'react'
import DashBoardWidget from './DashBoardWidjet'

const DashboardHome = () => {
  return (
    <div className='grid grid-cols-3 gap-2 p-2'>
        <DashBoardWidget title={"Personal Data"} id={"123"} phoneno={233344545} email={"sample@gmail.com"} name={"Sample"}/> 
        <DashBoardWidget title={"Guardian Data"}  email={"sdsf@gmail.com"} phoneno={24345432} alternateemail={"ssdsds@gddsf.com"} address={"sdsdfsdds dsfdsfsf"}/> 
        <DashBoardWidget title={"Transfer Data"} />
        <DashBoardWidget title={"Degree Program"} bachelors={"B-Tech"} discipline={"Comp Science"} joinDate={"12-07-2024"}/>
        <DashBoardWidget title={"Admin Notification"} feesPayment={"Hostel fee"} lastDate={"23-02-2025"} uploadCertificates={"Completed"} pendingStatus={"Hostel fees"}/>
    </div>
  )
}

export default DashboardHome