class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamestartPage = new GameStartPage();
    this.missingPage = new MissingPage();
    this.gameBoard = new GameBoard();
    this.hiscorePage = new HighScorePage();
  }

}