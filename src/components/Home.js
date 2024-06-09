import React, { useState, useEffect } from 'react';
import Notes from './Notes';
import "./login.css"
import myImage from '../img/homeimg.jpg'; 


export const Home = () => {
    // Initialize loggedIn state with localStorage value or false if not set
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedIn(false); // Update loggedIn state to false
    };

    useEffect(() => {
        // Check if token exists in localStorage on component mount
        const token = localStorage.getItem('token');
        setLoggedIn(!!token); // Update loggedIn state based on token existence
    }, []);

    return (
        <div className='home'>
            {loggedIn ? (
                <div>
                 
                    <Notes />
                </div>
            ) : (
                <div>
                  <div className="image-container">
                   <img src={myImage} className="centered-image" alt="notes img" />
                      </div>
                    <h2 className='home-p'>Customized you personal notes. Lets get started !</h2>
                    <h5 className='home-p'>We're excited about the journey ahead and invite you to be a part of it. Explore our platform, unleash your creativity, and embark on a transformative note-taking experience with Inotebook</h5>
                    <h4 className='home-p'>Log in NOW!!!</h4>
                </div>
            )}
        </div>
    );
}

export default Home;


  