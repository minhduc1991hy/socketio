exports.setRequestUrl = function(app){
	var chats     = require('../src/controllers/chats');
	var users     = require('../src/controllers/users');
	var dashboard = require('../src/controllers/dashboard');
	
	app.all('/', dashboard.index);
	app.all("/chats/index", chats.index);
	app.all('/users/login', users.login);
	app.all('/users/register', users.register);
	app.all('/users/forgot', users.forgot);
}
