const {check,validationResult} = require('express-validator');

//classe de validação dos dados de login e cadastro de novos usuarios do sistema
class Validator {

constructor(){
    // atributos para cada uma das requisições, tanto de cadastro quanto de login
    this.register = [
    check('name').isString(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('cpf').isNumeric().isLength({max: 11}),
    check('type').isString() 
]
    this.login = [check('email').isEmail(),check('password').isLength({min: 6})]
}
   

    //metodo responsavel pelo lançamento de possiveis erros decorrentes da validação 
    errors(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
    }
}

module.exports = new Validator();