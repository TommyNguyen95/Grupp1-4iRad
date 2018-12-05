class GameStartPage extends Component {

    constructor() {
        super();
        this.addRoute('/play', 'Play');
        this.addEvents({
            'click .start-game': 'startGame'
        })
    }



    startGame() {
        let p1 = new Player(this.baseEl.find('#name1').val());
        let p2 = new Player(this.baseEl.find('#name2').val());
        this.game = new Game([p1, p2]);
        let nrOfLetters = 0;
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; p1.length && p2.length; i++)
            if (letters.includes(p1[i]) && p2[i]) {
                nrOfLetters++;
                console.log('Fanny');
            } else {
                break;
            }
        if (nrOfLetters < 2 && nrOfLetters > 10) {
            console.log('No');
        }
    }
}

