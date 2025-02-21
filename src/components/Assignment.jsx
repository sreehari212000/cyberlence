import React, { useState } from 'react'
import Filters from './Filters';
import AssignmentTable from './AssignmentTable';
import { assignmentsData } from '../../data';

const Assignment = () => {
    const [assignments, setAssignments] = useState(assignmentsData)
    const [assignmentIdFilter, setAssignmentIdFilter] = useState('All')
    const [courseIdFilter, setCourseIdFilter] = useState('All')
    const [statusFilter, setStatusFilter] = useState("All")

    const filteredData = assignments.filter((assignment)=> {
        // filter based on assignment id
        if(assignmentIdFilter === 'All'){
            return assignment
        }else{
            return assignment.assignmentId === assignmentIdFilter
        }
    }).filter((assignment) => {
        // filter based on course id
        if(courseIdFilter === 'All'){
            return assignment
        }else{
            return assignment.courseId === courseIdFilter
        }
    }).filter((assignment)=>{
        // filter based on status
        if(statusFilter === "All"){
            return assignment
        }else {
            return assignment.status === statusFilter
        }
    })
    
  return (
    <div className='p-10 '>
        <h1 className='text-3xl font-medium mb-6'>Assignments</h1>
        <Filters assignmentIdFilter={assignmentIdFilter} setAssignmentIdFilter={setAssignmentIdFilter} courseIdFilter={courseIdFilter} setCourseIdFilter={setCourseIdFilter} setStatusFilter={setStatusFilter} statusFilter={statusFilter}/>
        <AssignmentTable data={filteredData}/>
    </div>
  )
}

export default Assignment