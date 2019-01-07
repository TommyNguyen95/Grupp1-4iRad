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
      'click .restartButton': 'startGame',
      'click .showScore': 'restartButton'
    });

    this.playerName = this.player1.name;
    this.activePlayer = 1;
    this.winner = '';
    this.moveCounter1 = 0;
    this.moveCounter2 = 0;
    this.winCount = 0;
    this.board = this.gameBoard.board;
    this.doIgnore = false;
    this.animateCounter1 = 1
    this.sleep = function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    this.startGame();
  }

  restartButton(){
    App.NavBar.playButton();
  }

  //The dropcoinStart methods initiates the drop of a token when you click a column. The reason for there being seven of them instead of one
  // is because I don't know how to send an argument through addEvents.
  dropCoinStart0() {
    this.fall(0);
  }

  dropCoinStart1() {
    this.fall(1);
  }

  dropCoinStart2() {
    this.fall(2);
  }

  dropCoinStart3() {
    this.fall(3);
  }

  dropCoinStart4() {
    this.fall(4);
  }

  dropCoinStart5() {
    this.fall(5);
  }

  dropCoinStart6() {
    this.fall(6);
  }

  //this method is for the animation of the tokens and also calls the method(dropCoin()) with the code for dropping the tokens.
  async fall(col) {
    if (this.checkType() === 'Computer') {
      this.doIgnore=true;
    }else{
      this.doIgnore=false;
    }
    if (this.doIgnore) {
      return;
    }
    for (let row = 0; row < 6; row++) {
      if (this.board[row][col].value == 0) {
        if (this.activePlayer === 1) {
          await this.sleep(45)
          this.board[row][col].animate += 1;
          this.render();
          this.board[row][col].animate -= 1;
        } else if (this.activePlayer === 2) {
          await this.sleep(45)
          this.board[row][col].animate += 2;
          this.render();
          this.board[row][col].animate -= 2;
        }


      }

    }
    this.doIgnore=false;
    this.dropCoin(col);
    
  }

  //this method is almost the same as fall() but is used by bots. The only difference basically is that fall() gets disabled when
  // two bots play so it isn't possible to click the board.
  async fall2(col) {
    for (let row = 0; row < 6; row++) {
      if (this.board[row][col].value == 0) {
        if (this.activePlayer === 1) {
          await this.sleep(45)
          this.board[row][col].animate += 1;
          this.render();
          this.board[row][col].animate -= 1;
        } else if (this.activePlayer === 2) {
          await this.sleep(45)
          this.board[row][col].animate += 2;
          this.render();
          this.board[row][col].animate -= 2;
        }

      }

    }

    this.dropCoin(col);


  }

  //This is the method with the code for dropping the tokens and switching players(activePlayer and playerName) and keeping track of
  // number of moves(moveCounter 1 and 2) and calling the method detectWin() which checks if someone won. It also checks if the next
  // player is a computer and if so calls the method doCompMove() which makes the move for the bot. Finally it checks if the board is
  // full and if it is and none is a winner it shows the draw-modal. (The miniBounce thing makes the animation for the bounce).
  async dropCoin(col) {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].value == 0) {
        if (this.activePlayer === 1) {
          this.board[row][col].miniBounce += 1
          this.moveCounter1++;
        }
        else if (this.activePlayer === 2) {
          this.board[row][col].miniBounce += 1
          this.moveCounter2++;
        }
        this.board[row][col].value = this.activePlayer;
        this.activePlayer = (this.activePlayer === 1) ? 2 : 1;
        this.playerName = (this.activePlayer === 1) ? this.player1.name : this.player2.name;
        this.render();
        this.board[row][col].miniBounce -= 1
        this.detectWin();
        await this.sleep(1000);
        if (this.checkType() === 'Computer') {
          if (this.winner) {
            return;
          }
          this.doCompMove();
        }
        if (this.moveCounter1 + this.moveCounter2 === 42 && !this.winner) {
          $('.draw-modal').modal('show');
        }
        return;
      }
    }
  }

  //Method that makes moves for the bots. Generates a random number between 0 and 6 and attempts to drop a token there.
  // If the column is full it calls on itself and tries again.
  doCompMove() {
    let rndNr = Math.floor(Math.random() * 7);
    if (this.checkIfColNotFull(rndNr)) {
      this.fall2(rndNr);
      return;
    }
    else {
      this.doCompMove();
    }
  }

  //Method that returns true if the column checked is not full.
  checkIfColNotFull(col) {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].value === 0) {
        return true;
      }
    }
    return false;
  }

  //Method returns true if both player types are Computer.
  checkIfTwoComp() {
    if (this.player1.type === 'Computer' && this.player2.type === 'Computer') {
      return true;
    }
  }

  //Method that returns the type of the current player.
  checkType() {
    if (this.activePlayer === 1) {
      return this.player1.type;
    }
    if (this.activePlayer === 2) {
      return this.player2.type;
    }
  }

  //This is the method that checks wether someone has won. It loops through the needed number of columns/rows once for each player.
  // If a winner is found the gameOver() method is called with the winner's player number as argument.
  detectWin() {
    //horizontally
    for (let i = 1; i < 3; i++) {
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 6; row++) {
          if (this.board[row][col].value == i) {
            if ((this.board[row][col + 1].value == i) && (this.board[row][col + 2].value == i) && (this.board[row][col + 3].value == i)) {
              if (this.board[row][col].value === 1) {
                this.board[row][col + 1].winningLine += 1, this.board[row][col + 2].winningLine += 1, this.board[row][col + 3].winningLine += 1, this.board[row][col].winningLine += 1
              } else {
                this.board[row][col + 1].winningLine += 2, this.board[row][col + 2].winningLine += 2, this.board[row][col + 3].winningLine += 2, this.board[row][col].winningLine += 2

              }
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
              if (this.board[row][col].value === 1) {
                this.board[row + 1][col].winningLine += 1, this.board[row + 2][col].winningLine += 1, this.board[row + 3][col].winningLine += 1, this.board[row][col].winningLine += 1
              } else {
                this.board[row + 1][col].winningLine += 2, this.board[row + 2][col].winningLine += 2, this.board[row + 3][col].winningLine += 2, this.board[row][col].winningLine += 2
              }
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
              if (this.board[row][col].value === 1) {
                this.board[row + 1][col + 1].winningLine += 1, this.board[row + 2][col + 2].winningLine += 1, this.board[row + 3][col + 3].winningLine += 1, this.board[row][col].winningLine += 1
              } else {
                this.board[row + 1][col + 1].winningLine += 2, this.board[row + 2][col + 2].winningLine += 2, this.board[row + 3][col + 3].winningLine += 2, this.board[row][col].winningLine += 2

              }
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
              if (this.board[row][col].value === 1) {
                this.board[row - 1][col + 1].winningLine += 1, this.board[row - 2][col + 2].winningLine += 1, this.board[row - 3][col + 3].winningLine += 1, this.board[row][col].winningLine += 1
              } else {
                this.board[row - 1][col + 1].winningLine += 2, this.board[row - 2][col + 2].winningLine += 2, this.board[row - 3][col + 3].winningLine += 2, this.board[row][col].winningLine += 2

              }
              this.gameOver(i);
              return true;
            }
          }
        }
      }
    }
  }

  //Method that is called when somebody wins. Sets the winCount variable to the number of moves the winner did and the winner variable
  // to the name of the winning player. It also sends those variables to the highscore page. Finally it shows the winner-modal.
  gameOver(player) {

    this.winCount = (player === 1) ? this.moveCounter1 : this.moveCounter2;
    this.winner = (player === 1) ? this.player1.name : this.player2.name;
    this.render();
    this.doIgnore = true;

    setTimeout(function () { $('.win-modal').modal('show'); }, 2000);

    if (this.winner === 'Computer1' || this.winner === 'Computer2') {
    } else {
      App.highscorePage.addHiScore(this.winner, this.winCount);
    }


  }

  //Method that renders the board and resets variables to starting conditions. It also checks if both players are bots and if so disables clicks
  // and kickstarts the fall2() method which will automatically play for the bots. Finally if the check for two bots fails, it checks if the first
  // player is a bot and if so makes the needed first move for it.
  startGame() {
    this.gameBoard.renderBoard();
    this.doIgnore = false;
    this.playerName = this.player1.name;
    this.activePlayer = 1;
    this.winner = '';
    this.moveCounter1 = 0;
    this.moveCounter2 = 0;
    this.winCount = 0;
    this.render();
    if (this.checkIfTwoComp()) {
      this.doIgnore = true;
      this.fall2(Math.floor(Math.random() * 7));
    }
    else if (this.checkType() === 'Computer') {
      this.fall(Math.floor(Math.random() * 7));
    }
  }

}