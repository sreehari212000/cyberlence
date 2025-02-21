import React from 'react'
import { courses } from '../../data' 

const Cgpa = () => {

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const totalGradePoints = courses.reduce((sum, course) => sum + (course.credits * course.points), 0);

    const cgpa = totalGradePoints / totalCredits;

  return (
    <div className='p-3'>
        <h1 className='text-2xl'>CGPA</h1>
        <div>
            <p>You have scored a CGPA of <span>{cgpa.toFixed(2)}</span> in this semester</p>
        </div>
    </div>
  )
}

export default Cgpa