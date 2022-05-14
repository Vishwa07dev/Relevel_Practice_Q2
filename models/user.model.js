const { userTypes } = require('../utils/constants');
const addressSchema = require('./address.model');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: [true, "Email is already exists"]
    },
    userType: {
        type: String,
        default: userTypes.student         //STUDENT | ADMIN 
    },
    linkedInProfile: {
        type: String
    },
    address: {
        type: addressSchema,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});


module.exports = mongoose.model("User", userSchema);