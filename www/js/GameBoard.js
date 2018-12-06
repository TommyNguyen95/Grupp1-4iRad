class GameBoard extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play');
    this.addEvents({
      'click .empty-slots': 'turn'
    });
    this.player1Slots = []
    this.player2Slots = []
    this.board = []
  
    this.playersTurn = 0;
    this.renderBoard()
  }






  renderBoard() {
    for (let row = 0; row < 7; row++) {
      this.board.push(new Column((row)));

    }


  }







  detectWin() {
    //horizontally
    for (i = 1; i < 3; i++) {
      for (col = 0; col < 4; col++) {
        for (row = 0; row < 6; row++) {
          if (this.slots[row][col].value == i) {
            if ((this.slots[row][col + 1].value == i) && (this.slots[row][col + 2].value == i) && (this.slots[row][col + 3].value == i)) {
              gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //vertically
    for (i = 1; i < 3; i++) {
      for (col = 0; col < 7; col++) {
        for (row = 0; row < 3; row++) {
          if (this.slots[row][col].value == i) {
            if ((this.slots[row + 1][col].value == i) && (this.slots[row + 2][col].value == i) && (this.slots[row + 3][col].value == i)) {
              gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //diagonally down
    for (i = 1; i < 3; i++) {
      for (col = 0; col < 4; col++) {
        for (row = 0; row < 3; row++) {
          if (this.slots[row][col].value == i) {
            if ((this.slots[row + 1][col + 1].value == i) && (this.slots[row + 2][col + 2].value == i) && (this.slots[row + 3][col + 3].value == i)) {
              gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //diagonally up
    for (i = 1; i < 3; i++) {
      for (col = 0; col < 4; col++) {
        for (row = 3; row < 6; row++) {
          if (this.slots[row][col].value == i) {
            if ((this.slots[row - 1][col + 1].value == i) && (this.slots[row - 2][col + 2].value == i) && (this.slots[row - 3][col + 3].value == i)) {
              gameOver(i);
              return true;
            }
          }
        }
      }
    }
  }



  turn() {
    const currentSlot = this.board.find(function (item) {
      if (item._id == event.target.dataset.instanceId) return true
    })


    if (currentSlot.taken) {
      return;
    }

    if (!this.playersTurn) { //Player 1
      this.playersTurn = !this.playersTurn;
      currentSlot.taken = true;
      currentSlot.baseEl[0].classList.add('red')
    } else if (this.playersTurn) { //Player 2
      this.playersTurn = !this.playersTurn;
      currentSlot.taken = true;
      currentSlot.baseEl[0].classList.add('yellow')

    }
  }
}
