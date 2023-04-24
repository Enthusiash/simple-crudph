import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Login from './Components/Login'
import Register from './Components/Register'
import SampleSidebar from './Components/SampleSidebar'

function App() {
  
  return (
  
      <div className="App">
          <SampleSidebar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
       
      </div>
  )
}

export default App
