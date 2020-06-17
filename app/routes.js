const express = require('express');
const router = new express.Router;
const Home = require('./controllers/HomeController');
const City = require('./controllers/CityController');

router.get('/',(req,res)=>res.send('ok'));
// city routes
router.get('/city/all',City.all);
router.get('/city/find/:cityId',City.findById);
router.post('/city/create',City.create);
// home routes
router.get('/home/find/:cityId', Home.findByCity);
router.post('/home/create/:cityId', Home.create);
router.post('/home/createMany/:cityId',Home.createMany);

module.exports = router;