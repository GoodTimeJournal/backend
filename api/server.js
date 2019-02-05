const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const activities = require('./activities.js');
const reflections = require('./reflections.js');
const login = require('./login.js');
const server = express();

server.use(express.json(), helmet(), cors());
server.use('/activites', activities);
server.use('/reflections', reflections);
server.use('/api', login);

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
