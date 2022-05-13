
const mongoose = require("mongoose");
const constants = require("../utils/constants");

const addressSchema = new mongoose.Schema({

    /**
     * lat, long
     */
    lat : {
        type : Decimal128,
        required : true
    },
    long : {
        type : Decimal128,
        required : true
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
    }
});

module.exports = mongoose.model("Addres", addressSchema);