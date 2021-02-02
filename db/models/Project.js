const { Types } = require('mongoose');
const mongoose = require('../connection');

const ProjectSchema = mongoose.Schema({
	image: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	title: String,
	description: String,
	directions: Array,
	materials: Array,
	budget: Number,
	video: String,
	gallery: Array,
	comments: [
		{
			title: String,
			comment: String,
			author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		},
	],
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
