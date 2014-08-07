'use strict';

/**
 * @ngdoc function
 * @name debtGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debtGroupApp
 */

app.controller('MainCtrl', function ($scope, $rootScope, FIREBASE_URL, $location) {
  var ref = new Firebase(FIREBASE_URL);

  var authTool;

  $scope.init = function() { //Init the login state on page load
    authTool = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        console.log(error);
      }
      if (user) {
        $rootScope.userAuth = user;
        console.log(user);
      }
      else {
        $rootScope.userAuth = null;
        console.log('No user logged in');
      }
    });
  };

  $scope.isAuthenticated = function() {
    return localStorage.getItem('firebaseSession');
  };

  $scope.logout = function() {
    authTool.logout();
    $location.path('/');
  };
});
