class View {
  constructor(game, container) {
    this.game = game;
    this.container = container;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    $("ul > li").on("click", function(event) {
      that.makeMove(event.target);
    });
    
  }

  makeMove(target) {
    let id = $(target).attr("id");
    let row = Math.floor(id / 3);
    let col = id % 3;

    if (!this.game.board.isEmptyPos([row, col])) {
      alert("You can't move there!!!");
    } else {
      this.game.playMove([row, col]);
      $(target).css("text-align", "center");
      // $(target).css("margin", "auto");
      $(target).css("font-size", "100px");
      $(target).append(this.game.currentPlayer);
      $(target).css("background-color", "white");

    }
    if (this.game.isOver()) {
      alert(this.game.currentPlayer +" has won");
    }
  }

  setupBoard() {
    let ul = $("<ul></ul>");
    ul.css("display", "flex");
    ul.css("width", 300);
    ul.css("flex-wrap", "wrap")
    ul.css("list-style","none")
    this.container.append(ul);
    
    for(let i = 0;i <9;i++){
      let li = $("<li></li>");
      li.attr("id", i);
      li.css("width", 95);
      li.css("height",95);
      li.css("border-style", "solid");
      li.css("border-width", 1);
      li.css("background-color", "gray");
      // li.css("hover", "yellow")
      // border - width: 5px;
      ul.append(li);
    }

    let that = this;
    $("ul > li").hover(function(event) {

      let id = $(event.target).attr("id");
      let row = Math.floor(id / 3);
      let col = id % 3;

      if (!that.game.board.isEmptyPos([row, col])) 
        $(event.target).css("background-color", "white");
      else
        $(event.target).css("background-color", "yellow");
    }, function(event) {

      let id = $(event.target).attr("id");
      let row = Math.floor(id / 3);
      let col = id % 3;

      if (!that.game.board.isEmptyPos([row, col])) 
        $(event.target).css("background-color", "white");
      else
        $(event.target).css("background-color", "gray");
    });

  }

}

module.exports = View;
