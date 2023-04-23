import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  
  return (
  
      <div className="App">

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
       
      </div>
  )
}

export default App
