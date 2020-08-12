module.exports = {
	showDashboard: showDashboard
}

function showDashboard(req, res) {
	res.send('This is a dashboard!');
}