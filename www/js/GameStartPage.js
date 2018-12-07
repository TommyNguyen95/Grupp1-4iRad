class GameStartPage extends Component {

    constructor() {
        super();
        this.addRoute('/play', 'Play');
        this.playersForm = new PlayersForm();
        this.addEvents({
            'click .start-game': 'startGame'
        })
    }



    startGame() {
        this.player1 = (this.baseEl.find('#type1').val() === 'Human') ? (new Player(this.baseEl.find('#name1').val(), 1)) : (new Bot(1));
        this.player2 = (this.baseEl.find('#type2').val() === 'Human') ? (new Player(this.baseEl.find('#name2').val(), 2)) : (new Bot(2));        
        this.game = new Game(this.player1, this.player2);              
        this.render();
    }
    // when I quit the game this method will bring back the form
    unmount() {
        delete this.game;
    }
}
