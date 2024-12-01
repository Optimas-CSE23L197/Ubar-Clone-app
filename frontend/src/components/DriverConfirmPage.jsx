import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { MdHealthAndSafety, MdAddCall, MdAddLocationAlt, MdSend } from "react-icons/md";

function DriverConfirmPage() {
  return (
    <div className="absolute bottom-0 flex flex-col bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-blue-500 py-4 text-center text-white text-2xl font-bold">
        Confirm Ride
      </div>

      {/* Driver and Car Section */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Profile Section */}
        <div className="profil flex items-center gap-4 p-4 bg-white shadow-md">
          <div className="relative h-20 w-20 flex-shrink-0">
            <img
              className="h-20 w-20 rounded-full object-cover border-2 border-gray-300 shadow-md"
              src="https://i.pinimg.com/736x/36/a2/e2/36a2e242bfe3ac039e0618fbaaef7596.jpg"
              alt="driver"
            />
            <img
              className="h-24 w-24 rounded-full absolute top-4 left-4"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
              alt="car"
            />
          </div>
          <div className="carDetails text-gray-700">
            <h1 className="text-xl font-semibold">Animesh</h1>
            <h2 className="text-lg font-bold text-gray-900">WB 03B 3217</h2>
            <p className="text-sm text-gray-500">White Maruti 800</p>
            <span className="text-yellow-500 font-bold">★ 4.9</span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="icon flex justify-around bg-white py-4 shadow-md">
          <div className="flex flex-col items-center">
            <MdHealthAndSafety className="text-blue-700 bg-gray-100 h-16 w-16 p-2 rounded-full" />
            <span className="text-sm font-semibold">Safety</span>
          </div>
          <div className="flex flex-col items-center">
            <MdAddCall className="text-blue-700 bg-gray-100 h-16 w-16 p-2 rounded-full" />
            <span className="text-sm font-semibold">Call Driver</span>
          </div>
          <div className="flex flex-col items-center">
            <MdAddLocationAlt className="text-blue-700 bg-gray-100 h-16 w-16 p-2 rounded-full" />
            <span className="text-sm font-semibold">Send Location</span>
          </div>
        </div>

        {/* Pickup Location */}
        <div className="pickuplocation flex items-center gap-4 px-4 py-2 bg-white shadow-md">
          <ImLocation2 className="text-green-500 text-3xl" />
          <h1 className="font-bold text-lg text-gray-800 leading-tight">
            12A, Green Street, Newtown, Kolkata, West Bengal
          </h1>
        </div>
      </div>

      {/* Message Send Box */}
      <div className="bg-white shadow-md px-4 py-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
          <MdSend className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default DriverConfirmPage;
