const {Schema,model} = require('mongoose');

const UserGitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true
    },
    html_url:{
        type: String,
        required: true
    }
},{
    timestamps:true,
   });


module.exports = model('UserGit',UserGitSchema);