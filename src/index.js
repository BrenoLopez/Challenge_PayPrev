const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();
const databaseConnection = require('./database');
const authRoutes = require('./routes/auth');
const basicRoutes = require('./routes');



 new databaseConnection();

server.use(cors());
server.use(express.json());
server.use('/auth',authRoutes);
server.use('/',express.static(path.resolve(__dirname,'..','documentation')));
server.use(basicRoutes);
server.listen(8000);

