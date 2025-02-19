import React from 'react'
import PersonalData from './PersonalData'
import GuardianData from './GuardianData'
import TransferData from './TransferData'
import DegreeProgram from './DegreeProgram'
import AdminNotification from './AdminNotification'

const DashboardHome = () => {
  return (
    <div className='grid grid-cols-3'>
      <PersonalData /> 
      <GuardianData /> 
      <TransferData />
      <DegreeProgram />
      <AdminNotification />
    </div>
  )
}

export default DashboardHome