const mongoose = require("mongoose")

const Meds = new mongoose.Schema(
    {
        Medicine: {
            required: true,
            type: String,
        },
        Phone_no: {
            required: true,
            type: Number,
        },
        City: {
            required: true,
            type: String,
        },
        Address: {
            required: true,
            type: String,
        },
        
        Alt_Phone: {
            required: true,
            type: Number,
        },
    },
    { timestamps: true }
)

const model = mongoose.model("Meds", Meds);

module.exports = model