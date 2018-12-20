class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamestartPage = new GameStartPage();
    App.gamestartPage = this.gamestartPage;
    this.missingPage = new MissingPage();
    this.gameBoard = new GameBoard();
    this.highscorePage = new HighScorePage();
    App.highscorePage = this.highscorePage;
    this.loadHighscoreData();
  }

  async loadHighscoreData(){
    JSON._classes(HighScorePage, List, Item);
    let response = await JSON._load('highscore.json');
    if(response === null){ return; }
    response.data._id = this.highscorePage._id;
    this.highscorePage.highscoreList = response.data.highscoreList;
    this.highscorePage.render();
  }
}