const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'City'
    },
    address: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    homeStatus: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Home', HomeSchema, 'homes')