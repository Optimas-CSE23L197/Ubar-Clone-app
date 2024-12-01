const mapService = require('../services/Map.service');
const { validationResult } = require('express-validator');

const getCoordinates = async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Get the address from the query
    const { address } = req.query;

    try {
        // Call the service to get the coordinates based on the address
        const coordinates = await mapService.getLocation(address);
        res.status(200).json(coordinates); // Send the coordinates as a response
    } catch (error) {
        console.error('Error in getCoordinates:', error.message);
        res.status(500).json({ error: 'Failed to get coordinates' });
    }
};

module.exports = {
    getCoordinates
};
