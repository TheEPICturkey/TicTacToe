//Buisness Logic for Game

function Game() {
  this.players = {};
  this.currentId = 0;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignPlayer();
  this.currentId[player.Id]= player
}

Game.prototype.assignPlayer = function() {
  this.currentId += 1;
  return this.currentId;
}




//Business Logic for Player

// function Player(firstName) {
//   this.firstName = firstName;
//   this.mark = mark;
// }  

// Player.prototype = function() {
//   return this.firstname +"'s" + "marker is" + this.mark;
// }