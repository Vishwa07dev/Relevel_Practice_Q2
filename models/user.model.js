const mongoose = require('mongoose');
const addressSchema = require('./address.model');
<<<<<<< HEAD
const constants = require("../utils/constants");
=======
>>>>>>> 065fce7f0e02af0048af7a8193df6489bbc724cd

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
<<<<<<< HEAD
        enum : [constants.userType.admin, constants.userType.student],
        default : constants.userType.student
=======
        enum : ['STUDENT', 'ADMIN'],
        default : 'STUDENT'
>>>>>>> 065fce7f0e02af0048af7a8193df6489bbc724cd
    },
    address : {      //Embedded schema
        type : addressSchema,
        required : true
    }

});

<<<<<<< HEAD
module.exports = mongoose.model("User", userSchema);
=======
module.exports = userSchema;
>>>>>>> 065fce7f0e02af0048af7a8193df6489bbc724cd
