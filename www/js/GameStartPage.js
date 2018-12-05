class GameStartPage extends Component {

    constructor() {
        super();
        this.addRoute('/play', 'Play');

    }

    // create a method thats create objects
    onFormSend() {
        let p1 = new Player('name1');
        let p2 = new Player('name2');
        this.game = new Game([p1, p2]);
    }

}