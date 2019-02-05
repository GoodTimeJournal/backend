const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors');
const Activities = require('./activities.js');
const reflections = require('./reflections.js');

server.use(express.json(), helmet(), cors());
server.use('/activites', Activities);
server.use('/reflections', reflections);

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
