const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require("jsonwebtoken");
const cookies = require("cookie-parser");
// const { secret } = require('./server/config/jwt.config');
// require("dotenv").config()
// const myFirstSecret = secret.env.FIRST_SECRET_KEY;
require('./server/config/mangoose.config'); // This is new
app.use(cors())
app.use(express.json()); // This is new
app.use(cookies())
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/s.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})