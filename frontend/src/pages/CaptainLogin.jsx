import React from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle captain login logic
    console.log("Captain login submitted");
  };

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
