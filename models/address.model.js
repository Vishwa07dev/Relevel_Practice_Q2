const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    type : {
        type : String,
        enum : ['Point'],  
        required : true
    },
    coordinates : {
        type : [Number],
        required : true
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
});

module.exports = mongoose.model('Address',addressSchema);