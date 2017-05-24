// Gọi config app
var path     = require("./config/path");
var config   = require("./config/config");
var routes   = require("./config/routes");
var database = require("./config/database");
var socket   = require("./socket");

// Gọi node_modules
var http           = require('http');
var ejs            = require('ejs');
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var sails          = require('sails');

// Khởi tạo app
var app = express();

app.engine('html', ejs.renderFile);
app.configure(function(){
	app.set('view engine', 'ejs');
	app.set('views', __dirname + path.views);
	app.set('layout', 'layout/layout');
	app.set("layout extractScripts", true);
	app.set("layout extractStyles", true);
	app.set("layout extractMetas", true);

	app.set('port', config.port);
	app.set('path_model', __dirname + path.path_model);
	
	app.use(expressLayouts);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + path.webroot));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

// start routes
routes.setRequestUrl(app);

database.createConnectMysql();

/* Khởi tạo SERVER */
var server = http.createServer(app);
server.listen(app.get('port'), function(){
	var host = server.address().address; // get host
	var port = server.address().port; // get Port
	console.log("Express server listening on port " + app.get('port'));
});
/* END: Khởi tạo SERVER */

// start socket
socket.processSocket(server);