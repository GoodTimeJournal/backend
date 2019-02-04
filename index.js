const express = require('express');
const helmet = require('helmet');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const cors = require('cors');
const port = process.env.PORT || 9000;
// const pg = require('pg');
require('dotenv').config();
const environment = process.env.ENVIRONMENT || 'development';

server.use(helmet(), cors());
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

const { Pool, Client } = require('pg');
const connectionString = DATABASE_URL;

const pool = new Pool({
	connectionString: connectionString
});

pool.query('SELECT NOW()', (err, res) => {
	console.log(err, res);
	pool.end();
});

const client = new Client({
	connectionString: connectionString
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
	console.log(err, res);
	client.end();
});

server.listen(port, () => {
	console.log(`Server started on ${port}`);
});
