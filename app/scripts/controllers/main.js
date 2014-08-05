'use strict';

/**
 * @ngdoc function
 * @name debtGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debtGroupApp
 */

app.controller('MainCtrl', function ($scope, Auth) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.Auth = Auth;
});
