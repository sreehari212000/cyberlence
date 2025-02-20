import React, { useState } from 'react'
import Filters from './Filters';
import AssignmentTable from './AssignmentTable';

const assignmentsData = [
  {id:1, courseId: "CS101", assignmentId: "A1", title: "React Basics", status: "complete" },
  {id:2, courseId: "CS101", assignmentId: "A2", title: "Hooks & State", status: "inprogress" },
  {id:3, courseId: "CS102", assignmentId: "A1", title: "JavaScript Fundamentals", status: "pending" },
  {id:4, courseId: "CS103", assignmentId: "A3", title: "Algorithms", status: "complete" },
  {id:5, courseId: "CS104", assignmentId: "A2", title: "Database Design", status: "inprogress" },
];

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