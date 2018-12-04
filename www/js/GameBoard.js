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

}
