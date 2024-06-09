import React from 'react'
import { useState, useEffect } from 'react';
import {BASE_URL} from './url';

const UserProfile = () => {
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
    }, []); // Empty dependency array ensures useEffect runs only once after component mounts

    return (
        <div>
            {userDetails ? (
                <div>
                    <h2>User Profile</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>To see you details please login </p>
            )}
        </div>
    );
}

export default UserProfile;
