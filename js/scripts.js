//Buisness Logic for Game
function Game() {
  this.players = {};
  this.currentId = 0;
}

Game.prototype.addPlayer = function(player) {
  
  if ( this.currentId == 0 || this.currentId === 1) { 
    player.id = this.assignPlayerId();
    this.players[player.id]= player;

  } else {
    return {
      error: true,
      message:"There can only be two players"
    };
  }
}

Game.prototype.assignPlayerId = function() {
  this.currentId += 1;
  return this.currentId;
} 

Game.prototype.findPlayer = function( id ) {
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



//Space Logic 

function Space() {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.spaceHeight = 160;
    this.spaceWidth = 160;
}


Space.prototype.markBy = function() {
 
}