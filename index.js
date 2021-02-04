const express = require('express');
const app = express();
const cors = require('cors');

//import controllers
const usersController = require('./controllers/users');
const projectsController = require('./controllers/projects');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
//controllers
app.use('/users', usersController);
app.use('/', projectsController);

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
});
