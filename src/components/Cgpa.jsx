import React from 'react'
import { courses } from '../../data' 

const Cgpa = () => {

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const totalGradePoints = courses.reduce((sum, course) => sum + (course.credits * course.points), 0);

    const cgpa = totalGradePoints / totalCredits;

  return (
    <div className='p-5 rounded-md shadow-md shadow-black w-fit m-4 bg-gray-900'>
        <h1 className='text-4xl'>CGPA</h1>
        <div className=''>
            <p className='text-lg'>You have scored a CGPA of <span>{cgpa.toFixed(2)}</span> in this semester</p>
        </div>
    </div>
  )
}

export default Cgpa