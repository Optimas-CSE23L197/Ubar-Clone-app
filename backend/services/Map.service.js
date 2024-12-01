let fetch; // Declare fetch as a global variable

// Import fetch only when needed
(async () => {
    fetch = (await import('node-fetch')).default; // Import fetch
})();

// Now use fetch as you normally would
module.exports.getLocation = async (address) => {

    // Call the MapTiler API to get the location based on the address
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${process.env.MAPTILER_API_KEY}`;

    try {
        // Fetch the location data
        const response = await fetch(url); // Fetch the location data

        // Check if the response is not ok
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.statusText}`);
        }

        //store response data in data variable
        const data = await response.json();

        // Check if the data is not empty data.features is a nested array which contains the coordinates and .features is the array of coordinates and we are checking if it is greater than 0 or not if it is greater than 0 then we are storing the coordinates in lat and lon and returning it as an object else we are throwing an error that location not found .features is a function of javascript which is used to get the array of coordinates.
        if (data && data.features && data.features.length > 0) {
            // Get the coordinates from the data .geometry.coordinates is the array of coordinates
            const [lon, lat] = data.features[0].geometry.coordinates;
            return { lat, lon };
        } else {
            throw new Error('Location not found');
        }
    } catch (error) {
        console.error('Error in getLocation:', error.message);
        throw error;
    }
};
