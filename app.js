const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

//variables de entorno
require("dotenv").config()

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => {
    console.log(`Express on port${process.env.PORT}`);
});

