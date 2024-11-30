import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CaptainDataContext} from '../context/CaptainContext';

const CaptainRegister = () => {
    const navigate = useNavigate();
    
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [captainRegisterInfo, setCaptainRegisterInfo] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            typeVehicle: ''
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyCaptainRegisterInfo = { ...captainRegisterInfo };
        
        if (name.includes('firstname') || name.includes('lastname')) {
            const [filed, subfield] = name.split('.');
            copyCaptainRegisterInfo[filed][subfield] = value;
        } else if (name.includes('color') || name.includes('plate') || name.includes('capacity') || name.includes('typeVehicle')) {
            const [filed, subfield] = name.split('.');
            copyCaptainRegisterInfo[filed][subfield] = value;
        } else {
            copyCaptainRegisterInfo[name] = value;
        }
        
        setCaptainRegisterInfo(copyCaptainRegisterInfo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullname, email, password, vehicle } = captainRegisterInfo;
        const { firstname, lastname } = fullname;
        const { color, plate, capacity, typeVehicle } = vehicle;

        const newCaptain = {
            fullname: { firstname, lastname },
            email,
            password,
            vehicle: { color, plate, capacity, typeVehicle },
        };

        try {
            const response = await fetch('http://localhost:4000/captain/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCaptain),
            });

            const result = await response.json();
            if (response.ok) {
                navigate('/captain/login'); // Redirect to login page after successful registration
                setCaptain(result.captain);
                localStorage.setItem('token', result.token);
            } else {
                console.error('Registration failed:', result.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Captain Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                name="fullname.firstname"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="fullname.lastname"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={captainRegisterInfo.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-700">Vehicle Details</h3>
                        <div className="space-y-6">
                            <div className="flex space-x-4">
                                <div className="w-full">
                                    <label htmlFor="vehicle.color" className="block text-sm font-medium text-gray-700">Color:</label>
                                    <input
                                        type="text"
                                        id="vehicle.color"
                                        name="vehicle.color"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="vehicle.plate" className="block text-sm font-medium text-gray-700">Plate:</label>
                                    <input
                                        type="text"
                                        id="vehicle.plate"
                                        name="vehicle.plate"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-full">
                                    <label htmlFor="vehicle.capacity" className="block text-sm font-medium text-gray-700">Capacity:</label>
                                    <input
                                        type="number"
                                        id="vehicle.capacity"
                                        name="vehicle.capacity"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="vehicle.typeVehicle" className="block text-sm font-medium text-gray-700">Type of Vehicle:</label>
                                    <select
                                        id="vehicle.typeVehicle"
                                        name="vehicle.typeVehicle"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="#">Select</option>
                                        <option value="car">Car</option>
                                        <option value="motorcycle">Motorcycle</option>
                                        <option value="auto">Auto</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CaptainRegister;
