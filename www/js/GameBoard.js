class GameBoard {

  constructor() {
    this.board = [];
    this.renderBoard();
  }

  renderBoard() {
    for (let row = 0; row < 6; row++) {
      this.board[row] = [];
      for (let col = 0; col < 7; col++) {
        this.board[row][col] = new Slot(this, col);
      }
    }
  }
}