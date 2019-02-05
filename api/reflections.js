const express = require('express');
const router = express.Router();
const db = require('../data/helper/reflectionsModal');

router.get('/', (req, res) => {
	db.getReflections().then((reflections) => res.status(200).json(reflections)).catch((err) => {
		res.status(500).json(`Server error: ${err}`);
	});
});

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
	const { week, fk, journalEntry, insights, trends, surprises } = req.body;
	const reflection = req.body;
	db
		.createReflection(reflection)
		.then((reflection) => {
			res.status(201).json({ reflection: reflection });
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db
		.deleteReflection(id)
		.then((res) => {
			if (res) {
				res.status(202).json({ message: 'Reflection deleted' });
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const { week, fk, journalEntry, insights, trends, surprises } = req.body;
	const edit = { week, fk, journalEntry, insights, trends, surprises };

	db
		.editReflection(id, edit)
		.then((edit) => {
			if (edit) {
				res.status(200).json({
					message: 'Reflection updated ',
					reflection: edit
				});
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

module.exports = router;
