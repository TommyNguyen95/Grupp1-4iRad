class GameBoard extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play');
    this.addEvents({
      'click .empty-slots': 'turn'
    });
    this.player1Slots = []
    this.player2Slots = []
    this.slots = []
    this.playersTurn = 0;
    this.renderBoard()
  }

  renderBoard() {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        this.slots.push(new Slots(row, col));
      }
    }
  }

  turn() {
    const currentSlot = this.slots.find(function(item){
      if(item._id == event.target.dataset.instanceId) return true
    })


    if(currentSlot.taken){
      return;
    }

    if(!this.playersTurn){ //Player 1
      this.playersTurn = !this.playersTurn;
      currentSlot.taken = true;
      currentSlot.baseEl[0].classList.add('red')
    }else if(this.playersTurn){ //Player 2
      this.playersTurn = !this.playersTurn;
      currentSlot.taken = true;
      currentSlot.baseEl[0].classList.add('yellow')

    }
  }
}
