var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadsService, threadsRef, $firebaseObject, $firebaseArray, commentsRef){

	var thread = $firebaseObject(threadsRef);
	
	thread.$bindTo($scope, 'thread');
	
	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text){
		$scope.comments.$add({
			username: username,
			text: text
		});	// End $scope.comments.$add

	};	// End $scope.createComment

});	// End app.controller