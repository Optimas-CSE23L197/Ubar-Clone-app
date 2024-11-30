import React, { useState } from 'react';

const VehiclePanel = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <h2 onClick={handleToggleDetails} style={{ cursor: 'pointer' }}>
                Click here for taxi and ride details
            </h2>
            {showDetails && (
                <div className="details-panel">
                    <h3>Taxi Details</h3>
                    <p>Model: Toyota Prius</p>
                    <p>License Plate: ABC-1234</p>
                    <p>Driver: John Doe</p>

                    <h3>Ride Details</h3>
                    <p>Pickup Location: 123 Main St</p>
                    <p>Dropoff Location: 456 Elm St</p>
                    <p>Fare: $25.00</p>
                </div>
            )}
        </div>
    );
};

export default VehiclePanel;