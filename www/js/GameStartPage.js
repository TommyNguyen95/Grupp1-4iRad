class GameStartPage extends Component {
  constructor() {
    super();
    this.addRoute('/play', 'Play');
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click .start-game': 'startGame'
    })
  }

  createNewPlayers() {
    try {
      if (this.baseEl.find('#type1').val() === 'Choose type...' || this.baseEl.find('#type2').val() === 'Choose type...') {
        throw 'You must choose types';
      }
    }
    catch (err) {
      alert(err);
      return;
    }
    if (this.baseEl.find('#type1').val() === 'Computer') {
      this.baseEl.find('#name1').val('Computer1');
    }
    if (this.baseEl.find('#type2').val() === 'Computer') {
      this.baseEl.find('#name2').val('Computer2');
    }
    let p1name = this.baseEl.find('#name1').val();
    let p1nameIsValid = this.inputValidation(p1name);

    let p2name = this.baseEl.find('#name2').val();
    let p2nameIsValid = this.inputValidation(p2name);
    if (p1nameIsValid && p2nameIsValid) {
      this.player1 = (this.baseEl.find('#type1').val() === 'Human') ? (new Player(this.baseEl.find('#name1').val(), 1)) : (new Bot(1));
      this.player2 = (this.baseEl.find('#type2').val() === 'Human') ? (new Player(this.baseEl.find('#name2').val(), 2)) : (new Bot(2));
      this.createNewGame(this.player1, this.player2);
    } else {
      alert('Names must be 2 to 10 letters.');
    }
  }

  createNewGame(p1, p2) {
    this.game = new Game(p1, p2);
  }

  startGame() {
    this.createNewPlayers();
    this.render();
  }
  // when I quit the game this method will bring back the form
  unmount() {
    delete this.game;
  }

  inputValidation(name) {
    let alpha = 'abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nrOfSigns = 0; // keep track how many times you loop through the name from the input
    for (let i = 0; i < name.length; i++) { // loops through the name from the player
      if (alpha.includes(name[i])) { // if the inputs signs includes alpha
        nrOfSigns++; // we increment this variabel. When all the signs are finish ex'f+a+n+n+y'
        // it moves on to the if statement on line 51
      }
    }
    if (nrOfSigns < 2 || nrOfSigns > 10) {
      return false;
    } else {
      return true;
    }
  }
}