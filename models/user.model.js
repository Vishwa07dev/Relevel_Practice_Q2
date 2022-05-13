const mongoose = require('mongoose');
const constants = require('../utils/constants')

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
    password:{
        type:String,
        required: true
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
    },
    userType : {
        type:String,
        required:true,
        default: constants.userType.studemt
    },
    address : {
        type: [mongoose.SchemaTypes.ObjectId],
        ref : "Address"
    }
});

module.exports = mongoose.model('user',userSchema)