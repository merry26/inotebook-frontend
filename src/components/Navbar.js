import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from './AuthUser'; 
import "./login.css"
import myImage from '../img/nav4.png'; 
import { useState, useEffect } from 'react';
import {BASE_URL} from './url';

const Navbar = (props) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${BASE_URL}/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                } 
            })
            .then(response => response.json())
            .then(data => {
                setUserDetails(data); // Save user details to state
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
        }
    }, []);


    const { loggedIn, handleLogout } = useAuth(); 
    let location = useLocation();


    return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="" to="/">
      <img src={myImage} className="navbar-brand" alt="notes img" width="50" height="50" />
    </Link>

    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-1">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className='d-flex'>
                         {userDetails ? (
                            <div>
                                <p className="username">Hey {userDetails.name}</p>
                            </div>
                        ) : (
                            <p className="username">Hey guest </p>
                        )}
                    </form>

                    <form className="d-flex"> 
                        {loggedIn ? (
                            
                            <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
