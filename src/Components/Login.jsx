import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'

import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

// SWEETALERT2   //
import Swal from "sweetalert2";

import Modal from '../Components/Modal'

import http from '../Utils/http'

import '../Style/Login.css'

const Login = ({admin}) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (admin) {
            navigate(-1);
        }
    }, [admin])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // SWEETALERT2 FUNCTION //
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#FFAC30",
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const handleToggle = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async(e) =>  {
        e.preventDefault();
        await http.post("/auth", {
            username,
            password
        })
        .then ( (res) => {
            Toast.fire({
                icon: 'success',
                title: 'Login Successfully!'
            })
            .then ( () => {
            localStorage.setItem("token", res.data)
            window.location.href = "/dashboard"})
        })
        .catch ( (err) => {
            alert(err.response.data);
        })
    }

    return (
        <div className="auth-form-container">
            <h2>LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>

                <div className="input-div">
                    <label htmlFor="username">Username:</label>
                    <input value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    placeholder="Username"
                    id="username"
                    name="username"
                    required />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Password:</label>
                        <div className="password-input">
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="********"
                        name="password"
                        required />
                        {showPassword ? 
                        <span onClick={handleToggle} className="hello-test"><AiFillEye className="password-toggle" /></span>
                            : 
                        <span onClick={handleToggle} className="hello-test"><AiFillEyeInvisible className="password-toggle"  /></span>
                        }
                        </div> 
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
            <span className="link-button">Don't have an account?<Link className="link" to="/register"> Register here.</Link></span>
            <>
                <Modal />
            </>
        </div>
    )
}
export default Login