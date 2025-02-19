import React from 'react'

const Courses = () => {
  const courses = [
    { id: "CS101", name: "Introduction to Programming", credits: 3, grade: "A", points: 4.0 },
    { id: "CS102", name: "Data Structures", credits: 4, grade: "B+", points: 3.5 },
    { id: "CS103", name: "Operating Systems", credits: 3, grade: "A-", points: 3.7 },
    { id: "CS104", name: "Database Management", credits: 3, grade: "B", points: 3.0 },
  ];
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
                <tr className=''>
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