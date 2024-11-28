const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
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
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },

    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 character"]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 character"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        typeVehicle: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"]
        }
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return bcrypt.hash(password,10);
}


const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;