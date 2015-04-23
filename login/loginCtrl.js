var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location){
	
	$scope.logMeIn = function(){
		alert($scope.username);
	};	// End $scope.logMeIn

	$scope.$apply(function(){
		$location.path('/threads');
	});	// End $scope.$location

});	// End app.controller