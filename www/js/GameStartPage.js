class GameStartPage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play');
    this.addEvents({
      'click .start-game': 'startGame'
    });
  }

  startGame() {
    let p1 = new Player(this.baseEl.find('#name1').val());
    let p2 = new Player(this.baseEl.find('#name2').val());
    this.game = new Game([p1, p2]);
  }
}
