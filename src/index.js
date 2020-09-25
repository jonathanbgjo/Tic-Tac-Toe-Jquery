const View = require("./ttt-view.js");// require appropriate file
const Game = require("../tic_tac_toe_solution/game.js");// require appropriate file

  $(() => {

    // console.log("this is a test!");
    // Your code here
    window.Game = Game;
    window.View = View;

    let game = new Game()
    let container = $(".ttt");
    let view = new View(game, container);
    window.view = view;
  });
