const UserGit = require('../models/UserGit');
const axios = require('axios');

class User {
    // busca usuario do github 
    async searchUsers (req,res){
        const {user} = req.query;
        const response  = await axios.get(`https://api.github.com/users/${user}`);
        return res.json(response.data);
    }

    // adiciona novo usuario do github ao sistema
    async create(req,res){
        const response = await UserGit.create(req.body);
        if(response){
           return res.status(201).json(response);
        }
        else 
        return res.status(400).json({error: 'Invalid form'});

    }

  
  
}

module.exports = new User();