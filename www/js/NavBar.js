class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play', '/play'),
      new NavItem('Game Rules', '/game-rules'),
      new NavItem('High Score', '/high-score'),
    ];
    this.playButton();
    this.addEvents({
      'click .nav-link': 'playButton'
    });
  }

  async playButton(){

    if(this.navItems[1].name === 'Restart'){
      App.gamestartPage.unmount()
    }
    await this.navItems;
    if (window.location.href === 'http://localhost:3000/play'){
       this.navItems[1].name = 'Restart'

     }else{
      this.navItems[1].name = 'Play'
      
    }
     this.render();
  }

  goPlayPage(){
    if (window.location.href === 'http://localhost:3000/play'){
      this.navItems[1].name = 'Restart'
  }
  }
  
}