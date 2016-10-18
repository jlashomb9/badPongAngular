'use strict';
angular.module('services', [])
	.factory('lbService', function(){
	var players = []; 

	return {
		addPlayer: addPlayer,
		getPlayers: getPlayers,
		updatePlayerScore: updatePlayerScore,
		playerExist: playerExist
	}

	function getPlayers(){
		return players;
	};

	
	function addPlayer(player) {
		players.push(player);
	};

	function updatePlayerScore(playerName,score){
		for(var i =0;i<players.length; i++){
			if(players[i].name === playerName){
				players[i].score += score;
				if(players[i].score < 0){
					players[i].score = 0;
				}
				break;
			}
		}
	};

	function playerExist(playerName){
		for(var i =0;i<players.length; i++){
			if(players[i].name === playerName){
				return true;
			}
		}
	};
});