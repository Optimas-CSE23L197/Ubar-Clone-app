const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const { authCaptain } = require('../middlewares/auth.middleware');

//register captain api
router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.typeVehicle').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be either car, motorcycle or auto')
], captainController.registerCaptain);

//login captain api
router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], captainController.loginCaptain);

//get captain by id api
router.get('/profile', authCaptain ,captainController.getCaptainProfile);

//logout captain api
router.get('/logout', authCaptain, captainController.logoutCaptain);

module.exports = router;