import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

// Create a new component that will protect the user routes
const UserProtectionWrapper = ({ children }) => {
    // Get the token from the local storage
    const token = localStorage.getItem('token');
    // Use the navigate hook to navigate to different routes
    const navigate = useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    // Use useEffect to navigate after the component has rendered
    useEffect(() => {
        if (!token) {
            navigate('/user/login');
        }
    }, [token, navigate]); // Add token and navigate to the dependency array

    useEffect(()=> {
        const profile = async () => {
            try {
                const url = 'http://localhost:4000/user/profile';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                const result = await response.json();
                if(response.ok) {
                    navigate('/home');
                    setCaptain(result);
                    setIsLoading(false);
                } else {
                    console.error('Error during profile fetch:', result);
                    navigate('/user/login');
                }
            } catch(error) {
                navigate('/user/login');
            }
        }
        profile();
    }, [navigate,token,setCaptain]);

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    // Render the children if the user is authenticated
    return <div>{children}</div>;
};

export default UserProtectionWrapper;
