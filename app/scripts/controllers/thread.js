'use strict';

angular.module('rtfmApp', ['firebase'])
  .controller('ThreadCtrl', function ($scope, $firebase) {

    var threadsRef = new Firebase('http://devmtn-rtfm.firebaseIO.com/threads');

    $scope.threads = $firebase(threadsRef);
    $scope.currentThread;

    $scope.addThread = function(e) {
      if (e.keyCode !== 13) {
        return;
      }

      $scope.threads.$add({name: $scope.newThreadTitle});
      $scope.newThreadTitle = '';
    }

    $scope.changeThread = function(id) {
      var threadRef = new Firebase('http://devmtn-rtfm.firebaseIO.com/threads/'+id);
      $scope.currentThread = $firebase(threadRef);
      $scope.replies = $scope.currentThread.$child('replies');
    }
    $scope.addReply = function(e, id) {
      var thread = $firebase(new Firebase('http://devmtn-rtfm.firebaseIO.com/threads/'+id));
      if (e.keyCode !== 13) {
        return;
      }
      $scope.replies.$add($scope.newReply);
      $scope.newReply = '';
    }

  });
