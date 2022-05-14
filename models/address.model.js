const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({

    type : {
        type : String,
        default: "Point",
        enum : ['Point'],
        required : true
    },
    coordinates : {
        type : [Number],
        required : true
    }

});

module.exports = addressSchema;