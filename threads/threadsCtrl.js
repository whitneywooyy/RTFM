var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsService, threadsRef, $firebaseArray){

	$scope.threads = $firebaseArray(threadsRef);

});	// End app.controller