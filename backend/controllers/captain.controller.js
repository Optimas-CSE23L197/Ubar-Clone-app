const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');


//register for captain or driver
module.exports.registerCaptain = async (req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        })
    }

    const {fullname,email,password,vehicle} = req.body

    const isCaptainExist = await captainModel.findOne({
        email
    })
    if(isCaptainExist) {
        return res.status(400).json({
            message: "already captain is registered"
        })
    }

    const hashPassword = await captainModel.hashPassword(password)

    const newCaptain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        typeVehicle: vehicle.typeVehicle
    })

    const token = newCaptain.generateAuthToken();
    res.status(200).json({
        token, newCaptain
    })
}

//login for captain or driver
module.exports.loginCaptain = async (req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        })
    }

    const {email,password} = req.body;
    if(!email || !password) {
        return res.status(400).json({
            message: 'all filed are required'
        })
    }

    const captain = await captainModel.findOne({
        email
    }).select('+password');
    if(!captain) {
        return res.status(400).json({
            message: 'invalid email or password'
        })
    }

    const isPasswordMatch = await captain.comparePassword(password);
    if(!isPasswordMatch) {
        return res.status(400).json({
            message: 'invalid email or password'
        })
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({
        token,captain
    })
}

//profile for captain or driver
module.exports.getCaptainProfile = async (req,res,next) => {
    res.status(200).json({captain: req.captain});
}

//logout for captain or driver
module.exports.logoutCaptain = async(req,res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({
        token
    })
    res.status(200).json({
        message: 'logout successfully',
        success: true
    })
}