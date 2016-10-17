'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addGame', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$log','$scope', function($log,$scope) {
	
	$scope.updateLeaderboard = function(winningPlayer1,winningPlayer2,losingPlayer1,losingPlayer2,winningScore,loserScore){
		
		
		$scope.game = {
			winner1 : winningPlayer1,
			winner2 : winningPlayer2,
			loser1 : winningPlayer1,
			loser2 : winningPlayer2,
			winScore : winningScore,
			loseScore : loserScore
		}

	}
}]);