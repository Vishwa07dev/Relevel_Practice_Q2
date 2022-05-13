const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    lat : {
        type : Number,  
        required : true
    },
    long : {
        type : Number,  
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