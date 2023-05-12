import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'

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

    const handleSubmit = async(e) =>  {
        e.preventDefault();
        await http.post("/auth", {
            username,
            password
        })
        .then ( (res) => {
            alert("Login Successfully!")
            localStorage.setItem("token", res.data)
            window.location.href = "/dashboard"
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
                    name="username" required />
                </div>
                
                <div className="input-div">
                    <label htmlFor="password">Password:</label>
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={"password"}
                    placeholder="********"
                    name="password" required />
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