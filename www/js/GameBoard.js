class GameBoard extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play');


    this.col1 = [

    ]
    this.col2 = [

    ]
    this.col3 = [

    ]
    this.col4 = [

    ]
    this.col5 = [

    ]
    this.col6 = [

    ]
    this.col7 = [

    ]

    this.renderBoard()



  }



  renderBoard() {
    for (let col = 0; col < 6; col++) {
      this.col1.push(new Slots(col));
      this.col2.push(new Slots(col));
      this.col3.push(new Slots(col));
      this.col4.push(new Slots(col));
      this.col5.push(new Slots(col));
      this.col6.push(new Slots(col));
      this.col7.push(new Slots(col));
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

  

}
