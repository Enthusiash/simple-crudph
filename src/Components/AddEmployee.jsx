import React, { useState } from 'react'
import SideNav from '../SideNav'
import Box from '@mui/material/Box';

import http from '../Utils/http'

import '../Style/AddEmployee.css'

const AddEmployee = () => {

    const [ position, setPosition ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password != confirmpassword) {
        alert('Password does not match!')
      }
      else {
        http.post('/users/add',
        {
            fullname: name,
            gender,
            email,
            position,
            username,
            password
        })
        .then(() => {
            alert('User added!');
            location.reload();
        })
      }
  }

  return (
    <>
     <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box id='dashboard-contents' component="main" sx={{ flexGrow: 1, p: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="auth-form-container1">
            <h2>Add Employee</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <div className="input-div fname">
                    <label htmlFor="name">Full Name:</label>
                    <input className="holder" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full name" />
                </div>

                <div className="rdbtn">
                    <div>
                        <label htmlFor="gender">Gender:</label>
                    </div>
                    <div className="rdbtnrow">
                        <div>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="input-div">
                    <label htmlFor="email">Email:</label>
                    <input className="holder" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" />
                </div>

                <div className="input-div">
                    <label>Position:</label>
                    <select className="holder" value={position} onChange={(e) => setPosition(e.target.value)} id="position" name="position">
                        <option value="" disabled>Select Position</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="QA Tester">QA Tester</option>
                    </select>
                </div>

                <div className="input-div">
                    <label htmlFor="username">Username:</label>
                    <input className="holder" value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" name="username" />
                </div>

                <div className="input-div">
                    <label htmlFor="password">Password:</label>
                    <input className="holder" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" />
                </div>

                <div className="input-div">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input className="holder" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="********" name="password" />
                </div>

                <button type="submit">Add User</button>
            </form>
        </div>
      </Box>
      </Box>
    </>
  )
}

export default AddEmployee
