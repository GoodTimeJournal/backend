const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../data/helper/userModal');
const { generateToken } = require('../auth/auth');

router.post('/register', (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 14);
	creds.password = hash;
	db
		.createUser(creds)
		.then((res) => {
			res.status(202).json(creds);
			// db
			// 	.findUserId(id[0])
			// 	.then((user) => {
			// 		console.log(user);
			// 		const token = generateToken(user);
			// 		res.status(201).json({ username: user.username, token });
			// 	})
			// 	.catch((err) => {
			// 		res.status(500).json({ err });
			// 	});
		})
		.catch((err) => {
			res.status(500).send('this is an error');
		});
});

router.post('/login', (req, res) => {
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
			res.status(500).json(err);
		});
});

module.exports = router;
