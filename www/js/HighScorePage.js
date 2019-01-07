class HighScorePage extends Component {

  constructor() {
    super();
    this.addRoute('/high-score', 'High Score');
    this.highscoreList = new List(this);
  }

  addItem() {
    let playerName = 'Player name';
    let playerScore = 'Player score';
    this.highscoreList.addItem(playerName, playerScore);
    this.update();
  }

    addHiScore(playerName, playerScore){
        this.highscoreList.addHiscore(playerName, playerScore);
        this.update();
    }


    update(){
        
        JSON._save('highscore', {data: this});
    }
}