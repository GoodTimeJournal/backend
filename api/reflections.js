const express = require('express');
const router = express.Router();
const db = require('../data/helper/reflectionsModal');
const { authenticate } = require('../auth/auth');
const userDB = require('../data/helper/userModal');
const errorHandler = require('../errorHandler/errors.js');

router.get('/', authenticate, (req, res) => {
	userDB
		.findUserName(req.decoded.username)
		.then((res) => db.getReflections(res.id))
		.then((reflections) => {
			res.status(200).json(reflections);
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.get('/:id', authenticate, (req, res) => {
	const { id } = req.params;
	db
		.getReflection(id)
		.then((reflection) => {
			if (reflection) {
				res.status(200).json(reflection);
			} else {
				res.status(404).json({ error: 'Reflection not found' });
			}
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.post('/', authenticate, (req, res, next) => {
	const { id, week, fk, journalEntry, insights, trends, surprises } = req.body;
	if(id) {
		const reflection = { id, week, fk, journalEntry, insights, trends, surprises }
	} else {
		const reflection = { week, fk, journalEntry, insights, trends, surprises };
	}
	
	db
		.createReflection(reflection)
		.then((ids) => {
			db
				.getReflection(ids[0])
				.then((reflection) => {
					res.status(201).json({ reflection: reflection.id });
				})
				.catch((err) => {
					res.status(500).json(`Server error: ${err}`);
				});
		})
		.catch((err) => {
			next('h500', err);
		});
});

router.delete('/:id', authenticate, (req, res) => {
	const { id } = req.params;
	db
		.deleteReflection(id)
		.then((activity) => {
			if (activity) {
				res.status(202).json({ message: 'Reflection deleted' });
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.put('/:id', authenticate, (req, res, next) => {
	const { id } = req.params;
	const { week, fk, journalEntry, insights, trends, surprises } = req.body;
	const edit = { week, fk, journalEntry, insights, trends, surprises };
	db
		.editReflection(id, edit)
		.then((updated) => {
			if (updated) {
				res.status(200).json({
					message: 'Reflection updated'
				});
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
});

module.exports = router;
