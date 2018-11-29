class AboutPage extends Component {

  constructor(){
    super();
    this.addRoute('/about', 'About');
    this.addEvents({
      'click button': 'toggleDetails'
    });
    this.showDetails = false;
  }

  unmount(){
    this.showDetails = false;
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.render();
  }

}