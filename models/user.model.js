
const mongoose = require('mongoose');
const addressSchema = require('./address.model');

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    emailId : {
        type : String,
        required : true,
        unique : true
    },
    linkedInProfile: {
        type: String,
    },
    type: {
        type: String,
        enum: ['STUDENT', 'ADMIN'],
        default: 'STUDENT'
    },
    address: {          //Embedded schema
        type: addressSchema,
        required: true,
    emaildId :{ 
        type : String,
        required : true 
    },
    linkedInProfile : {
        type : String
    },
    type : {
        type : String,
        enum : ['STUDENT', 'ADMIN'],
        default : 'STUDENT'
    },
    address : {      //Embedded schema
        type : addressSchema,
        required : true

    }

});


module.exports = userSchema;
