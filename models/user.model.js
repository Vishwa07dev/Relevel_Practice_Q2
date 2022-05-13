
const mongoose = require("mongoose");
const constants = require("../utils/constants");

const userSchema = new mongoose.Schema({

    /**
     * name, userId, password, email, createdAt , updatedAt
     */
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unqiue : true
    },
    password :{
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : true,
        default : constants.userType.student
    },
    linkedInProfile :{
        type : String
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
    address: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Address"
    }
});

module.exports = mongoose.model("User", userSchema);