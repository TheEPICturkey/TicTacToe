Describe: Game()

Test: It will show TicTacToe as a Game Object.
Code: TicTacToe;
Expected Output: Game {players: {…}, currentId: 0}
Result: Game {players: {…}, currentId: 0}

Test: It will show player count.
Code:TicTacToe.currentId
Expected: "0"
Result: "0"

Description: assignPlayerID ()
Test: It will save player ID.
Code:TicTacToe.assignPlayerId ();
Expected: "1"
Result: "1"

Description: Player (First Name)
Test: It will create a player. 
Code:let player1 = new Player (Bai)
Expected: { "firstName": "Bai", "mark": "X" }
Result: { "firstName": "Bai", "mark": "X" }

Description: getMarker()
Test: It will return the correct marker for the correct player
Code: player1.getMarker();
Expected: "Bai's marker is X"
Result: "Bai's marker is X"

Description: Game.prototype.addPlayer
Test: It will add and save players to the game.
Code: TicTacToe.addPlayer (player1)
Expected: undefined
Result: undefined

Test: If three or more players are added, an error message will come back.
Code: TicTacToe.addPlayer (player3)
Expected: error: true,
          message:"There can only be two players"
Result: error: true,
        message:"There can only be two players"