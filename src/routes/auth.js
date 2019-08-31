const express = require('express');
const routes = express();
const auth = require('../controllers/AuthController');
const validation = require('../controllers/ValidatorController');

    //rotas responsaveis pela autenticação do usuario 
    routes.post('/register',validation.register,auth.register);
    routes.post('/login',validation.login,auth.login)
module.exports= routes;