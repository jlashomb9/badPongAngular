'use strict';
angular.module('myApp.services', [])
	.service('lbService', function(){

	var player = {
		name: "Jordan",
		score: "50"
	};
	var player2 = {
		name: "Frank",
		score: "0"
	};
	var players = [self.player,self.player2];

	
	this.addPlayers = function(player) {
		players.push(player);
	};

	this.getPlayers = function(){
		return players;
	};
	this.addGame = function(game){
		players[game.winningPlayer1].score += 20;
		players[game.winningPlayer2].score += 20;
		players[game.losingPlayer1].score -= 20;
		players[game.losingPlayer2].score -= 20;
	}


});