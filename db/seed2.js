const User = require('./models/User');
const Project = require('./models/Project');

const createUser = (user) => {
	return User.create(user).then((newUser) => {
		console.log(`added user: ${newUser}`);
		return newUser;
	});
};

const createProjects = (userId, project) => {
	project.author = userId;
	return Project.create(project).then((newProject) => {
		User.findByIdAndUpdate(
			userId,
			{
				$push: {
					projects: newProject._id,
				},
			},
			{ new: true, useFindAndModify: false }
		);
	});
};

const runSeed = async function () {
	var user = await createUser({
		username: 'tabithaperry',
		email: 'tabitha@gmail.com',
		password: 'password',
	});
	user = await createProjects(user._id, {
		title: 'DYI Bookshelf',
		description: 'how to build and install your own bookshelf',
		directions: [
			'step 1: kjaekjejkw',
			'step 2: kdsjflkjeslkjf',
			'step 3: ksljdfekslhhjfse',
		],
		budget: 20,
	});
};

runSeed();
