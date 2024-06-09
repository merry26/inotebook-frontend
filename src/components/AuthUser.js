import { useState } from 'react';
import {BASE_URL} from './url';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const handleLogin = async (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
    // Fetch user details from API to get the user's name
    try {
      const response = await fetch(`${BASE_URL}/auth/getuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        } 
      });
      const data = await response.json();
      setUserName(data.name); // Set the user's name from the API response
      localStorage.setItem('userName', data.name);
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error if needed
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setLoggedIn(false);
    setUserName('');
    window.location.reload();
  };

  return { loggedIn, userName, handleLogin, handleLogout };
};
