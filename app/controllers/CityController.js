const City = require('../models/City');
const mongoose = require('mongoose');

module.exports = {
    // Creates new City
    create: async (req, res) => {
        try {
            const city = await City.create({
                osm_id: req.body.osm_id,
                name: req.body.name,
                country: req.body.country,
                cityBounds: req.body.cityBounds
            })

            return res.status(200).json(city)
        }
        catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    // Finds all cities
    all: async (req, res) => {
        try {
            const cities = await City.find()
            return res.status(200).json(cities)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    },
    // Finds city by id
    findById: async (req, res) => {
        try {
            const cityId = req.params.cityId
            const city = await City.findById(new mongoose.Types.ObjectId(cityId)).populate('homes')

            return res.status(200).json(city)
        }
        catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}