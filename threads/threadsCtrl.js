var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsService, threadsRef, $firebaseArray){

	$scope.threads = $firebaseArray(threadsRef);

	$scope.threads.$loaded().then(function (threads) {
    	console.log("Threads", threads);
    });	// End $scope.threads.$loaded()	// What is this doing?

	$scope.createThread = function(username, threadTitle){
		// console.log("WAHT");	// WORKS
		$scope.threads.$add({
			username: username,
			title: threadTitle
		});	// End $scope.threads.$add

	};	// End $scope.createThread

});	// End app.controller