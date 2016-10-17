'use strict';
angular.module('services', [])
	.factory('lbService', function(){
	var players = []; 

	return {
		addPlayer: addPlayer,
		getPlayers: getPlayers
	}

	function getPlayers(){
		return players;
	};

	
	function addPlayer(player) {
		players.push(player);
	};
});