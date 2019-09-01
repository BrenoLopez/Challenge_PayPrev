const mongoose = require('mongoose');

//classe responsavel pela conexão com o banco de dados mongodb
class connection{
     constructor(){
         const url = 'mongodb+srv://challengepayprev:challengepayprev@cluster0-p7tt2.mongodb.net/payprev?retryWrites=true&w=majority';
         const options = {useNewUrlParser: true, useCreateIndex: true,useFindAndModify : false};
        try{
            mongoose.connect(url,options);
            return console.dir({status: "Open connection with database"})
        }
        catch(err){
            console.log('Error: ', err);
        }
    }; 
}

module.exports = connection;