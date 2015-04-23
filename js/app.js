var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'login/loginCtrl.js'
	})
	.when('/threads', {


	})
	.when('/threads/:threadId', {


	})
	.otherwise({
		redirectTo: '/login'
	})




});	// End app.config