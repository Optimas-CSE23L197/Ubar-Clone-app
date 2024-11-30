import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function CaptainLogout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token');
      if(token) {
        try {
          const url = 'http://localhost:4000/captain/logout';
          const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if(response.ok) {
          localStorage.removeItem('token');
          navigate('/captain/login');
        } else  {
          console.error('Logout failed');
        }
        } catch(error) {
          console.error('Error during logout:', error);
        }
      } else {
        navigate('/captain/login');
      }
    }
    logout();
  }, [navigate]);

  return (
    <div>Logging out</div>
  )
}

export default CaptainLogout