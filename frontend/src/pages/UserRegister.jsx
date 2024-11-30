import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

function UserRegister() {
    const navigate = useNavigate(); // Use the useNavigate hook to navigate to other pages
    // State variables to store form data
    const {user, setUser} = useContext(userDataContext); // Get the user data from the context
    const [userregisterInfo, setUserregisterInfo] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: ''
    })

    // Function to handle form submission
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevents the form from refreshing the page on submit

        const {fullname,email,password} = userregisterInfo; // Destructure the userregisterInfo object
        const {firstname,lastname} = fullname; // Destructure the fullname object

        // Create a new user object
       const newUSer = {
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password
       }

       // Send a POST request to the API
        try {
            const url = 'http://localhost:4000/user/register'; // URL of the API
            // Send a POST request to the API
            const response = await fetch(url, {
                method: 'POST', // Send a POST request
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(newUSer) // The data is a JSON string
            })

            const result = await response.json(); // Convert the response to JSON
            if(response.ok) {
                setUser(result); // Set the user data in the context
                navigate('/home'); // Navigate to the home page
                localStorage.setItem('token', result.token); // Store the token in local storage
            }
        } catch (error) {
            console.error(error); // Log the error
        }
    };

    const handleChanges = (e) => {
        const {name,value} = e.target;
        const copyUserRegisterInfo = {...userregisterInfo};

        //check if the name includes firstname or lastname[name from input tag]
        if(name.includes('firstname') || name.includes('lastname')) {
            //split the name by '.' and get the first and second part
            const [filed, subfiled] = name.split('.');
            //update the copyUserRegisterInfo object
            copyUserRegisterInfo[filed][subfiled] = value
        } else {
            //update the copyUserRegisterInfo object
            copyUserRegisterInfo[name] = value;
        }
        //update the userregisterInfo object
        setUserregisterInfo(copyUserRegisterInfo);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">User Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
                {/* First Name Input */}
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        name='fullname.firstname'
                        onChange={handleChanges}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your first name"
                    />
                </div>

                {/* Last Name Input */}
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name='fullname.lastname'
                        onChange={handleChanges}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your last name"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        onChange={handleChanges}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        onChange={handleChanges}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserRegister;
