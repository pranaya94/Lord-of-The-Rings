var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');

module.exports.register = function(req, res){
	console.log('registering user');

	var firstName = req.body.firstName;
	var lastName = req.body.lastName || null;
	var email = req.body.email;
	var password = req.body.password;
	
	User.create({
		firstName: firstName,
		lastName: lastName,
		email : email,
		password: bcrypt.hashSync(password,bcrypt.genSaltSync(10))
	}, function(err,user){
		if(err){
			console.log(err);
			if(err.code == 11000){
				console.log("This email already exists");
			}

			res
				.status(400)
				.json('This email already exists');
		}else{
			console.log('user created',user);
			res
				.status(201)
				.json(user);
		}
	});
};

module.exports.usersGetAll = function(req,res){
	
	User
		.find()
		.exec(function(err,users){
			if(err){
				console.log("Error getting users");
			}else{
				
				res
					.status(200)
					.json(users);
			}
		});

};
