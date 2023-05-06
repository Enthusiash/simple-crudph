import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'


import http from '../Utils/http';

import '../Style/Register.css'

const Register = ({admin}) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate(-1);
        }
    }, [admin])

    const [ position, setPosition ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ username, setUsername ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmpassword){
            await http.post("/users/register", {
                fullname: name,
                gender,
                position,
                username,
                password
                })
                .then ((res) => {
                    alert("Registration Successful!")
                    // console.log(res);
                localStorage.setItem("token", res.data);
                window.location = '/login';
                })
                .catch ((err) => {
                    console.log(err);
                })
        }
        else {
            alert("Please Confirm Password!");
        }
        // console.log(name);
    
    }

    return (
        <div style={{ width: "30%" }} className="auth-form-container1">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <div className="input-div">
                    <label htmlFor="name">Full Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
                </div>

                <div style={{ width: "50%", display: "flex", flexDirection: "column", margin: "20px 0 0 0", color: "white" }} className="rdbtn">
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

                <div style={{ width: "50%", display: "flex", justifyContent: "start"}} className="input-div">
                    <label>Position:</label>
                    <select style={{ fontSize: "18px", width: "100%" }} value={position} onChange={(e) => setPosition(e.target.value)} id="position" name="position">
                        <option value="" disabled>Select Position</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="QA Tester">QA Tester</option>
                    </select>
                </div>

                <div className="input-div">
                    <label htmlFor="username">Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" name="username" />
                </div>

                <div className="input-div">
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" />
                </div>

                <div className="input-div">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="********" name="password" />
                </div>

                <button style={{ margin: "50px 0 0 0"}} type="submit">Submit</button>
            </form>
            <span className="link-button1">Already have an account?<Link className="link" to="/login"> Login here.</Link></span>
        </div>
    )
}
export default Register