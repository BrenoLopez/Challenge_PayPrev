const {Schema,model} = require('mongoose');
const GitUserListSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    list: [{
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
        },
        tags: [{type: String}]

    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true})
module.exports = model('GitUserList',GitUserListSchema);