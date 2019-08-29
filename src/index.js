const express = require('express');
const cors = require('cors');
const server = express();
const database = require('./database');
const authRoutes = require('./routes/auth');
const basicRoutes = require('./routes');

server.use(cors());
server.use(express.json());
server.use('/auth',authRoutes);
server.use(basicRoutes);
server.use(database);
server.listen(8000);

