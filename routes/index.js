var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
	projects["min"] = false;
	console.log(projects["min"]);
};

exports.viewMin = function(req, res){
	res.render('index', projects);
	projects["min"] = true;
	console.log(projects["min"]);
};
