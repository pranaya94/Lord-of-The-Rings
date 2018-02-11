var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users.controller.js');

router
	.route('/users/register')
	.post(ctrlUsers.register);

router
	.route('/users')
	.get(ctrlUsers.usersGetAll);

module.exports = router;