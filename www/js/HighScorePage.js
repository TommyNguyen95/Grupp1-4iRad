class HighScorePage extends Component {

  constructor(){
    super();
    this.addRoute('/highScore', 'Highscore');
    
    this.highscoreList = new List(this);

    }

    addItem(){
        let playerName = 'Player name';
        let playerScore = 'Player score';
        this.highscoreList.addItem(playerName, playerScore);
        this.update();
    }


    addItemOnEnter(e){
        if(e.which === 13){
            this.addItem();
        }

    }

    update(){
        this.render();
        JSON._save('highscore', {data: this});
    }
}