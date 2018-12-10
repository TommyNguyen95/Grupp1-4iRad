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
        let p1name = this.baseEl.find('#name1').val();
        let p1nameIsValid = this.inputValidation(p1name);

        let p2name = this.baseEl.find('#name2').val();
        let p2nameIsValid = this.inputValidation(p2name);

        if (p1nameIsValid && p2nameIsValid) {

            let p1 = new Player(p1name);
            let p2 = new Player(p2name);

            this.createNewGame(p1, p2);
        } else {
            prompt('To few letters')
        }
    }

    createNewGame(p1, p2) {
        this.game = new Game([p1, p2]);
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
        let alpha = 'abcdefghijklmnopqrstuvxywz';
        let nrOfSigns = 0; // keep track how many times you loop through the name from the input
        for (let j = 0; j < name.length; j++) { // loops through the name from the player
            if (alpha.includes(name[j])) { // if the inputs signs includes alpha
                nrOfSigns++; // we increment this variabel. When all the signs are finish ex'f+a+n+n+y'
                // it moves on to the if statement on line 51
            }
        }
        console.log('nrofisgns', nrOfSigns);

        if (nrOfSigns < 2 || nrOfSigns > 10) {
            console.log('hello type again');
            return false;
        } else {
            console.log('im an else');
            return true;
        }
    }
}