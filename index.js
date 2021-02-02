const express = require('express');
const app = express();

//import controllers
const usersController = require('./controllers/users');
const projectsController = require('./controllers/projects');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//controllers
app.use('/users', usersController);
app.use('/projects', projectsController);

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
});
