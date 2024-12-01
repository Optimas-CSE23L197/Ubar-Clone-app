import React, { useState } from "react";
import { FaMoneyBillWave, FaSquare, FaMoneyCheckAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { BsChatSquareDots } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function CaptainHome() {
  const navigate = useNavigate();
  const [isBookingAccepted, setIsBookingAccepted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [earnings, setEarnings] = useState(200.50); // Example earnings
  const [rideDetails] = useState({
    passengerName: "Animesh Karan",
    pickupLocation: "123 Main St",
    dropoffLocation: "456 Elm St",
    price: "$20",
  });

  const handleToggle = () => {
    setIsActive((prevState) => {
      const newState = !prevState;
      alert(newState ? "Status is now Active" : "Status is now Inactive");
      return newState;
    });
  };

  const handleAcceptBooking = () => {
    setIsBookingAccepted(true);
  };

  const handleAccept = () => {
    navigate("/booking/confirm/captain");
  }

  const handleDeclineBooking = () => {
    setIsBookingAccepted(false);
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-blue-600 text-white py-4 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
            alt="Driver Logo"
            className="h-10 w-10 rounded-full"
          />
          <h2 className="text-2xl font-bold">Driver Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <MdAccountCircle className="text-3xl" />
          <BsChatSquareDots className="text-3xl" />
        </div>
      </div>

      {/* Booking Section */}
      <div className="flex flex-col items-center p-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">New Booking</h3>
          {!isBookingAccepted ? (
            <>
              <div className="text-lg font-medium text-gray-700 mb-4">
                Pickup: {rideDetails.pickupLocation}
              </div>
              <div className="text-lg font-medium text-gray-700 mb-4">
                Dropoff: {rideDetails.dropoffLocation}
              </div>
              <div className="text-lg font-medium text-gray-700 mb-4">
                Price: {rideDetails.price}
              </div>
              <button
                onClick={handleAcceptBooking}
                className="bg-green-600 py-2 px-4 text-white font-semibold rounded-lg mr-4"
              >
                Details
              </button>
            </>
          ) : (
            <div className="h-[85%] bottom-0 left-0 w-full absolute bg-white">
                {isBookingAccepted && (
                <div className="rideDetails bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Ride Details</h3>
                  <div className="pickup flex items-center gap-2">
                    <ImLocation2 className="text-2xl text-gray-700" />
                    <p className="text-lg text-gray-800">{rideDetails.pickupLocation}</p>
                  </div>
                  <div className="dropoff flex items-center gap-2 mt-2">
                    <FaSquare className="text-2xl text-gray-700" />
                    <p className="text-lg text-gray-800">{rideDetails.dropoffLocation}</p>
                  </div>
                  <div className="fare flex items-center gap-2 mt-2">
                    <FaMoneyCheckAlt className="text-2xl text-gray-700" />
                    <p className="text-lg font-bold text-gray-800">{rideDetails.price}</p>
                  </div>
                      <button
                        onClick={handleAccept}
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg"
                      >
                          Accept
                      </button>

                      <button
                       className="mt-4 bg-red-500 ml-4 text-white py-2 px-4 rounded-lg"
                        onClick={handleDeclineBooking}
                      >
                        Ignore
                      </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Status Toggle */}
      <div className="w-full flex justify-center p-2 items-center">
        <button
          onClick={handleToggle}
          className={`py-2 px-4 text-white w-full font-bold rounded-lg ${
            isActive ? "bg-green-500" : "bg-gray-500"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </button>
      </div>

      {/* Earnings Section */}
      <div className="flex flex-col items-center p-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Earnings</h3>
          <div className="flex items-center justify-between text-lg text-gray-700">
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-green-600 text-3xl" />
              <span>Total Earnings</span>
            </div>
            <div className="text-2xl font-semibold text-green-600">
              ${earnings.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
