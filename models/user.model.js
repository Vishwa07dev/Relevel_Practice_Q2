const mongoose = require('mongoose');
const constants = require('../utils/constants')
const addressSchema = require('./address.model')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    emailId :{
        type:String,
        required:  true,
        lowercase:true,
        unique:true
    },
    linkedInProfile : {
        type : String
    },
    userType : {
        type:String,
        required:true,
        default: constants.userType.studemt
    },
    address : {
        type: addressSchema,
        required:true
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=>{
            return Date.now();
        }
    },
    updatedAt:{
        type: Date,
        default: ()=>{
            return Date.now();
        }
    }
});

module.exports = mongoose.model('user',userSchema)