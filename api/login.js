const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../data/helper/userModal');
const { authenticate, generateToken } = require('../auth/auth');

router.post('/register', (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 14);
	creds.password = hash;
	// console.log(creds);
	db
		.createUser(creds)
		.then((id) => {
			console.log(id);
			db
				.findUserId(id[0])
				.then((user) => {
					console.log(user);
					const token = generateToken(user);
					console.log(token);
					res.status(201).json({ username: user.username, token });
				})
				.catch((err) => {
					res.status(500).json({ hi: err });
				});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/login', (req, res) => {
	const creds = req.body;
	db
		.findUserName(creds.username)
		.then((user) => {
			console.log(user);
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.json({ Welcome: user.username, token });
			} else {
				res.status(401).json({ message: 'Not Authorized' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
