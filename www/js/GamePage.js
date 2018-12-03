class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/spela', 'Spela');

    this.renderBoard()

  }



 renderBoard() {

  let gameBox = `<div class="game-box"></div>`; //7
   
  let slots = []

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      // slots.push(new Slot(row, col));
      // console.log('wihoo')
    }
  }

  
  }
  
}
 