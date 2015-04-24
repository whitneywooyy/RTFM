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
			threadsRef: function(threadsService){
				return threadsService.getThreads();
			}
		}
	})
	.when('/threads/:threadId', {
		templateUrl: 'threads/thread.html',
		controller: 'threadCtrl',
		resolve: {
			threadRef: function(threadsService, $route){
				return threadsService.getThread($route.current.params.threadId);
			},
			commentsRef: function(threadsService, $route){
				return threadsService.getComments($route.current.params.threadId);
			}	// Doesn't Work
		}

	})
	.otherwise({
		redirectTo: '/login'
	})




});	// End app.config