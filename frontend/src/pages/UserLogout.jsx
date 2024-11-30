import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const navigate = useNavigate();

    // Use useEffect to run the logout logic
    useEffect(() => {
        // Define an async function to log the user out
        const logout = async () => {
            // Get the token from local storage
            const token = localStorage.getItem('token');
            // If the token exists, send a GET request to the API
            if (token) {
                const url = 'http://localhost:4000/user/logout';
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        localStorage.removeItem('token');
                        navigate('/user/login'); // Redirect to login page
                    } else {
                        // Handle any non-OK responses here (optional)
                        console.error('Logout failed');
                    }
                } catch (error) {
                    console.error('Error during logout:', error);
                }
            } else {
                navigate('/user/login'); // No token found, redirect to login
            }
        };
        // Call the logout function
        logout();
    }, [navigate]); // Only runs once, on component mount

    return (
        <div>Logging out...</div>
    );
}

export default UserLogout;
