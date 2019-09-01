const express = require('express');
const routes = express();
const {authRoleAdmin,authRoleCommonUser} = require('../middleware/authMiddleware');
const user = require('../controllers/UserController');
const listUserGit = require('../controllers/ListUserGitController');

//rotas com validação de token e repondendo requisições http
routes.get('/search-users',authRoleAdmin,user.searchUsers);
routes.post('/user',authRoleAdmin,user.create);
routes.get('/gitusers',authRoleCommonUser, listUserGit.show);
routes.post('/add-list',authRoleCommonUser, listUserGit.addList);
routes.put('/edit-list/:id',authRoleCommonUser,listUserGit.editList);
routes.delete('/remove-list/:id',authRoleCommonUser,listUserGit.removeList);

module.exports = routes;