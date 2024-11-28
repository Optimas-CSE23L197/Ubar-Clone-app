const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');


//register user
module.exports.registerUser = async (req,res,next) => {
    

    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        })
    }

    const {fullname,email,password} = req.body

    const hashPassword = await userModel.hashPassword(password)
    const newUser = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    })

    const token = newUser.generateAuthToken();
    res.status(200).json({
        token, newUser
    })
}


//login user
module.exports.loginUser = async (req,res,next) => {
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

    const user = await userModel.findOne(
        {email}
    ).select('+password');

    if(!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isPassword = await user.comparePassword(password);
    if(!isPassword) {
        return res.status(401).json({
            message: 'Invalid email or password',
            success: false
        })
    }

    const token = user.generateAuthToken();
    res.status(200).json({
        token,user
    })
}


