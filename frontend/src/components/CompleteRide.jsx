import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CompleteRide() {
    const navigate = useNavigate();
  const [rideStatus, setRideStatus] = useState("Ongoing");

  const handleCompleteRide = () => {
    setRideStatus("Completed");
    setTimeout(() => {
        navigate("/captain/home");
    }, 5000);
    // Additional logic to handle ride completion can be added here
  };

  return (
    <div className="h-screen w-full bg-gray-100 relative flex flex-col">
      {/* Header */}
      <div className="w-full bg-blue-600 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Live Ride Tracking</h1>
      </div>

      {/* Map Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-300">
        <p className="text-gray-600 text-xl">Live Map will be displayed here</p>
      </div>

      {/* Footer Section */}
      <div className="bg-yellow-400 absolute bottom-0 w-full h-20 flex items-center justify-center">
        {rideStatus === "Ongoing" ? (
          <button
            onClick={handleCompleteRide}
            className="bg-green-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-green-600 transition"
          >
            Finish Ride
          </button>
        ) : (
          <h1 className="text-2xl font-bold text-green-700">Ride Completed</h1>
        )}
      </div>
    </div>
  );
}

export default CompleteRide;
