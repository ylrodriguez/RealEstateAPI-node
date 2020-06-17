const Home = require('../models/Home');
const City = require('../models/City');
const mongoose = require('mongoose');

module.exports = {
    // Creates new Home
    create: async (req, res) => {
        try {
            const cityId = req.params.cityId
            const city = await City.findById(new mongoose.Types.ObjectId(cityId))

            const home = await Home.create({
                type: req.body.type,
                address: req.body.address,
                neighborhood: req.body.neighborhood,
                lat: req.body.lat,
                lng: req.body.lng,
                homeStatus: req.body.homeStatus,
                bedrooms: req.body.bedrooms,
                bathrooms: req.body.bathrooms,
                price: req.body.price,
                area: req.body.area,
                desc: req.body.desc,
                images: req.body.images,
                city: cityId
            })

            city.homes.push(home)
            await city.save();
            await home.save();

            return res.status(200).json(city)
        }
        catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    // Creates many Homes
    createMany: async (req, res) => {
        try {
            const cityId = req.params.cityId;
            const city = await City.findById(new mongoose.Types.ObjectId(cityId));
            const homes = req.body.homes;

            for (const element of homes) {
                const home = await Home.create({
                    type:element.type,
                    address:element.address,
                    neighborhood:element.neighborhood,
                    lat:element.lat,
                    lng:element.lng,
                    homeStatus:element.homeStatus,
                    bedrooms:element.bedrooms,
                    bathrooms:element.bathrooms,
                    price:element.price,
                    area:element.area,
                    desc:element.desc,
                    images:element.images,
                    city: cityId
                })
                city.homes.push(home)
                await home.save();
            }
            
            await city.save();

            return res.status(200).json(city)
        }
        catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    // Finds all homes saved in specific city
    findByCity: async (req, res) => {
        try {
            const homes = await Home.find()
            return res.status(200).json(homes)
        }
        catch (error) {
           return res.status(500).json(error)
        }
    }
}