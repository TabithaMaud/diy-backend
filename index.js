const express = require('express');
const app = express();

//import controllers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//controllers

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
});
