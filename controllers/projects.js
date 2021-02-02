const express = require('express');
const router = express.Router();
const Project = require('../db/models/Project');

router.get('/', (req, res, next) => {
	Project.find({})
		.then((projects) => res.json(projects))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Project.findById(req.params.id)
		.then((project) => res.json(project))
		.catch(next);
});

module.exports = router;