class Game extends Component {

    constructor(players, type) {
        super();
        this.players = players;
        this.type = type;
        this.gameBoard = new GameBoard();
        console.log(this);
    }
}