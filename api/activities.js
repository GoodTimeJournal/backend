const router = express();
const db = knex(knexConfig.development);

router.get('/activities', (req, res) => {
	db.activities
		.find()
		.then((notes) => {
			if (notes.length) {
				res.status(200).json(notes);
			} else {
				res.status(200).json({ message: 'No activities found' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

router.get('/activities/:id', (req, res) => {
	const { id } = req.params;
	db.activities
		.find(id)
		.then((activity) => {
			if (activity) {
				res.status(200).json(activity);
			} else {
				res.status(404).json({ error: 'Activity not found' });
			}
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.post('/activities', (req, res) => {
	const activity = req.body;
	db
		.create(activity)
		.then((activities) => {
			res.status(201).json({ message: 'Activity created', id: activities[0] });
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.delete('/activities/:id', (req, res) => {
	const { id } = req.params;
	db
		.delete(id)
		.then((res) => {
			if (res) {
				res.status(200).json({ message: 'Activity deleted' });
			} else {
				res.status(404).json({ errorMessage: 'That activity seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

router.put('/activities/:id', (req, res) => {
	const { id } = req.params;
	const activity = req.body;

	db
		.activities(id, activity)
		.then((res) => {
			if (res) {
				res.status(200).json({ message: 'Activity updated ', activity: { ...req.body, _id: id } });
			} else {
				res.status(404).json({ errorMessage: 'That activity seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

module.exports = router;
