import { Routes, Route } from 'react-router-dom'

import jwtDecode from "jwt-decode"
import setAuthToken from './Utils/setAuthToken'

import './App.css'

import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import AddEmployee from './Components/AddEmployee'
import ManageEmployee from './Components/ManageEmployee'
import About from './Components/About'
import PrivateAdmin from './Components/Routing/PrivateAdmin'

let LogAdmin;
if (localStorage.getItem("token")) {
  const jwt = localStorage.getItem("token");
  setAuthToken(jwt);
  LogAdmin = jwtDecode(jwt);
}
  
function App() {

  const admin = LogAdmin 

  return (
  
      <div className="App">
          <Routes>
            <Route path='/' element={<Login admin = {admin} />} />
            <Route path='/login' element={<Login admin = {admin} />} />
            <Route path='/register' element={<Register admin = {admin} />} />
            <Route element={<PrivateAdmin admin = {admin}  />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/employee/add' element={<AddEmployee />} />
              <Route path='/employee/manage' element={<ManageEmployee />} />
              <Route path='/about' element={<About />} />
            </Route>
          </Routes>
      </div>
  )
}

export default App