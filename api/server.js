const express = require('express');
const server = express();
const router = require('./router');

server.use(express.json());
server.use('/api/users', router);

module.exports = server;
