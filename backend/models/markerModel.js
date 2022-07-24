const mongoose = require('mongoose')

const MarkerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 30,
        unique: true,
    },
    title: {
        type: String,
        require: true,
        min:3
    },
    desc: {
        type: String,
        required: true
    },
    lat:{
        type: Number,
        require: true
    },
    long: {
        type: Number,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Marker", MarkerSchema)