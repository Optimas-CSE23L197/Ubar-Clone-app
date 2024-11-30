import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectionWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        if(!token) {
            navigate('/captain/login');
        }
    }, [token, navigate]);

    useEffect(() => {
        const profile = async () => {
            try {
                const url = 'http://localhost:4000/captain/profile';
                const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const result = await response.json();
            if(response.ok) {
                console.log('Profile fetch result:', result);
                setCaptain(result);
                setIsLoading(false);
            } else {
                console.error('Error during profile fetch:', result);
                navigate('/captain/login');
            }
            } catch(error) {
                navigate('/captain/login');
            }
        }
        profile();
    }, [token, navigate, setCaptain]);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectionWrapper