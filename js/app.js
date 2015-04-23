var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant('fb', {
	url: 'https://glaring-torch-260.firebaseio.com' 
});	// End app.constant 

app.config(function($routeProvider){

	// Routers
	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	})
	.when('/threads', {
		templateUrl: 'threads/threads.html',
		controller: 'threadsCtrl',
		resolve: {
			threadsRef: function(threadService){
				return threadService.getThreads();
			}
		}
	})
	.when('/threads/:threadId', {


	})
	.otherwise({
		redirectTo: '/login'
	})




});	// End app.config