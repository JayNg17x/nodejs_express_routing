const express = require('express');
const router = express.Router();
const path = require('path');
const siteController = require('./controllers/site.controller');
const dashboardController = require('./controllers/dashboard.controller');
const checkNameMiddleware = require('./middlewares/checkName');


// Export the router 
module.exports = router;

// Site routes 
router.get('/', 			siteController.showHome);
router.get('/about', 		siteController.showAbout);
router.get('/contact',	 	siteController.showContact);
router.post('/contact', 	siteController.processContact);
router.get('/@:username/:post_slug', checkNameMiddleware, siteController.showProfile);


// dashboard routes 
router.get('/dashboard', dashboardController.showDashboard);

// api routes 

// 404 caching 
router.use(siteController.show404);
