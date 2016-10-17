'use strict';

angular.module('myApp.view1', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leaderboard', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'lbService', function($scope, lbService) {
	$scope.records = lbService.getPlayers();
       
}]);