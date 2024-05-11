const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const routerUser = require('./routes/user.route');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//api route middleware
app.use('/api/v1/user', routerUser);

//home response
app.get('/',async (req, res) => {
    res.send("User is to be loaded");
})



module.exports = app;