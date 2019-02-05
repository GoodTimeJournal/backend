// const db = knex(knexConfig.development)

// server.post('/register', (req, res) => {
// 	const { name, password } = req.body;
// 	db.create(users)
// });

server.post('/login', (req, res) => {
	const { username } = req.body;
	res.status(200).send('Login here');
});
