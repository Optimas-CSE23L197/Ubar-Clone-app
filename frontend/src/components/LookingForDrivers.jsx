import React, {useState} from "react";

function LookingForDrivers() {

    const [isDriverAccept, setIsDriverAccept] = useState(true);

    const handleDriverAccept = () => {
        setIsDriverAccept(true);
    }

  return (
    <div className="absolute h-[80%] w-full bottom-0 flex flex-col bg-gray-100">
        {isDriverAccept ? (
            <div className="flex flex-col items-center bg-gray-100 h-screen w-full">
            {/* Header */}
            <div className="w-full bg-yellow-500 py-4 text-center text-white text-2xl font-bold">
              Looking for Drivers...
            </div>
      
            {/* Searching Animation */}
            <div className="absolute top-[21%] flex flex-col items-center">
              {/* Animated Car Icon */}
              <div className="bg-yellow-300 relative h-[50px] w-[50px] rounded-full flex justify-center items-center shadow-lg animate-bounce">
                <img
                  className="h-18"
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
                  alt="Searching Car"
                />
              </div>
              <p className="text-gray-500 text-lg font-medium">
                Finding the best match for you...
              </p>
            </div>
      
            {/* Driver Details Placeholder */}
            <div className="absolute bottom-16 h-[51.5%] w-full bg-white p-6 rounded-t-3xl shadow-lg">
              <h2 className="text-center text-xl font-semibold text-gray-700">
                Ride Details
              </h2>
              <p className="text-center text-gray-500 mt-2">
                Please hold on while we locate a nearby driver for you.
              </p>
      
              {/* Placeholder Driver Info */}
              <div className="mt-6 w-full max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
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
                  <span className="font-bold text-gray-700">-- mins</span>
                </div>
              </div>
      
              {/* Cancel Button */}
              <button className="mt-6 bg-red-500 text-white px-6 py-2 w-full rounded-full shadow-md hover:bg-red-600 transition">
                Cancel Ride
              </button>
            </div>
              </div>
        ) : (
            <div className="h-screen relative">
                <div className="absolute h-[70%] bottom-0 w-full bg-white flex flex-col items-center justify-center gap-4 p-4">
                    <div className="bg-blue-300 relative h-[200px] w-[300px] rounded-full flex justify-center items-center shadow-lg">
                        <img
                            className="h-44"
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
                            alt="Searching Car"
                        />
                    </div>
                <h1 className="text-[1.5rem] font-semibold text-red-500">No Driver Found Near By Area</h1>
                <button 
                    onClick={handleDriverAccept}
                    className="bg-red-700 text-white py-3 w-full rounded-2xl text-[20px]">
                    Try Again
                </button>
            </div>
            </div>
        )}
    </div>
  );
}

export default LookingForDrivers;
