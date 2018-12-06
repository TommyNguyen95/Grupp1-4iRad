class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play', '/play'),
      new NavItem('Game Rules', '/game-rules'),
      new NavItem('Hiscore', '/hiscore'),
      new NavItem('DavGame', '/davGame')
    ];
  }

}