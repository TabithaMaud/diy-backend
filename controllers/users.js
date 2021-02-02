const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch(next);
});

module.exports = router;
