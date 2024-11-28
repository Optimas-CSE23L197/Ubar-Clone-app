const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//create user schema
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 character"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 character"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [11, 'Email must be email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
})


//generate token for the user
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )
    return token
}

//take the user password and compare it with the hashed password
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

//hash the user password
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

//create user model
const userModel = mongoose.model('user', userSchema);

//export user model
module.exports = userModel