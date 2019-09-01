const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


//meddleware de autorização dos usuarios a suas devidas rotas e metodos de resposta

module.exports.authRoleAdmin = (req,res,next)=>{  
    const authHeader = req.headers.authorization;  
    if(!authHeader){
        return res.status(401).send({error: 'No token provied'})
    }
    const parts = authHeader.split(' ');
    
    if(!parts.length === 2){
        return res.status(401).send({error: 'Token error'});
    }
        const [scheme, token] = parts;        
        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({error: 'Token malformatted'});
        }
        jwt.verify(token, authConfig.secret, (err,decoded)=>{
            if(err){
                return res.status(401).send({error: 'Token invalid'});
            }
            if(decoded.userRole === "admin"){
                req.userId = decoded.id;
                return next();
            }
            else res.status(400).json({error: 'Invalid usertype'});
        })
}

module.exports.authRoleCommonUser = (req,res,next)=>{  
    const authHeader = req.headers.authorization;  
    if(!authHeader){
        return res.status(401).send({error: 'No token provied'})
    }
    const parts = authHeader.split(' ');
    
    if(!parts.length === 2){
        req.userId = decoded.id;
        return res.status(401).send({error: 'Token error'});
    }
        const [scheme, token] = parts;        
        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({error: 'Token malformatted'});
        }
        jwt.verify(token, authConfig.secret, (err,decoded)=>{
            if(err){
                return res.status(401).send({error: 'Token invalid'});
            }
            if(decoded.userRole === "comum"){
                req.userId = decoded.id;
                return next();
            }
            else res.status(400).json({error: 'Invalid usertype'});
        })
}