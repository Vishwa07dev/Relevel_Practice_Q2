const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({

    // lat: {
    //     type: mongoose.Types.Decimal128,
    //     required: true,
    // },
    // long: {
    //     type: mongoose.Types.Decimal128,
    //     required: true,
    // }

    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
    
});

module.exports = mongoose.model("Address", addressSchema);