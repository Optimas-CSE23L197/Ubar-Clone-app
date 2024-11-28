const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');


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