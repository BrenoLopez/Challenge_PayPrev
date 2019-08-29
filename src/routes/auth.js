const express = require('express');
const routes = express();
const auth = require('../controllers/AuthController');


    routes.post('/register',auth.register);



module.exports= routes;