const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const UserController = require('../controllers/user.controller')
const {authUser} = require('../middlewares/auth.middleware')

//register user api
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character'),
    body('password').isLength({min: 4}).withMessage('password must be at least 4 character long')
], UserController.registerUser)

//login user api
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:4}).withMessage('password must be at least 4 character long')
], UserController.loginUser)

//profile api
router.get('/profile', authUser, UserController.getUserProfile)

//logout user api
router.get('/logout', authUser, UserController.logoutUser);

module.exports = router;