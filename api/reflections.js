const router = express();

router.get('/reflections', (req, res) => {
	reflections
		.find()
		.then((notes) => {
			if (notes.length) {
				res.status(200).json(notes);
			} else {
				res.status(200).json({ message: 'No reflections found' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

router.get('/reflections/:id', (req, res) => {
	const { id } = req.params;
	db
		.reflections(id)
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

router.post('/reflections', (req, res) => {
	const reflection = req.body;
	db
		.create(reflection)
		.then((reflections) => {
			res.status(201).json({ message: 'Reflection created', id: reflections[0] });
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.delete('/reflections/:id', (req, res) => {
	const { id } = req.params;
	db
		.delete(id)
		.then((res) => {
			if (res) {
				res.status(200).json({ message: 'Reflection deleted' });
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

router.put('/reflections/:id', (req, res) => {
	const { id } = req.params;
	const reflection = req.body;

	db
		.reflections(id, reflection)
		.then((res) => {
			if (res) {
				res.status(200).json({ message: 'Reflection updated ', reflection: { ...req.body, _id: id } });
			} else {
				res.status(404).json({ errorMessage: 'That reflection seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

module.exports = router;
