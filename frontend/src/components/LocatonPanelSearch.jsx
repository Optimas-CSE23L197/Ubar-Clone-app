import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import RideInfoPanel from "./RideInfoPanel";

function LocationPanelSearch() {
  const sampleLocations = [
    "Chose Your Location",
    "24B, Karan Para, Near Bot Tala, Narayan Pakuria",
    "12A, Green Street, Newtown, Kolkata, West Bengal",
    "56C, Park Avenue, Salt Lake, Kolkata, West Bengal",
    "12A, Green Street, Newtown, Kolkata, West Bengal",
    "12A, Green Street, Newtown, Kolkata, West Bengal",
  ];

  return (
    <div>
      {/* Location list */}
      {sampleLocations.map((location, index) => (
        <div
          // onClick={handleLocationClick}
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg mb-2 duration-300 active:border-black border-2 bg-gray-300"
        >
          <div className="bg-gray-200 p-2 rounded-full text-blue-500 text-xl">
            <ImLocation2 />
          </div>
          <h4 className="text-gray-700 text-sm font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
}

export default LocationPanelSearch;
