const mongoose = require('mongoose');

//subSchema CityBounds
const CityBoundsSchema = new mongoose.Schema({
    north: Number,
    south: Number,
    west: Number,
    east: Number
});

// CitySchema
const CitySchema = new mongoose.Schema({
    osm_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    cityBounds: {
        type: CityBoundsSchema,
        required: true
    },
    homes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Home'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('City', CitySchema, 'cities')
