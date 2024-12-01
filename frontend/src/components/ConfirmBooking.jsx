import React, {useState} from "react";
import LookingForDrivers from "./LookingForDrivers";
import {useNavigate} from "react-router-dom";

function ConfirmBooking() {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(true);
  const [ShowBookingDetails, setShowBookingDetails] = useState(true);

  const handleShowBookingDetails = () => {
    setShowBookingDetails(true);
    navigate("/booking/confirm");
  }

  return (
    <div>
      {isBooking ? (
        <div className="flex flex-col items-center bg-gray-100">
        {/* Header */}
        <div className="relative w-full bg-blue-500 py-4 text-center text-white text-2xl font-bold">
          Booking Confirmed!
        </div>
  
        {/* Confirmation Card */}
        <div className="absolute bottom-0 h-[85%] w-full bg-white p-6 rounded-t-3xl shadow-lg">
          <div className="flex flex-col items-center">
            {/* Car Image */}
            <div className="bg-blue-200 relative h-[200px] w-[300px] rounded-full flex justify-center items-center shadow-lg">
              <img
                className="h-28"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
                alt="Uber Car"
              />
            </div>
  
            {/* Details */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Ride Details
              </h2>
              <p className="text-gray-500 mt-2">
                Your booking for <span className="font-bold">Uber Black</span> is
                <span className="text-green-600"> confirmed!</span>
              </p>
            </div>
  
            {/* User Info */}
            <div className="mt-6 w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Pickup Location:</span>
                <span className="font-bold text-gray-700">123 Main Street</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Drop-off Location:</span>
                <span className="font-bold text-gray-700">456 Elm Street</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Estimated Time:</span>
                <span className="font-bold text-gray-700">15 mins</span>
              </div>
            </div>
  
            {/* Call to Action */}
              <button
              onClick={handleShowBookingDetails}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
              Track Your Ride
            </button>

          </div>
        </div>
      </div>
      ) : (
        <LookingForDrivers />
      )}
    </div>
  );
}

export default ConfirmBooking;
