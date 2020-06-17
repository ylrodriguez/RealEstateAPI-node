const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('dotenv/config'); // package para usar .env file. En este archivo guardamos conexion db
// https://dev.to/mkilmer/how-create-relationships-with-mongoose-and-node-js-with-real-example-43ei
// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) // Converts all req.body to json
// Mongo connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err) => {
        console.log('Connected to db');
        if (err) {
            console.log(err)
        }
    });

// Routes
app.use(require('./app/routes'));

// Start listening port 3000
app.listen(PORT);
