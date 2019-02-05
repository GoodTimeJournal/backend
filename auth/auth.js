const jwt = require('jsonwebtoken');
const jwtKey = process.env.secret;

module.exports = {
	authenticate,
	generateToken
};

function authenticate(req, res, next) {
	const token = req.get('Authorization');

	if (token) {
		jwt.verify(token, jwtKey, (err, decoded) => {
			if (err) return res.status(401).json(err);

			req.decoded = decoded;

			next();
		});
	} else {
		return res.status(401).json({
			error: 'No token provided, must be set on the Authorization Header'
		});
	}
}

function generateToken(user) {
	const payload = {
		username: user.username,
		password: user.password
	};
	const options = {
		expiresIn: '10m'
	};
	return jwt.sign(payload, jwtKey, options);
}