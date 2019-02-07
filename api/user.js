const express = require('express');
const router = express.Router();
const db = require('../data/helper/userModal');
const { authenticate } = require('../auth/auth');

router.get('/users', authenticate, (req, res) => {
	if (req.decoded.username === 'admin') {
		db.getUsers().then((users) => res.status(200).json(users)).catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
	} else {
		res.status(401).json({ error: 'You do not have rights to this endpoint' });
	}
});

module.exports = router;
