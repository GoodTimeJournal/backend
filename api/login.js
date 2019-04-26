const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../data/helper/userModal');
const { generateToken } = require('../auth/auth');

router.post('/register', (req, res, next) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 14);
	creds.password = hash;
	console.log(hash);
	db
		.createUser(creds)
		.then((ids) => {
			console.log(hash);
			db
				.findUserId(ids[0])
				.then((user) => {
					res.status(201).json({ username: user.id });
				})
				.catch((err) => {
					res.status(500).json({ err });
				});
		})
		.catch((err) => {
			next('h500', err);
		});
});

router.post('/login', (req, res, next) => {
	const creds = req.body;
	db
		.findUserName(creds.username)
		.then((user) => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.json({ Welcome: user.username, userId: user.id, token });
			} else {
				res.status(401).json({ message: 'Not Authorized' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
});

module.exports = router;
