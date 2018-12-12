class Slot extends Component {

  constructor(gameBoard, col) {
    super();
    this.value = 0;
    this.col = 'col' + col;
    this.animate= 0;
    this.gameBoard=gameBoard;
    this.miniBounce=0;
  }
}
