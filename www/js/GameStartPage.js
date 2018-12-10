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
        let p1 = new Player(this.baseEl.find('#name1').val());
        let p2 = new Player(this.baseEl.find('#name2').val());
        this.game = new Game([p1, p2]);
        console.log(this.game);
        this.render();
    }
    // when I quit the game this method will bring back the form
    unmount() {
        delete this.game;
    }
}