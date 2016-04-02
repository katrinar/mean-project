var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {

	var firstName = req.query.name;

	Profile.find({name:firstName}, function(err, profile) {
		if (err != null) {
			res.render('error', err);
			return;	
		}

		var p = profile[0];

		res.render('home', p);
	});

});

module.exports = router;
