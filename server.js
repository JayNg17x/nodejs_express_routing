const app = require('express')();
const port = process.env.PORT || 3001;
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes 
app.use(require('./app/routes'));

// start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});