class Column extends Component {

  constructor(gameBoard) {
    super();



    this.gameBoard = gameBoard;




    this.column = []
    this.renderCol();
  }


  renderCol() {
     
    
    for (let col = 0; col < 6; col++) {
      this.column.push(new Slot(col))
    }
 
  }



}
