const mongoose = require('mongoose');
const addressSchema = require('./address.model');
const constants = require("../utils/constants");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    emaildId :{ 
        type : String,
        required : true 
    },
    linkedInProfile : {
        type : String
    },
    type : {
        type : String,
        enum : [constants.userTypes.student, constants.userTypes.admin],
        default : constants.userTypes.student
    },
    address : {      //Embedded schema
        type : addressSchema,
        required : true
    }

});

module.exports = mongoose.model("User", userSchema);