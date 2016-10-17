'use strict';

angular.module('myApp.view2', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addGame', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$log','$scope','lbService', function($log,$scope,lbService) {
	
	$scope.debug = '';

	$scope.updateLeaderboard = function(winningPlayer1,winningPlayer2,losingPlayer1,losingPlayer2,winningScore,loserScore){

		var winnersPoint = 30;
		var loserPoints = -20;
		var players = lbService.getPlayers();

		
			lbService.addPlayer({name: winningPlayer1,score: winnersPoint});
			lbService.addPlayer({name: winningPlayer2,score: winnersPoint});
			lbService.addPlayer({name: losingPlayer1,score: loserPoints});
			lbService.addPlayer({name: losingPlayer1,score: loserPoints});
		



	}

}]);