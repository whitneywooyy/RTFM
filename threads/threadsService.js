var app = angular.module('rtfmApp');

app.service('threadsService', function(fb){

	var firebaseRef = new Firebase("https://glaring-torch-260.firebaseio.com");
	
	this.getThreads = function(){
		return new Firebase(fb.url);

	};	// End this.getThreads
	this.getThread = function(threadId){
		return new Firebase('https://glaring-torch-260.firebaseio.com' + '/threads/' + threadId);

	};	// End this.getThread

});	// End app.service