class HighScorePage extends Component {

  constructor(){
    super();
    this.addRoute('/highScore', 'High score');
    
    this.highscoreList = new List(this);

    }

    addHiScore(playerName, playerScore){
        this.highscoreList.addHiscore(playerName, playerScore);
        this.update();
    }


    update(){
        this.render();
        JSON._save('highscore', {data: this});
    }
}