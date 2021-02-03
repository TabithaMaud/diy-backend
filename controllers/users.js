const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

//get all
router.get('/', (req, res, next) => {
	User.find({})
		.then((users) => res.json(users))
		.catch(next);
});

//get by id
router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
		.populate('projects')
		.then((user) => res.json(user))
		.catch(next);
});

//delete
router.delete('/:id', (req, res, next) => {
	// delete projects first?
	User.findByIdAndDelete(req.params.id)
		.then((user) => res.json(user))
		.catch(next);
});

///update
router.put('/:id', (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

//create
router.post('/', (req, res, next) => {
	User.create(req.body)
		.then((user) => res.json(user))
		.catch(next);
});

module.exports = router;
