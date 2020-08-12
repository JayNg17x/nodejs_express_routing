module.exports = function(req, res, next){
	console.log('This is a middleware');

	// Do the user check 
	// grap user from database
	// let user = User.findOne({ username: req.params.username });

	// Was no user. 404 
	// if(!user) {
	//    res.status(404);
	//	  return res.send('There is no user');
	// }

	// Attaching information into the request 
	req.user = {
		username: 'Kien'
	};

	next();
}