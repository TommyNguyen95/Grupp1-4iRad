class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamestartPage = new GameStartPage();
    this.missingPage = new MissingPage();
    this.gameBoard = new GameBoard();
    this.highscorePage = new HighScorePage();
    this.loadHighscoreData();
  }

  async loadHighscoreData(){
    JSON._classes(HiScorePage, List, Item);
    let response = await JSON._load('highscore.json');
    if(response === null){ return; }
    response.data._id = this.hiscorePage._id;
    this.hiscorePage.highscoreList = response.data.highscoreList;
    this.hiscorePage.render();
  }
}