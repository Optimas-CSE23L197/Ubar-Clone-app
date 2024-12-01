const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const mapController = require('../controllers/map.controller');
const {query} = require('express-validator');

// Controller functions

// Routes
router.get('/get-coordinates',
    query('address').notEmpty().withMessage('Address is required'),
    mapController.getCoordinates);

module.exports = router;