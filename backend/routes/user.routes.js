const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const UserController = require('../controllers/user.controller')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character'),
    body('password').isLength({min: 4}).withMessage('password must be at least 4 character long')
], UserController.registerUser)



module.exports = router;