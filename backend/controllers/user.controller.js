const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


//register user
module.exports.registerUser = async (req,res,next) => {
    

    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        })
    }

    const {fullname,email,password} = req.body

    const isUserExist = await userModel.findOne({
        email
    })
    if(isUserExist){
        return res.status(400).json({
            message: "User already exist"
        })
    }

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
        token, user
    })
}

//get user profile
module.exports.getUserProfile = async (req,res,next) => {
    //send the user data to frontend
    res.status(200).json(req.user)   
}

//logout user
module.exports.logoutUser = async (req,res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistTokenModel.create({
        token
    })

    res.status(200).json({
        message: 'Logged out successfully',
        success: true
    })
}

//TTL:- Time to live used for the token or we can say the time for which the token is valid is called TTL


