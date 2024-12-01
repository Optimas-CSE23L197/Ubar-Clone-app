import React from "react";
import { MdAddCall, MdCancel } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function BookingConfirmCaptain() {
    const navigate = useNavigate();
    const handlePickup = () => {
        navigate("/captain/complete/ride");
    }
  return (
    <div className="h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="w-full flex justify-center p-4 bg-blue-600">
        <h1 className="text-2xl font-bold text-white">Booking #78E43</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-lg mx-4 mt-6 overflow-hidden">
        {/* User Details */}
        <div className="user flex items-center justify-between p-6 bg-gray-50 border-b">
          <div className="flex items-center space-x-4">
            <img
              className="h-16 w-16 rounded-full object-cover shadow-md"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="User"
            />
            <div>
              <h2 className="text-xl font-semibold">Animesh Karan</h2>
              <p className="text-gray-500 text-sm">Passenger</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-bold text-green-600">$120.34</h3>
            <p className="text-gray-500 text-sm">2.7 km</p>
          </div>
        </div>

        {/* Pickup and Dropoff Details */}
        <div className="pickup px-6 py-4 border-b">
          <span className="text-sm text-gray-400">PICK UP</span>
          <h1 className="text-xl font-semibold mt-1 text-gray-800">
            0112, Narayan Pakuria
          </h1>
        </div>
        <div className="dropoff px-6 py-4 border-b">
          <span className="text-sm text-gray-400">DROP OFF</span>
          <h1 className="text-xl font-semibold mt-1 text-gray-800">
            Panskura Railway Station
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-evenly py-6 bg-gray-50">
          <button
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-green-500 text-white hover:bg-green-600 shadow-md transition duration-300"
            title="Call"
          >
            <MdAddCall className="text-3xl" />
            <span className="text-xs mt-1">Call</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-md transition duration-300"
            title="Message"
          >
            <AiFillMessage className="text-3xl" />
            <span className="text-xs mt-1">Message</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-red-500 text-white hover:bg-red-600 shadow-md transition duration-300"
            title="Cancel"
          >
            <MdCancel className="text-3xl" />
            <span className="text-xs mt-1">Cancel</span>
          </button>
        </div>

        {/* Go to Pickup Button */}
        <div className="p-6">
          <button 
            onClick={handlePickup}
            className="w-full py-4 bg-yellow-400 text-white font-semibold text-lg rounded-3xl hover:bg-yellow-500 shadow-md transition duration-300">
            GO TO PICK UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmCaptain;
