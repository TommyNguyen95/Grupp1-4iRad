class Game extends Component {

  constructor(player1, player2) {
    super();
    this.gameBoard = new GameBoard();
    this.player1 = player1;
    this.player2 = player2;

    this.addEvents({
      'click .col0': 'dropCoinStart0',
      'click .col1': 'dropCoinStart1',
      'click .col2': 'dropCoinStart2',
      'click .col3': 'dropCoinStart3',
      'click .col4': 'dropCoinStart4',
      'click .col5': 'dropCoinStart5',
      'click .col6': 'dropCoinStart6',
      'click .restartButton': 'startGame'
    });

    this.playerName = this.player1.name;
    this.activePlayer = 1;
    this.winner = '';
    this.moveCounter1 = 0;
    this.moveCounter2 = 0;
    this.winCount = 0;
    this.board = this.gameBoard.board;

    this.startGame();
  }

  dropCoinStart0() {
    this.dropCoin(0);
  }

  dropCoinStart1() {
    this.dropCoin(1);
  }

  dropCoinStart2() {
    this.dropCoin(2);
  }

  dropCoinStart3() {
    this.dropCoin(3);
  }

  dropCoinStart4() {
    this.dropCoin(4);
  }

  dropCoinStart5() {
    this.dropCoin(5);
  }

  dropCoinStart6() {
    this.dropCoin(6);
  }  

  dropCoin(col) {    
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].value == 0) {
        if (this.activePlayer === 1) {
          this.moveCounter1++;
        }
        else if (this.activePlayer === 2) {
          this.moveCounter2++;
        }
        this.board[row][col].value = this.activePlayer;
        this.activePlayer = (this.activePlayer === 1) ? 2 : 1;
        this.playerName = (this.activePlayer === 1) ? this.player1.name : this.player2.name;
        this.render();
        this.detectWin();
        if(this.checkType() === 'Computer'){
          if(this.winner){
            return;
          }
          this.dropCoin(Math.floor(Math.random()*7));
        }
        return;
      }
    }
  }

  dropCoin2(col) {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].value == 0) {
        if (this.activePlayer === 1) {
          this.moveCounter1++;
        }
        else if (this.activePlayer === 2) {
          this.moveCounter2++;
        }
        this.board[row][col].value = this.activePlayer;
        this.activePlayer = (this.activePlayer === 1) ? 2 : 1;
        this.playerName = (this.activePlayer === 1) ? this.player1.name : this.player2.name;
        this.render();
        this.detectWin();
        return;
      }
    }
  }

  checkIfTwoComp(){
    if(this.player1.type === 'Computer' && this.player2.type === 'Computer'){
      return true;
    }
  }

  runTwoComp(){
    while(!this.winner){
      this.dropCoin2(Math.floor(Math.random()*7));
    }         
  }

  checkType(){
    if(this.activePlayer === 1) {
      return this.player1.type;
    }
    if(this.activePlayer === 2) {
      return this.player2.type;
    }
  }

  detectWin() {
    //horizontally
    for (let i = 1; i < 3; i++) {
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 6; row++) {
          if (this.board[row][col].value == i) {
            if ((this.board[row][col + 1].value == i) && (this.board[row][col + 2].value == i) && (this.board[row][col + 3].value == i)) {
              this.gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //vertically
    for (let i = 1; i < 3; i++) {
      for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
          if (this.board[row][col].value == i) {
            if ((this.board[row + 1][col].value == i) && (this.board[row + 2][col].value == i) && (this.board[row + 3][col].value == i)) {
              this.gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //diagonally down
    for (let i = 1; i < 3; i++) {
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
          if (this.board[row][col].value == i) {
            if ((this.board[row + 1][col + 1].value == i) && (this.board[row + 2][col + 2].value == i) && (this.board[row + 3][col + 3].value == i)) {
              this.gameOver(i);
              return true;
            }
          }
        }
      }
    }

    //diagonally up
    for (let i = 1; i < 3; i++) {
      for (let col = 0; col < 4; col++) {
        for (let row = 3; row < 6; row++) {
          if (this.board[row][col].value == i) {
            if ((this.board[row - 1][col + 1].value == i) && (this.board[row - 2][col + 2].value == i) && (this.board[row - 3][col + 3].value == i)) {
              this.gameOver(i);
              return true;
            }
          }
        }
      }
    }
  }

  gameOver(player) {
    this.winCount = (player === 1) ? this.moveCounter1 : this.moveCounter2;    
    this.winner = (player === 1) ? this.player1.name : this.player2.name;
    this.render();
    setTimeout(function(){$('.modal').modal('show');}, 100);
    
  }

  startGame() {
    this.gameBoard.renderBoard();
    this.playerName = this.player1.name;
    this.activePlayer = 1;
    this.winner = '';
    this.moveCounter1 = 0;
    this.moveCounter2 = 0;
    this.winCount = 0;
    this.render();
    if(this.checkIfTwoComp()){
      this.runTwoComp();
    }
    else if(this.checkType() === 'Computer'){
      this.dropCoin2(Math.floor(Math.random()*7));
    }
    
      
  }
}