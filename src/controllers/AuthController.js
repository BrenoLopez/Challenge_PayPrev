const {check,validationResult} = require('express-validator');
const UserModel = require('../models/User');

class Auth {
    async register(req,res){
        const {name,email,password,type} = req.body;

        const validations =[ check(name).isEmpty,
         check(email).isEmail,
         check(password).isEmpty,
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
    }   
}

module.exports = new Auth();