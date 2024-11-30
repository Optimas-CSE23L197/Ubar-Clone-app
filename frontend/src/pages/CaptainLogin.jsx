import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const {captain,setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const [captainLoginInfo, setCaptainLoginInfo] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    const {email,password} = captainLoginInfo; //Destructure email and password from captainLoginInfo.
    
    try {
      const url = 'http://localhost:4000/captain/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(captainLoginInfo)
      })
      const result = await response.json();
      if(response.ok){
        navigate('/captain/home');
        localStorage.setItem('token', result.token);
        setCaptain(result);
      } else {
        console.log("Error during login",result);
      }
    } catch(error) {
      console.error("Error during login",error);
    }
  };

  const handleChange = (e) => {
    const {name,value} = e.target; // Destructure name and value from the input field. Desctructuring is a way to extract multiple values from data stored in objects and arrays.
    const copyCaptainLoginInfo = {...captainLoginInfo}; //{...captainLoginInfo} is a way to create a new object with the same properties as captainLoginInfo. This is done to avoid directly mutating the state.
    copyCaptainLoginInfo[name] = value; //copyCaptainLoginInfo[name] is a way to dynamically set the property of the object. This is done to avoid directly mutating the state.
    setCaptainLoginInfo(copyCaptainLoginInfo); //setCaptainLoginInfo is a function that is used to update the state of captainLoginInfo.
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Captain Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center space-y-2">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </Link>
          <div>
            <Link to="/user/login" className="text-sm text-blue-500 hover:underline">
              User Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
