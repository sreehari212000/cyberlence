import React from 'react'
import { courses } from '../../data'

const Courses = () => {
  return (
    <div className='p-10'>
        <h1 className='text-2xl mb-3'>Course Details</h1>
        <table>
            <thead>
                <tr className=''>
                    <th className='table-style'>Course ID</th>
                    <th className='table-style'>Course Name</th>
                    <th className='table-style'>Credit Points</th>
                    <th className='table-style'>Student Grade</th>
                    <th className='table-style'>Grade points</th>
                </tr>
            </thead>
            <tbody>
            {courses.map((course)=> (
                <tr key={course.id} className=''>
                    <td className='table-style'>{course.id}</td>
                    <td className='table-style'>{course.name}</td>
                    <td className='table-style'>{course.credits}</td>
                    <td className='table-style'>{course.grade}</td>
                    <td className='table-style'>{course.points}</td>
                </tr>    
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default Courses