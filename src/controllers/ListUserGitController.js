const UserGit = require('../models/UserGit');
const GitUserList = require('../models/GitUserList');
const user = require('../models/User');

class LisUserGit{

    //lista, lista de usuarios do github
    async show(req,res){
        const response = await UserGit.find();
           if(response.length === 0){
            return res.status(204).json({error: 'Not gitusers'});
           }
           return res.json(response);
    
    }
    //adiciona lista de usuarios do github
    async addList(req, res){
        const response = await user.findById(req.userId);
        if(response.userType === 'comum'){            
            const saveList = await GitUserList.create({
                ...req.body, user: req.userId
            });
            res.status(201).send(saveList);
        }
        else{
        res.status(400).json({error: 'User does not have permission'});
    }
    }
    //edita lista de usuarios do github
    async editList(req,res){
        const {id} = req.params;
        const response = await user.findById(req.userId);
        if(response.userType === 'comum'){   
        const response = await GitUserList.findByIdAndUpdate(id,req.body,{new: true});
        res.json(response);
        }
        else{
            res.status(400).json({error: 'User does not have permission'});
        }
    }
    //remove lista de usuarios do github
    async removeList(req,res){
        const {id} = req.params;
        const response = await user.findById(req.userId);
        if(response.userType === 'comum'){   
        await GitUserList.findByIdAndRemove(id);
        res.sendStatus(200);
        }
        else{
            res.status(400).json({error: 'User does not have permission'});
        }
    }
}

module.exports = new LisUserGit();