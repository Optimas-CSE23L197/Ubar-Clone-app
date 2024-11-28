const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//check if the user is authenticated
module.exports.authUser = async (req,res,next) => {
    //take the user token from the cookie or the headers
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    //if the token is not available return error
    if(!token) {
        return res.status(401).json({
          message: 'Unauthorized'  
        })
    }

    const isBlacklisted = await blacklistTokenModel.findOne({
        token: token
    })
    if(isBlacklisted) {
        return res.status(401).json({
            message: 'Unauthorized User',
            success: false
        })
    }

    try {
        //take the token of the user and match it with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //find the user with the token
        const user = await userModel.findById(decoded._id);

        req.user = user;
        next();


    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized User',
            success: false
        })
    }
}
module.exports.authCaptain = async (req,res,next) => {
    //take the user token from the cookie or the headers
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    //if the token is not available return error
    if(!token) {
        return res.status(401).json({
          message: 'Unauthorized'  
        })
    }

    const isBlacklisted = await blacklistTokenModel.findOne({
        token: token
    })
    if(isBlacklisted) {
        return res.status(401).json({
            message: 'Unauthorized captain',
            success: false
        })
    }

    try {
        //take the token of the user and match it with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //find the user with the token
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        next();


    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized captain',
            success: false
        })
    }
}