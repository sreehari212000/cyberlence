import React, { useState } from 'react'

const Filters = ({assignmentIdFilter, setAssignmentIdFilter, courseIdFilter, setCourseIdFilter, statusFilter, setStatusFilter}) => {
  return (
    <div className=''>
        <h1 className=''>Filters :</h1>
        <div className='flex gap-5 text-white'>
            <div>
                <label className='text-black'>
                    Assignment Id :
                    <select className='py-2 px-3 rounded-md text-black' onChange={(e)=>setAssignmentIdFilter(e.target.value)} value={assignmentIdFilter}>
                        <option value="All">All</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                    </select>
                </label>
            </div>

            <div>
                <label className='text-black'>
                    Course Id :
                    <select className='py-2 px-3 text-black rounded-md' onChange={(e)=>setCourseIdFilter(e.target.value)} value={courseIdFilter}>
                        <option value="All">All</option>
                        <option value="CS101">CS101</option>
                        <option value="CS102">CS102</option>
                        <option value="CS103">CS103</option>
                        <option value="CS104">CS104</option>
                    </select>
                </label>
            </div>
            <div>
                <label className='text-black'>
                    Status :
                    <select className='py-2 px-3 text-black rounded-md' onChange={e => setStatusFilter(e.target.value)} value={statusFilter}>
                        <option value="All">All</option>
                        <option value="complete">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="inprogress">In Progress</option>
                    </select>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Filters