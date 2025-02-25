import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Courses from './pages/Courses'
import Cgpa from './pages/Cgpa'
import Assignment from './pages/Assignment'
import DashboardHome from './pages/DashboardHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-medium h-screen'>
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route  path='/home' element={<Dashboard />}>
				<Route index element={<DashboardHome />}/>
				<Route path='courses' element={<Courses />}/>
				<Route path='cgpa' element={<Cgpa />}/>
				<Route path='assignment' element={<Assignment />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App
