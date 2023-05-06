import { Routes, Route } from 'react-router-dom'

import './App.css'

import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import AddEmployee from './Components/AddEmployee'
import ManageEmployee from './Components/ManageEmployee'

import About from './Components/About'

function App() {
  
  return (
  
      <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/employee/add' element={<AddEmployee />} />
            <Route path='/employee/manage' element={<ManageEmployee />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </div>
  )
}

export default App