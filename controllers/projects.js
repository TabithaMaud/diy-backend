const express = require('express');
const router = express.Router();
const Project = require('../db/models/Project');
const User = require('../db/models/User');

router.get('/projects', (req, res, next) => {
	Project.find({})
		// .populate('author')
		.then((projects) => res.json(projects))
		.catch(next);
});

router.get('/projects/:id', (req, res, next) => {
	Project.findById(req.params.id)
		.populate('author')
		.then((project) => res.json(project))
		.catch(next);
});

//delete
router.delete('/projects/:id', (req, res, next) => {
	Project.findByIdAndDelete(req.params.id)
		.then((project) => {
			res.json(project);
		})
		.catch(next);
});

/// create
router.post('/users/:userId/project', (req, res, next) => {
	const project = req.body;
	project.author = req.params.userId;
	Project.create(project)
		.then((newProject) => {
			User.findByIdAndUpdate(
				req.params.userId,
				{
					$push: {
						projects: newProject._id,
					},
				},
				{ new: true, useFindAndModify: false }
			).then(() => {
				res.json(newProject);
			});
		})
		.catch(next);
});

// update
router.put('/projects/:id', (req, res, next) => {
	Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((project) => res.json(project))
		.catch(next);
});

module.exports = router;
