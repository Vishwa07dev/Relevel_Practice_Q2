const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    lat : {
        type : mongoose.Types.Decimal128,  
        required : true
    },
    long : {
        type : mongoose.Types.Decimal128,  
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