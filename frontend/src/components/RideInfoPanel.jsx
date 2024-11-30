import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";

function RideInfoPanel() {
  const [checkDetails, setCheckDetails] = useState(true);
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const handleCheckDetails = () => {
    setCheckDetails(!checkDetails);
    console.log("checkDetails", checkDetails);
  }

  return (
    <>
      {display && checkDetails && (
        <div className="fixed z-[99] bottom-0 bg-white rounded-t-2xl shadow-lg p-2 left-0 mt-2">
          <h2 className="text-2xl font-bold mb-3">Choose Your Ride</h2>

          {/* Car Info Section */}
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl border-2 active:border-black mt-2">
            {/* Car Image */}
            <img
              className="h-16"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
              alt="Uber Car"
            />

            {/* Ride Info */}
            <div className="flex flex-col justify-between ml-4 w-2/3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                UberGo{" "}
                <span className="text-gray-600 flex items-center">
                  <FaUser /> 4
                </span>
              </h4>
              <h5 className="font-medium text-xs text-gray-500">2 mins away</h5>
              <p className="font-normal text-xs text-gray-400">
                Affordable, compact rides
              </p>
            </div>

            {/* Ride Price */}
            <h2 className="text-xl font-semibold text-gray-800">$192.20</h2>
          </div>

          {/* Bike Info Section */}
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl border-2 active:border-black mt-2">
            {/* Bike Image */}
            <img
              className="h-16"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
              alt="Uber Bike"
            />

            {/* Bike Info */}
            <div className="flex flex-col justify-between ml-4 w-2/3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                UberGo{" "}
                <span className="text-gray-600 flex items-center">
                  <FaUser /> 2
                </span>
              </h4>
              <h5 className="font-medium text-xs text-gray-500">5 mins away</h5>
              <p className="font-normal text-xs text-gray-400">
                Affordable, compact rides
              </p>
            </div>

            {/* Ride Price */}
            <h2 className="text-xl font-semibold text-gray-800">$90.50</h2>
          </div>

          {/* Auto Info Section */}
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl border-2 active:border-black mt-2">
            {/* Auto Image */}
            <img
              className="h-16"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="Uber Auto"
            />

            {/* Auto Info */}
            <div className="flex flex-col justify-between ml-4 w-2/3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                UberGo{" "}
                <span className="text-gray-600 flex items-center">
                  <FaUser /> 3
                </span>
              </h4>
              <h5 className="font-medium text-xs text-gray-500">5 mins away</h5>
              <p className="font-normal text-xs text-gray-400">
                Affordable, compact rides
              </p>
            </div>

            {/* Ride Price */}
            <h2 className="text-xl font-semibold text-gray-800">$50.10</h2>
          </div>
        </div>
      )}

      {display ? (
        <div
        onClick={handleDisplay}
        className="text-2xl absolute z-[99] font-bold bottom-[359px] text-red-700 right-7" >X</div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default RideInfoPanel;
