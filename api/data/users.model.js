var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: {
			type: String,
			required: true
	},
	lastName: {
		type: String
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

mongoose.model('User',userSchema,'users');