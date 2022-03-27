const mongoose = require("mongoose")

const Plasma = new mongoose.Schema(
    {
        Name: {
            required: true,
            type: String,
            max: 32
        },
        Phone_no: {
            required: true,
            type: Number,
        },
        City: {
            required: true,
            type: String,
            max: 32
        },
        Address: {
            required: true,
            type: String,
        },
        Blood_group: {
            required: true,
            type: String,
        },
        Pincode:{
            type:Number, 
            required: true
        },
        DOB: {
            type:String,
            required: true
        },
        Alternate_phone: {
            type: String
        }

    },
    { timestamps: true }
)

const model = mongoose.model("Plasma", Plasma);

module.exports = model