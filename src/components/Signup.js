import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
// import {BASE_URL} from './url';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:""});
    const [passwordError, setPasswordError] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.password !== credentials.cpassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        const { name, email, password } = credentials;

        const response = await fetch('http://localhost:5000/auth/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            window.location.reload();
        } else {
            alert("Email already exists");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setPasswordError(""); // Reset password error when input changes
    };

    return (
        <>
            <div className='signup border-primary'>
                <form className="px-4 py-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h1 className="card-title">Sign up</h1>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm Password" minLength={5} required />
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    <h5 className="card-text">Already have an account? <Link to="/login">Log In</Link></h5>
                </form>
            </div>
        </>
    );
}

export default Signup;
