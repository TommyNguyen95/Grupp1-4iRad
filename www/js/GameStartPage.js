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
        if(this.baseEl.find('#type1').val() === 'Computer'){
            this.baseEl.find('#name1').val('Computer1');
        }
        if(this.baseEl.find('#type2').val() === 'Computer'){
            this.baseEl.find('#name2').val('Computer2');
        }       
        try {
            if(!this.baseEl.find('#name1').val().match(/^[A-Za-z1-2]+$/) || this.baseEl.find('#name1').val().length < 2 || this.baseEl.find('#name1').val().length > 10
             || !this.baseEl.find('#name2').val().match(/^[A-Za-z1-2]+$/) || this.baseEl.find('#name1').val().length < 2 || this.baseEl.find('#name1').val().length > 10){ 
            throw 'Names have to be 2 to 10 letters long';
            }            
        }
        catch(err) {
            alert(err);
            return;
        }
        try {
            if(this.baseEl.find('#type1').val() === 'Choose type..' || this.baseEl.find('#type2').val() === 'Choose type..'){
                throw 'You must choose types'; 
            }
        }
        catch(err){
            alert(err);
            return;
        }
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
