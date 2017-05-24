"use strict";
var config = require('../../config/config');

/* controller đăng nhập */
exports.login = function (req, res, next) {
	config.site_name = 'Đăng nhập';	
    res.render('./users/login', {
    	'layout': 'layout/page',
    	'config': config,
    	'body_class': 'login-page',
    });
};

/* controller đăng ký */
exports.register = function (req, res, next) {	
    res.render('./users/register', {
    	'layout': 'layout/page',
    	'config': config,
    	'body_class': 'register-page',
    });
};

/* controller quên mật khẩu */
exports.forgot = function (req, res, next) {
    res.render('./users/forgot', {
    	'layout': 'layout/page',
    	'config': config,
    	'body_class': 'forgot-page',
    });
};