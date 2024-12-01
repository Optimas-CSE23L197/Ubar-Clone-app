import React, { useState } from 'react';
import { ImLocation2 } from "react-icons/im";
import { FaSquare, FaMoneyCheckAlt } from "react-icons/fa";
import ConfirmBooking from './ConfirmBooking'; // Import as a valid component

const VehiclePanel = () => {
    const [closePanelInfo, setClosePanelInfo] = useState(false);
    const [showConfirmBooking, setShowConfirmBooking] = useState(false); // State for rendering ConfirmBooking

    const handleClosePanel = () => {
        setClosePanelInfo(true);
    };

    const handleConfirmBooking = () => {
        setShowConfirmBooking(true); // Show the ConfirmBooking component
    };

    // Hide panel and show ConfirmBooking if required
    if (closePanelInfo) return null;
    if (showConfirmBooking) return <ConfirmBooking />;

    return (
        <div>
            {/* Main Panel */}
            <div className="absolute h-[70%] bg-white w-full z-[99] bottom-0">
                {/* Car Image Section */}
                <div className="car-image relative h-[30%] border-b-2 border-black flex flex-col items-center mt-3">
                    <div className="color1 bg-blue-50 h-[100px] w-[50%] absolute top-0 z-[100] rounded-3xl"></div>
                    <div className="color2 bg-blue-200 h-[80px] w-[45%] absolute top-2.5 z-[100] rounded-3xl"></div>
                    <div className="car bg-blue-200 h-[80px] w-[45%] absolute top-2.5 z-[100] rounded-3xl flex items-center justify-center">
                        <img
                            className="absolute h-22"
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
                            alt="Uber Car"
                        />
                    </div>
                </div>

                {/* Ride Details Section */}
                <div className="rideDetails h-[70%] border-2 p-3 flex flex-col items-center justify-center gap-4">
                    {/* Pickup Location */}
                    <div className="pick flex items-center gap-6 p-2 w-full h-16 border-b-2 border-gray-400">
                        <ImLocation2 className="text-3xl text-gray-700" />
                        <h2 className="font-medium text-base text-gray-800">
                            12A, Green Street, Newtown, Kolkata, West Bengal
                        </h2>
                    </div>

                    {/* Destination */}
                    <div className="destination flex items-center gap-6 p-2 w-full h-16 border-b-2 border-gray-400">
                        <FaSquare className="text-2xl text-gray-700" />
                        <h2 className="font-medium text-base text-gray-800">
                            56C, Park Avenue, Salt Lake, Kolkata, West Bengal
                        </h2>
                    </div>

                    {/* Fare Amount */}
                    <div className="amount flex items-center gap-6 p-2 w-full h-16 border-b-2 border-gray-400">
                        <FaMoneyCheckAlt className="text-2xl text-gray-700" />
                        <h2 className="font-bold text-lg text-gray-800">$120.59</h2>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between w-full gap-4 p-3">
                        <button
                            onClick={handleConfirmBooking}
                            className="bg-green-600 h-16 rounded-2xl text-white font-semibold w-full hover:bg-green-700 transition"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={handleClosePanel}
                            className="bg-red-600 h-16 rounded-2xl text-white font-semibold w-full hover:bg-red-700 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehiclePanel;
