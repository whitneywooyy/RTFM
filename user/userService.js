var app = angular.module('rtfmApp');

app.service('userService', function(fb){
	var user = {};

	this.login = function(username){
		console.log(username);
	};	// End this.login

	this.getUser = function(){
		return user;
	}

});	// End app.service