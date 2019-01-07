class StartPage extends Component {

  constructor(){
    super();
    this.addRoute('/', 'Start');
    this.addEvents({
      'click .toGamePage': 'restartButton'
    });
  }

  restartButton(){
    App.NavBar.playButton();
  }
}