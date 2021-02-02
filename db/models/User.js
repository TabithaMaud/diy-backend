const mongoose = '../connection.js';

const UserSchema = mongoose.Schema({
	username: String,
	email: String,
	password: String,
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
		},
	],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
