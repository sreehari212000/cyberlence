import React from 'react'

const AssignmentTable = ({data}) => {
  return (
    <table className='border mt-10 w-[60%]'>
        <thead>
            <tr>
                <th className='table-style'>Course ID</th>
                <th className='table-style'>Assignment ID</th>
                <th className='table-style'>Title</th>
                <th className='table-style'>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.length > 0 ? (
                data.map((item)=>(
                    <tr key={item.id} className='text-center'>
                        <td className='table-style'>{item.courseId}</td>
                        <td className='table-style'>{item.assignmentId}</td>
                        <td className='table-style'>{item.title}</td>
                        <td className='table-style'>{item.status}</td>
                    </tr>
                ))
            ): (
                <tr>
                    <td colSpan={4} className='p-3 text-center'>Assignment Not found!</td>
                </tr>
            )}
        </tbody>
    </table>
  )
}

export default AssignmentTable