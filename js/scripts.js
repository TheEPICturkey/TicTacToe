//Buisness Logic for Game

function Game() {
  this.players = {};
  this.currentId = 0;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignPlayerId();
  this.players[player.Id]= player;
}

Game.prototype.assignPlayerId = function() {
  if ( this.currentId === "0" || this.currentId === "1") {
    this.currentId += 1;
    return this.currentId;
  } else {
    return {
      error: true,
      message:"There can only be two players"
    };
  }
} 

Game.prototype.findPlayers = function(id) {
  if (this.players[id] !== undefined) {
    return this.players[id];
  }
  return false;
};

//Business Logic for Player

function Player(firstName) {
  this.firstName = firstName;
  this.mark = "X";
}  

Player.prototype.getMarker = function() {
  return this.firstName +"'s" + " marker is " + this.mark;
}