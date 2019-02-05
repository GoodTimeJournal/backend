const express = require('express');
const router = express();
const db = require('../data/helper/activitiesModal');

// router.get('/activities', (req, res) => {
// 	db(activities)
// 		.then((activities) => {
// 			if (activities.length) {
// 				res.status(200).json(activities);
// 			} else {
// 				res.status(404).json({ message: 'No activities found' });
// 			}
// 		})
// 		.catch((err) => res.status(500).json(`Server error: ${err}`));
// });

router.get('/activities', (req, res) => {
	res.status(200).send('hi');
});

router.get('/activities/:id', (req, res) => {
	const { id } = req.params;
	db(activities)
		.where({ id })
		.first()
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
		.insert(activity)
		.into(activities)
		.then((activities) => {
			res.status(201).json({ message: 'Activity created', id: activities[0] });
		})
		.catch((err) => {
			res.status(500).json(`Server error: ${err}`);
		});
});

router.delete('/activities/:id', (req, res) => {
	const { id } = req.params;
	db('activites')
		.where({ id })
		.del()
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

	db('activities')
		.where({ id })
		.update(activity)
		.then((activities) => {
			if (activities) {
				res.status(200).json({ message: 'Activity updated ', activity: { ...req.body, id: id } });
			} else {
				res.status(404).json({ errorMessage: 'That activity seems to be missing!' });
			}
		})
		.catch((err) => res.status(500).json(`Server error: ${err}`));
});

module.exports = router;
