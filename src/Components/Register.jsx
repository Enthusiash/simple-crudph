import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

import '../Style/Register.css'

const Register = (props) => {
    const [ position, setPosition ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ username, setUsername ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(position);
    }

    return (
        <div className="auth-form-container1">
            <h2>REGISTER</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <div className="input-div">
                    <label htmlFor="name">Full Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
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
                    <label>Position:</label>
                    <select value={position} onChange={(e) => setPosition(e.target.value)} id="position" name="position">
                        <option value="" disabled>Select Position</option>
                        <option value="web">Web Developer</option>
                        <option value="ui">UI/UX Designer</option>
                        <option value="qa">QA Tester</option>
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
                    <label htmlFor="password">Confirm Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" name="password" />
                </div>

                <button type="submit">Submit</button>
            </form>
            <span className="link-button1">Already have an account?<Link className="link" to="/login"> Login here.</Link></span>
        </div>
    )
}
export default Register