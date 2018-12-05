class Game extends Component {

    constructor(players) {
        super();
        this.players = players;
        this.gameBoard = new GameBoard();
        console.log(this);
    }
}