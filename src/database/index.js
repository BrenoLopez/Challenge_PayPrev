const mongoose = require('mongoose');

const connection =()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/payprev',{useNewUrlParser: true, useCreateIndex: true});

    }
    catch(err){
        console.log('Error: ', err);
    }
}; 
module.exports = connection;