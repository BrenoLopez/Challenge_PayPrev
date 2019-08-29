const {check,validationResult} = require('express-validator');
const UserModel = require('../models/User');

class Auth {
    async register(req,res){
        const {name,email,password,type} = req.body;

        const validations =[ 
         check(name).isString,
         check(email).isEmail,
         check(password).isString,
         check(type).isEmpty]

         const errors = validationResult(validations);
         
         if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
         }

        const saveUser = await UserModel.create({
            name : name,
            email: email,
            password: password,
            type: type
        })
        res.json(saveUser);
    }   
}

module.exports = new Auth();