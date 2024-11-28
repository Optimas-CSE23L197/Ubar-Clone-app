const mongoose = require('mongoose');

//create a schema for the blacklist token which will be used to store the token and help to logout the user
const blacklistTokenSchema = new mongoose.Schema({
    //token is the string type and it is required and unique
    token: {
        type: String,
        required: true,
        unique: true
    },
    //createdAt is the date type and it is default to the current date and it will expire after 24 hours
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
})

const blacklistTokenModel = mongoose.model('blacklistToken', blacklistTokenSchema);
module.exports = blacklistTokenModel;