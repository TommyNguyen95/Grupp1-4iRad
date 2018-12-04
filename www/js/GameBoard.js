class GameBoard extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play');



    this.slots = [

    ]

    this.renderBoard()



  }



  renderBoard() {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        this.slots.push(new Slots(row, col));

        console.log('wihoo')


      }

    }


  }

}
