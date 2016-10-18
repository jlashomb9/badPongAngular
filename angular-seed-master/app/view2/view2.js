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
		var loserPoint = -20;
		var players = lbService.getPlayers();
		$scope.test = !lbService.getPlayers()[0];
		if(!lbService.getPlayers()[0]){
		
			lbService.addPlayer({name: winningPlayer1,score: winnersPoint});
			lbService.addPlayer({name: winningPlayer2,score: winnersPoint});
			lbService.addPlayer({name: losingPlayer1,score: 0});
			lbService.addPlayer({name: losingPlayer1,score: 0});
		}else{
			var winningPlayers = [winningPlayer1,winningPlayer2];
			var losingPlayers = [losingPlayer1,losingPlayer2];
			for(var i =0; i<winningPlayers.length;i++){
				if(lbService.playerExist(winningPlayers[i])){
					lbService.updatePlayerScore(winningPlayers[i],winnersPoint);
				}else{
					lbService.addPlayer({name: winningPlayers[i],score: winnersPoint});
				}
			}

			for(var i =0; i<losingPlayers.length;i++){
				if(lbService.playerExist(losingPlayers[i])){
					lbService.updatePlayerScore(losingPlayers[i],loserPoint);
				}else{
					lbService.addPlayer({name: losingPlayers[i],score: 0});
				}
			}	
		}
	}

}]);

