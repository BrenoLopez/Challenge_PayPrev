const User = require('../models/User');
const validation = require('./ValidatorController');
const jwt = require('jsonwebtoken');
const {secret,userTypes} = require('../config/auth.json');
const bcrypt = require('bcrypt');

//classe de autenticação de token
class Auth {
    
    //metodo que faz a geração do token baseado em parametros e chave de encriptação
    static generateToken(params = {}){
        return jwt.sign(params,secret,{
             expiresIn: 86400
         });
     }

     //metodo responsavel pelo cadastro de novo usuario ao sistema e gera novo token de autenticação 
    async register(req,res){
        if(!validation.errors(req,res)){

        const {name,email,password,cpf,type} = req.body;      
        try{    
                                  
            if(userTypes.indexOf(type.toLowerCase()) === -1){
                return res.status(400).json({error: 'Invalid type'});
            }   
            const userEmail =  await User.findOne({email});
            if(userEmail){
                return res.status(400).json({error: 'User already exists'});
            }   
            const user = await User.create({
                name : name,
                email: email,
                password: password,
                cpf: cpf,
                userType: type
            })
            user.password = undefined;
            res.status(201).json({user, token: Auth.generateToken({id: user.id,userRole: user.userType})});
         }
         catch(err){
             return res.status(400).json({error: 'Registration failed'});
         }
        }      
    }  
    //metodo responsavel pelo login do usuario ao sistema e gera um novo token de autenticação 
    async login(req,res){
        if(!validation.errors(req,res)){
        const {email,password} = req.body;
        const user = await User.findOne({email}).select('+password');
        if(!user){
            res.status(400).json({error: 'User not found'});
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).json({error: 'Invalid password'})
        }
        user.password = undefined;

        res.json({
            user,
            token: Auth.generateToken({id: user.id, userRole: user.userType})});
    }
}

}

module.exports = new Auth();