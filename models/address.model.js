
const mongoose = require("mongoose");
const constants = require("../utils/constants");

const addressSchema = new mongoose.Schema({

    /**
     * lat, long
     */
    lat : {
        type : Float,
        required : true
    },
    long : {
        type : Float,
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

module.exports = mongoose.model("Addreess", addressSchema);